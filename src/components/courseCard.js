import {useState} from 'react'
import {Button} from 'antd'
import {useHistory} from 'react-router-dom'
import {MainButton} from './button'

export const CourseCard = ({courseInfo}) => {
  const {
    course_name,
    img_url,
    lang_info,
    link_code,
    long_info,
    presenter_name,
    price_info,
    profile_img_url,
    short_info,
    time_info,
    uid,
  } = courseInfo;

  let history = useHistory();

  const handleEnroll = () => {
    history.push(`/masterclass/enroll/${uid}`)
  }

  const handleMore = () => {
    history.push(`/masterclass/detail/${uid}`)
  }

  return <div className='shadow rounded-lg flex flex-col justify-between overflow-hidden w-full md:w-1/4'>
    <div className=''>
      <div>
        <img src={img_url} />
      </div>

      <div className='p-5'>
        <div className='font-bold text-2xl mb-2 py-2'>
          {course_name}
        </div>
        <div className='flex gap-2'>
          <div className='w-1/4'>
            <img src={profile_img_url} className='rounded-full' />
          </div>
          <div>
            <div className='font-bold text-lg main-color'>
              Presenter
            </div>
            <div>
              {presenter_name}
            </div>
          </div>
        </div>
        <div className='flex flex-wrap py-2 text-gray-700'>
          {short_info}
        </div>
      </div>
    </div>
    <div className='p-5'>
      <div className='flex flex-wrap mb-2'>
        <span className='font-bold'>Price:&nbsp;&nbsp;</span>
        <span>{price_info}</span>
      </div>
      <div className='flex justify-between'>
        <Button onClick={() => handleMore()}>Read More</Button>
        <MainButton onClick={() => handleEnroll()}>Enroll Now</MainButton>
      </div>
    </div>

  </div>
}