import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { useState } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import Typography from '../Typography';
import HelperText from './HelperText';
type SelectOption = {
  value: string;
  label: string;
};
export type SelectInputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  validation?: RegisterOptions;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  size?: 'sm' | 'lg';
  onChange?: (value: string) => void;
  className?: string;
};
export function SelectInput({
  id,
  label,
  placeholder = 'Select an option',
  options,
  // value,
  defaultValue,
  validation,
  helperText,
  helperTextClassName,
  size = 'lg',
  onChange,
  className,
}: SelectInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[id]?.message;
  const [hasValue, setHasValue] = useState(false);
  return (
    <div className={cn('w-full space-y-2', className)}>
      {/* Label */}
      {label && (
        <label htmlFor={id}>
          <Typography
            variant="p"
            weight="bold"
            className={cn('text-white-500', size === 'lg' && 'md:text-lg')}
          >
            {label}{' '}
            {validation?.required && <span className="text-red-500">*</span>}
          </Typography>
        </label>
      )}
      {/* Dropdown */}
      <Controller
        name={id}
        control={control}
        rules={validation}
        render={({ field }) => (
          <Select
            // defaultValue={defaultValue}
            value={field.value || defaultValue}
            onValueChange={(value) => {
              field.onChange(value);
              setHasValue(!!value);
              if (onChange) onChange(value);
            }}
          >
            <SelectTrigger
              id={id}
              className={cn(
                'bg-white-50 w-full rounded-lg text-[#8F8B8A] focus:outline-hidden focus:ring-2',
                size === 'lg' ? 'px-6 py-5' : 'px-3 py-2',
                error && 'border-2 border-red-500',
                hasValue &&
                  'border-black-400 text-black-400 border-2 focus:ring-0',
              )}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="rounded-md border border-gray-200 bg-white shadow-lg">
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="bg-white-50 cursor-pointer border-0 px-4 py-2 text-[#8F8B8A] ring-0 hover:bg-[#E7E6E6]"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <Typography variant="p" className="text-sm text-red-600">
          {error.toString()}
        </Typography>
      )}
      {helperText && (
        <HelperText
          helperTextClassName={cn(
            error && 'text-red-600',
            hasValue && 'text-black-400',
            helperTextClassName,
          )}
        >
          {error && <Info className="h-4 w-4 text-red-600" />}
          {helperText}
        </HelperText>
      )}
    </div>
  );
}
