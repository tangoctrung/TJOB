import * as React from 'react';
import {
  FaBell,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const listAbout = [
  { title: 'About' },
  { title: 'Submit on issue' },
  { title: 'GitHub Repo' },
  { title: 'Slack' },
];

const listGatting = [
  { title: 'Introduction' },
  { title: 'Usage' },
  { title: 'Globls' },
  { title: 'Elements' },
  { title: 'Collection' },
];

const listResource = [
  { title: 'Monitoring Grader' },
  { title: 'Video Tutorial' },
  { title: 'Term & Service' },
  { title: 'Tulsy API' },
  { title: 'Marketplace' },
];

export default function Footer() {
  return (
    <div className='bottom-0 z-50 m-auto max-w-[1920px] justify-center bg-gray-200 pt-16'>
      <div className=' m-auto mb-4 flex w-[1200px] items-start justify-between'>
        <div>
          <h3>ABOUT</h3>
          <div className='mt-4'></div>
          {listAbout.map((item, index) => (
            <p key={index} className='my-3 cursor-pointer hover:text-blue-500'>
              {item.title}
            </p>
          ))}
        </div>
        <div>
          <h3>GATTING STARTED</h3>
          <div className='mt-4'></div>
          {listGatting.map((item, index) => (
            <p key={index} className='my-3 cursor-pointer hover:text-blue-500'>
              {item.title}
            </p>
          ))}
        </div>
        <div>
          <h3>RESOURCES</h3>
          <div className='mt-4'></div>
          {listResource.map((item, index) => (
            <p key={index} className='my-3 cursor-pointer hover:text-blue-500'>
              {item.title}
            </p>
          ))}
        </div>
        <div>
          <h3>TJOB</h3>
          <p className='mt-4'>Nhanh chóng - Hiệu quả - An toàn</p>
          <div className='relative mt-4 flex'>
            <input
              type='text'
              placeholder='Email của bạn...'
              className='border-b-[1px] border-gray-200 outline-0 '
            />
            <div className='flex cursor-pointer items-center justify-center bg-gray-300 px-4 py-[1px] transition-all duration-300 ease-in-out hover:scale-110'>
              <FaBell className='text-xl' />
            </div>
          </div>
          <div className='mt-4 flex items-center'>
            <FaFacebook className='mr-3 cursor-pointer text-3xl text-stone-800' />
            <FaInstagramSquare className='mr-3 cursor-pointer text-3xl text-stone-800' />
            <FaLinkedin className='mr-3 cursor-pointer text-3xl text-stone-800' />
            <FaPinterestSquare className='mr-3 cursor-pointer text-3xl text-stone-800' />
            <FaTwitterSquare className='cursor-pointer text-3xl text-stone-800' />
          </div>
        </div>
      </div>
      <div className='max-w-[1920px] bg-gray-800 py-4 text-white'>
        <p className='w-full text-center'>© 2022 TJob. Design by trungtn</p>
      </div>
    </div>
  );
}
