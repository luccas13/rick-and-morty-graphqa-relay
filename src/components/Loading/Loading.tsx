type LoadingProps = {
  ref: React.Ref<React.ComponentRef<"div">>;
};

export function Loading(props: LoadingProps) {
  const dotClassName = "bg-primary size-2 animate-ping rounded-full";

  return (
    <div className="flex justify-center gap-4 py-6" {...props}>
      <div className={dotClassName} />
      <div className={`${dotClassName} animation-delay-150`} />
      <div className={`${dotClassName} animation-delay-300`} />
    </div>
  );
}
