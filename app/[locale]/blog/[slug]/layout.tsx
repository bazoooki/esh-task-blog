export default function PostLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-4xl mt-20">
        {children}
      </div>

    </div>
  )
}