import {HeadingSection} from './headingSection'

export const HeadingBlock = ({
  img,
  bg,
  header,
  desc,
  step = 1,
  smallIcon = false,
  fullWidth = false
}) => {
  return <>
    <div className="flex justify-center">
      <img src={bg} alt="bg" className="w-full md:max-w-screen-xl rounded-lg" />
    </div>
    <div className="flex justify-center">
      <HeadingSection smallIcon={smallIcon} img={img} header={header} desc={desc} step={step} fullWidth={fullWidth} />
    </div>
  </>
}