import { HTMLAttributes, ImgHTMLAttributes } from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`flex flex-col gap-4 rounded-lg border bg-card p-4 shadow ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

type CardTitleProps = {
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ className, ...rest }: CardTitleProps) {
  return <h2 className={`text-lg font-semibold ${className}`} {...rest} />;
}

type CardDescriptionProps = {
  children: React.ReactNode;
};

export function CardDescription(props: CardDescriptionProps) {
  return (
    <p className="text-lg font-semibold text-muted-foreground" {...props} />
  );
}

type CardImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function CardImage({ alt, className, ...rest }: CardImageProps) {
  return (
    <img
      className={`w-full rounded object-cover ${className}`}
      alt={alt}
      {...rest}
    />
  );
}
