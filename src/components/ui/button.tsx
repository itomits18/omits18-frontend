import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'text-neutral-main inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed',

  {
    variants: {
      variant: {
        yellow: 'bg-yellow-200 hover:bg-yellow-300 disabled:bg-yellow-900',
        pink: 'bg-pink-300 hover:bg-pink-400 disabled:bg-pink-700',
        green: 'bg-green-200 hover:bg-green-300 disabled:bg-green-900',
        blue: 'bg-blue-300 hover:bg-blue-400 disabled:bg-blue-900',
        purple:
          'bg-purple-300 hover:bg-additions-purple-200 disabled:bg-purple-900',
        brown:
          'bg-additions-brown-100 hover:bg-additions-brown-200 disabled:bg-red-900',
      },
      size: {
        default: 'px-5 py-2 rounded-md text-[14px] leading-[24px]',
        sm: 'px-4 py-1 rounded-md text-[12px] leading-[18px]',
        md: 'px-5 py-2 rounded-md text-[14px] leading-[24px]',
        lg: 'px-6 py-4 rounded-md text-[16px] leading-[24px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          'font-Lora',
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
