import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { Eye, EyeOff, Info, LucideProps } from 'lucide-react';
import { useState } from 'react';
import { RegisterOptions, get, useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
import FileUpload from './FileUpload';
import HelperText from './HelperText';
import LabelText from './LabelText';

type LucideIconType = React.ComponentType<LucideProps>;
export type InputProps = {
  id: string;
  label?: string;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  prefix?: string;
  suffix?: string;
  rightIcon?: LucideIconType;
  leftIcon?: LucideIconType;
  rightIconClassName?: string;
  leftIconClassName?: string;
  labelTextClassname?: string;
  theme?: string;
  sizes?: 'sm' | 'lg';
} & React.ComponentPropsWithoutRef<'input'>;
export default function Input({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  prefix,
  suffix,
  className,
  type = 'text',
  readOnly = false,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  rightIconClassName,
  leftIconClassName,
  helperTextClassName,
  labelTextClassname,
  sizes = 'lg',
  theme = 'light',
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const error = get(errors, id);
  const [fileUploadStatus, _setFileUploadStatus] = useState<{
    status: 'success' | 'error' | null;
    fileName?: string;
  }>({ status: null });

  const dynamicHelperText =
    type === 'file' && fileUploadStatus.status === 'success'
      ? 'File uploaded successfully'
      : helperText;
  return (
    <div className="w-full space-y-2">
      {label && (
        <LabelText
          required={validation?.required ? true : false}
          labelTextClasname={labelTextClassname}
        >
          {label}
        </LabelText>
      )}
      <div className="relative flex w-full gap-0">
        {type === 'file' ? (
          <FileUpload
            id={id}
            label={label}
            supportFiles={['png', 'jpg', 'jpeg']}
            isRequired={true}
            // validation={validation}
            // onStatusChange={handleFileUploadStatusChange}
          />
        ) : (
          <>
            {prefix && (
              <Typography className="flex w-min items-center rounded-l-md border-r bg-slate-50 px-3 text-sm text-gray-600">
                {prefix}
              </Typography>
            )}
            <div
              className={cn(
                'relative w-full rounded-md',
                prefix && 'rounded-l-none',
                suffix && 'rounded-r-none',
                className,
              )}
            >
              {LeftIcon && (
                <div
                  className={cn(
                    'absolute left-0 top-0 flex h-full items-center pl-2.5 text-lg text-gray-900',
                    leftIconClassName,
                  )}
                >
                  <LeftIcon />
                </div>
              )}
              <input
                {...register(id, {
                  ...validation,
                  onChange: (e) => {
                    setHasValue(!!e.target.value);
                  },
                })}
                type={
                  type === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : type
                }
                id={id}
                name={id}
                readOnly={readOnly}
                disabled={readOnly}
                onChange={(e) => setHasValue(!!e.target.value)}
                className={cn(
                  'border-white-50 h-full w-full rounded-md border px-3 py-2.5 text-base caret-gray-900 disabled:bg-gray-50 disabled:text-gray-400',
                  sizes === 'lg' ? 'px-6 py-3' : 'px-3 py-2',
                  LeftIcon && 'pl-9',
                  RightIcon && 'pr-9',
                  readOnly ? 'cursor-not-allowed bg-gray-100' : 'bg-white',
                  'focus:outline-none focus:ring-0',
                  hasValue
                    ? 'border-black-400 text-black-400 border-2'
                    : 'focus:border-0 focus:outline-none',
                  error &&
                    'border-none ring-2 ring-inset ring-red-300 placeholder:text-gray-500 focus:ring-red-300',
                  className,
                )}
                aria-describedby={id}
                {...rest}
              />
              {RightIcon && type !== 'password' && (
                <div
                  className={cn(
                    'absolute right-0 top-0 flex h-full items-center pr-2.5 text-lg text-gray-900',
                    rightIconClassName,
                  )}
                >
                  <RightIcon />
                </div>
              )}
              {type === 'password' && (
                <div
                  className={cn(
                    'absolute right-0 top-0 flex h-full cursor-pointer items-center pr-3 text-lg opacity-40',
                    rightIconClassName,
                  )}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </div>
              )}
            </div>
            {suffix && (
              <Typography className="flex w-min items-center rounded-r-md border-l bg-slate-50 px-3 text-sm text-gray-600">
                {suffix}
              </Typography>
            )}
          </>
        )}
      </div>
      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {type === 'file'
        ? dynamicHelperText && (
            <HelperText
              helperTextClassName={cn(
                error ? 'text-red-600' : 'text-black-400',
                helperTextClassName,
              )}
            >
              {dynamicHelperText}
            </HelperText>
          )
        : helperText && (
            <HelperText
              helperTextClassName={cn(
                'flex flex-row text-black-50',
                error && 'text-red-600',
                hasValue && 'text-black-50',
                helperTextClassName,
              )}
            >
              {error && <Info className="mr-2 h-4 w-4 text-red-600" />}
              {helperText}
            </HelperText>
          )}
    </div>
  );
}
