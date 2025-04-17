type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export function Input({
  className,
  onPressEnter,
  onKeyDown,
  ...rest
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onPressEnter) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };
  return (
    <input
      className={`rounded border px-4 py-2 shadow ${className}`}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
}
