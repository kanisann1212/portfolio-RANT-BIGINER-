
type Props = {
  title: string
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="border-t-2 border-white flex-1" />
      <h2 className="text-5xl font-extrabold whitespace-nowrap">{title}</h2>
      <div className="border-t-2 border-white flex-1" />
    </div>
  )
}