export default function IndentText({
  children,
  className,
}: React.ComponentProps<"p">) {
  return (
    <p className={`whitespace-pre-line ml-[20px] ${className}`}>{children}</p>
  );
}

export function NumberIndentText({
  children,
  strong,
  className,
}: React.ComponentProps<"p"> & { strong?: boolean }) {
  return (
    <p className={`${strong ? "strong" : ""} ${className} my-[10px]`}>
      &nbsp; {children}
    </p>
  );
}

export function Title({ children }: React.ComponentProps<"h1">) {
  return <h1 className="text-3xl font-bold mt-3">{children}</h1>;
}

export function SubTitle({ children }: React.ComponentProps<"h3">) {
  return <h3 className="text-[26px] font-bold mt-7 mb-3">{children}</h3>;
}
