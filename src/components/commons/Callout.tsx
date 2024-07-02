export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-[#e9ebec] py-3 px-4 mt-3 flex gap-3 whitespace-pre-line">
      <div className="text-xl">💡</div>
      <div>{children}</div>
    </div>
  );
}
