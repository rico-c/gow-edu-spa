export const BlockSection = ({
  header,
  desc,
  img
}) => {
  return <div className="w-5/6 md:w-1/3">
    <div className="text-3xl font-bold main-color mb-5">
      {header}
    </div>
    <div className="flex items-center gap-5 pb-5 text-lg">
      <img className="hidden md:block border p-2" src={img} width="130px" alt="img" />
      {desc}
    </div>
  </div>
}