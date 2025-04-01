import { HTMLAttributes, ImgHTMLAttributes } from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`flex flex-col gap-4 rounded-lg border bg-card p-6 shadow ${className}
      `}
    />
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

export function CardImage({
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={"w-full rounded object-cover"} alt={alt} {...rest} />;
}
