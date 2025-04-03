type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  direction?: "vertical" | "horizontal";
  className?: string;
  children: React.ReactNode;
};

export function List({
  direction = "vertical",
  className,
  children,
  ...rest
}: ListProps) {
  return (
    <ul
      className={`flex ${
        direction === "horizontal"
          ? "gap-3"
          : "flex-col [&>li:last-child]:border-none [&>li]:border-b"
      } ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}

type ListItemProps = {
  className?: string;
  children: React.ReactNode;
};

export function ListItem({ children, className }: ListItemProps) {
  return (
    <li className={`[&>*]:block [&>*]:py-4 ${className || ""}`}>{children}</li>
  );
}

type ListItemTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export function ListItemTitle({
  className,
  children,
  ...props
}: ListItemTitleProps) {
  return (
    <div className={`font-semibold ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

type ListItemSubtitleProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export function ListItemSubtitle({
  className,
  children,
  ...props
}: ListItemSubtitleProps) {
  return (
    <div
      className={`mt-1 text-sm font-semibold text-muted-foreground ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
