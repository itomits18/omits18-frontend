import Typography from '@/components/Typography';

export default function ErrorMessage({ children }: { children: string }) {
  return (
    <div className="flex space-x-1">
      <Typography
        variant="b"
        weight="regular"
        className="text-xs leading-tight! text-red-400"
      >
        {children}
      </Typography>
    </div>
  );
}
