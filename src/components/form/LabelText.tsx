import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
export default function LabelText({
  children,
  labelTextClasname,
  required,
}: {
  children: ReactNode;
  labelTextClasname?: string;
  required?: boolean;
}) {
  return (
    <label>
      <Typography
        variant="p"
        weight="bold"
        className={cn('text-white-500', labelTextClasname)}
      >
        {children} {required && <span className="text-red-500">*</span>}
      </Typography>
    </label>
  );
}
