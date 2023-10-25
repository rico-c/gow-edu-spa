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

  const handleEnrol = () => {
    history.push(`/masterclass/enrol/${uid}`)
  }

  const handleMore = () => {
    history.push(`/masterclass/enrol/${uid}`)
  }

  return <div className='shadow rounded-lg flex flex-col justify-between overflow-hidden w-full md:w-[calc(33%-1.25rem)] mb-5'>
    <div className=''>
      <div>
        <img src={img_url} />
      </div>

      <div className='p-5'>
        <div className='font-bold text-xl mb-2 py-2 main-color' style={{minHeight: '72px'}}>
          {course_name}
        </div>
        <div className='flex gap-2'>
          <div className='w-1/4'>
            <img src={profile_img_url} className='rounded-full' />
          </div>
          <div>
            <div className='font-bold text-lg'>
              Presenter
            </div>
            <div>
              {presenter_name}
            </div>
          </div>
        </div>
        <div className="border-b py-2">
          <div className="font-bold text-lg flex items-center gap-2"><GlobalOutlined style={{fontSize: '16px'}} />Language</div>
          <div className="text-gray-700">{lang_info}</div>
        </div>
        <div className="border-b py-2">
          <div className="font-bold text-lg flex items-center gap-2"><FileTextOutlined style={{fontSize: '16px'}} />Description</div>
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
        <MainButton onClick={() => handleEnrol()}>Enrol Now</MainButton>
      </div>
    </div>

  </div>
}