import {useState} from 'react'
import {Button} from 'antd'
import {useHistory} from 'react-router-dom'
import {MainButton} from './button'
import {
  GlobalOutlined,
  FileTextOutlined
} from '@ant-design/icons';

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
        <div className='font-bold text-2xl mb-2 py-2' style={{color: 'rgb(56, 56, 56)'}}>
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
        <div className="border-b py-2">
          <div className="font-bold text-lg flex items-center gap-2"><GlobalOutlined style={{ fontSize: '16px' }} />Language:</div>
          <div className="text-gray-700">{lang_info}</div>
        </div>
        <div className="border-b py-2">
          <div className="font-bold text-lg flex items-center gap-2"><FileTextOutlined style={{ fontSize: '16px' }} />Description:</div>
          <div className="text-gray-700" dangerouslySetInnerHTML={{__html: short_info}}></div>
        </div>
      </div>
    </div>
    <div className='p-5'>
      <div className='flex flex-wrap mb-2'>
        {/* <span className='font-bold'>Price:&nbsp;&nbsp;</span> */}
        <span>{price_info}</span>
      </div>
      <div className='flex justify-between'>
        <Button onClick={() => handleMore()}>Read More</Button>
        <MainButton onClick={() => handleEnroll()}>Enroll Now</MainButton>
      </div>
    </div>

  </div>
}