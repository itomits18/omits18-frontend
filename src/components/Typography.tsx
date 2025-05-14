import * as React from 'react';

import { cn } from '@/lib/utils';

export enum TypographyVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  t,
  p,
  b,
  bs,
  c,
}

enum FontVariant {
  Cinzel,
  OZWizard,
  Lora,
}

enum FontWeight {
  regular,
  medium,
  semibold,
  bold,
  black,
  Cowardly_Lion,
  Scarecrow,
  Tin_Woodman,
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  id?: string;
  className?: string;
  weight?: keyof typeof FontWeight;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  id,
  children,
  weight = 'regular',
  className,
  font = 'Lora',
  variant = 'p',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p';
  return (
    <Component
      id={id}
      className={cn(
        // *=============== Font Type ==================
        'text-black',
        font === 'OZWizard' ? 'Cowardly_Lion' : 'regular',
        [
          font === 'Cinzel' && 'font-Cinzel',
          font === 'OZWizard' && 'font-OZWizard',
          font === 'Lora' && 'font-Lora',
        ],
        [
          weight === 'regular' && 'font-normal',
          weight === 'medium' && 'font-medium',
          weight === 'bold' && 'font-bold',
          weight === 'black' && 'font-black',
        ],
        // *=============== Font Variants ==================
        [
          variant === 'h1' && ['md:text-[80px] md:leading-[96px]'],
          variant === 'h2' && ['md:text-[72px] md:leading-[90px]'],
          variant === 'h3' && ['md:text-[60px] md:leading-[80px]'],
          variant === 'h4' && ['md:text-[48px] md:leading-[60px]'],
          variant === 'h5' && ['md:text-[32px] md:leading-[36px]'],
          variant === 'h6' && ['md:text-[28px] md:leading-[32px]'],
          variant === 't' && ['md:text-[20px] md:leading-[24px]'],
          variant === 'p' && ['md:text-[18px] md:leading-[24px]'],
          variant === 'b' && ['md:text-[16px] md:leading-[24px]'],
          variant === 'bs' && ['md:text-[14px] md:leading-[24px]'],
          variant === 'c' && ['md:text-[12px] md:leading-[18px]'],
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
