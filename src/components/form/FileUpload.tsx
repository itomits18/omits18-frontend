import { useUploadFile } from '@/app/competition/hooks/useUploadFile';
import { cn } from '@/lib/utils';
import { Upload, X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import HelperText from './HelperText';
import LabelText from './LabelText';

interface FileUploadProps {
  id: string;
  label?: string;
  validation?: RegisterOptions;
  className?: string;
  helpertext?: string | React.ReactNode;
  type?: 'omits' | 'mission';
  onStatusChange?: (
    status: 'success' | 'error' | null,
    fileName?: string,
  ) => void;
  supportFiles?: string[];
  isRequired?: boolean;
  labelTextClassName?: string;
  sizes?: 'sm' | 'lg';
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  validation,
  className,
  helpertext,
  type,
  onStatusChange,
  labelTextClassName,
  supportFiles = ['png', 'jpeg', 'jpg'],
  isRequired = false,
}) => {
  const {
    setValue,
    register,
    formState: { errors },
    setError,
  } = useFormContext();
  const [uploadStatus, setUploadStatus] = useState<'success' | 'error' | null>(
    null,
  );
  const [fileName, setFileName] = useState<string | null>(null);
  const { mutateAsync: UploadFile, isPending: LoadingUpload } = useUploadFile();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const maxSize = 3 * 1048576; // 3 mb

    if (!file) {
      resetFile();
      return;
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const isValidExtension = supportFiles.includes(fileExtension || '');

    if (!isValidExtension) {
      updateStatus(
        'error',
        `Invalid file format. Allowed: ${supportFiles.join(', ')}`,
      );
    } else if (file.size > maxSize) {
      updateStatus('error', 'File size is too large');
    } else {
      UploadFile(file)
        .then((res) => {
          updateStatus('success', file.name);
          setValue(id, res.key);
        })
        .catch((err) => {
          if (err.status === 413) {
            updateStatus(
              'error',
              'Terdapat masalah pada file. file terlalu besar',
            );
          } else {
            updateStatus('error', err.message || 'Gagal upload file');
          }

          setError(id, { type: 'manual', message: err.message });
        });
    }
  };

  const updateStatus = (status: 'success' | 'error', message: string) => {
    setUploadStatus(status);
    setFileName(message);
    onStatusChange?.(status, message);
  };

  const resetFile = () => {
    setUploadStatus(null);
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setValue(id, null);
    onStatusChange?.(null);
  };

  const dynamicHelperText =
    uploadStatus === 'success'
      ? 'File uploaded successfully.'
      : errors[id]
        ? (errors[id]?.message as string)
        : helpertext;

  return (
    <div className="w-full space-y-2">
      {label && (
        <LabelText required={isRequired} labelTextClasname={labelTextClassName}>
          {label}
          {/* {isRequired && <span className="text-red-500">*</span>} */}
        </LabelText>
      )}

      <div
        className={cn(
          'relative flex w-full cursor-pointer items-center justify-between rounded-md border px-5 py-3 text-sm',
          'py-3',
          uploadStatus === 'success'
            ? type === 'omits'
              ? 'bg-green-200'
              : 'bg-blue-300'
            : uploadStatus === 'error'
              ? 'border-additions-brown-100 bg-additions-brown-100'
              : 'bg-neutral-main',
          className,
        )}
      >
        <input
          {...register(id, {
            ...validation,
            validate: (file) => {
              if (!file && isRequired) return 'File is required';
              if (file) {
                const fileExtension = file.name.split('.').pop()?.toLowerCase();
                const maxFileSize = 3 * 1024 * 1024;
                if (!supportFiles.includes(fileExtension || '')) {
                  return `Invalid file format. Allowed formats: ${supportFiles.join(
                    ', ',
                  )}`;
                }
                if (file.size > maxFileSize) {
                  return 'The maximum file size is 3 MB.';
                }
              }
              return true;
            },
          })}
          type="file"
          id={id}
          name={id}
          accept={supportFiles.map((ext) => `.${ext}`).join(', ')}
          ref={fileInputRef}
          onChange={handleFileChange}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          aria-describedby={id}
          required={isRequired}
        />

        <span
          id={`${id}-placeholder`}
          className={cn(
            'pointer-events-none',
            uploadStatus === 'success'
              ? 'text-neutral-main'
              : uploadStatus === 'error'
                ? 'text-neutral-50'
                : 'text-gray-600',
          )}
        >
          {LoadingUpload ? 'Uploading File...' : fileName || 'Upload disini'}
        </span>

        <div>
          {uploadStatus ? (
            <X
              className={cn(
                'absolute top-1/4 right-[4%] h-5 w-5',
                uploadStatus === 'error'
                  ? 'text-neutral-main'
                  : 'text-neutral-main',
              )}
              onClick={resetFile}
            />
          ) : (
            <Upload className="text-black-300 h-4 w-4" />
          )}
        </div>
      </div>

      {dynamicHelperText && (
        <HelperText
          helperTextClassName={cn(
            uploadStatus === 'error' || errors[id]
              ? 'text-neutral-10'
              : 'text-black-50',
          )}
        >
          {dynamicHelperText}
        </HelperText>
      )}
    </div>
  );
};

export default FileUpload;
