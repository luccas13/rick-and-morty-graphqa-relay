type InputProps = React.ComponentPropsWithoutRef<"input">;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={`rounded border px-4 py-2 shadow ${className}`}
      {...rest}
    />
  );
}
