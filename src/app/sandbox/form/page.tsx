'use client';
import Typography from '@/components/Typography';
import FileUpload from '@/components/form/FileUpload';
import Input from '@/components/form/Input';
import { SelectInput } from '@/components/form/SelectInput';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type SandboxForm = {
  textinputsmall: string;
  textinputlarge: string;
  selectinputsmall: string;
  selectinputlarge: string;
  fileinput: File;
  fileinput2: File;
  profilePicture: File;
  document: File;
};

export default function FormSandbox() {
  const methods = useForm<SandboxForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<SandboxForm> = (_data) => {
    return;
  };

  const [setSelectedValue] = useState();
  return (
    <main className="bg-white-main flex min-h-screen items-center justify-center py-32">
      <div className="flex flex-col space-y-4">
        <Typography
          as="h1"
          variant="h3"
          weight="bold"
          className="text-gray-900"
        >
          Form Sandbox
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <Input
              id="textinputsmall"
              label="Text Input Small"
              placeholder="Text placeholder"
              helperText="HelperText"
              validation={{ required: 'Field must be filled' }}
            />
            <Input
              id="textinputlarge"
              label="Text Input Large"
              sizes="lg"
              placeholder="Text placeholder"
              helperText="HelperText"
              validation={{ required: 'Field must be filled' }}
            />
            <FileUpload
              id="profilePicture"
              label="Test 1"
              supportFiles={['png', 'jpg', 'jpeg']}
              isRequired={true}
              // onStatusChange={(status, fileName) => {
              //   console.log(`Status: ${status}, File: ${fileName}`);
              // }}
            />

            <FileUpload
              id="document"
              label="Test 2"
              supportFiles={['pdf', 'docx']}
              isRequired={false}
              // onStatusChange={(status, fileName) => {
              //   console.log(`Status: ${status}, File: ${fileName}`);
              // }}
            />
            {/* <Input
              id="fileinput"
              type="file"
              label="Text Input Large"
              sizes="lg"
              placeholder="Text placeholder"
              helperText="HelperText"
              validation={{ required: "Field must be filled" }}
            />
            <Input
              id="fileinput2"
              type="file"
              label="Text Input Large"
              sizes="lg"
              placeholder="Text placeholder"
            /> */}

            <SelectInput
              id="selectinputsmall"
              label="Dropdown Tittle Small"
              placeholder="Option"
              options={[
                { value: 'opsi1', label: 'Option1' },
                { value: 'opsi2', label: 'Option2' },
                { value: 'opsi3', label: 'Option3' },
              ]}
              onChange={setSelectedValue}
              helperText="HelperText"
            />
            <SelectInput
              id="selectinputlarge"
              label="Dropdown Tittle Large"
              size="lg"
              placeholder="Option"
              options={[
                { value: 'opsi1', label: 'Option1' },
                { value: 'opsi2', label: 'Option2' },
                { value: 'opsi3', label: 'Option3' },
              ]}
              validation={{ required: 'Field must be filled' }}
              onChange={setSelectedValue}
              helperText="HelperText"
            />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}
