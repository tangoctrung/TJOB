import { Input, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Image from 'next/image';
import * as React from 'react';
// import Draggable from 'react-draggable';
import {
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
} from 'react-icons/hi';
import {
  MdAirplay,
  MdArrowForward,
  MdCamera,
  MdOutlineGraphicEq,
  MdOutlinePhotoCamera,
  MdOutlineSettings,
  MdOutlineSupportAgent,
  MdSlowMotionVideo,
} from 'react-icons/md';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main className='homepage'>
        {/* <Draggable bounds="parent">
        <div className="w-[300px] h-[70px] fixed left-[400px] bottom-[200px] z-20">
          <TabBarComon />
        </div>
      </Draggable> */}
        <Header />
        <section id='home' className='min-h-[600px] pt-[60px]'>
          <div className='m-auto w-[80%] xl:w-[1200px] '>
            <h2 className='w-full text-center font-medium'>
              Make The Best Landing in The Market
            </h2>
            <p className='m-auto mt-2 w-[50%] text-center text-sm text-gray-500'>
              Etiam sed.Interdum consequat proin vestibulum class at a euismod
              mus luctus quam.
            </p>
            <div className='mt-10 flex w-full items-center justify-center'>
              <button className='mr-3 rounded-lg bg-gray-700 px-5 py-3 text-base font-medium text-white'>
                Bắt đầu ngay
              </button>
              <button className='flex items-center rounded-lg bg-gray-700 px-5 py-3 text-base font-medium text-white'>
                <MdSlowMotionVideo className='mr-2 text-xl' /> Xem video
              </button>
            </div>
            <div className='mt-10 flex w-full justify-center'>
              <Image
                src='/images/home.png'
                className='rounded-md'
                width={938}
                height={621}
                alt=''
              />
            </div>
          </div>
        </section>

        <section
          id='service'
          className='mt-20 min-h-[600px] bg-gray-100 pt-[60px] pb-14'
        >
          <div className='m-auto w-[80%] xl:w-[1200px] '>
            <h2 className='w-full text-center font-medium'>Features</h2>
            <p className='m-auto mt-2 w-[50%] text-center text-sm text-gray-500'>
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis suscipit laboriosam nisi commodi consequatur.
            </p>
            <div className='mt-14 flex items-start justify-around'>
              <div className='w-[30%] rounded-md bg-white p-10 shadow-sm'>
                <MdAirplay className='text-5xl text-green-600' />
                <p className='mt-3 text-lg font-semibold'>UI/UX Design</p>
                <p className='mt-2 text-justify text-sm font-normal'>
                  Cinco de Mayo is a celebration held every year on 5 May to to
                  commemorate the anniversary of Mexico.
                </p>
                <button className='mt-4 flex items-center rounded-md bg-slate-200 px-2 py-1 text-gray-500 '>
                  Read more <MdArrowForward className='ml-1' />
                </button>
              </div>
              <div className='w-[30%] rounded-md bg-white p-10 shadow-sm'>
                <MdCamera className='text-5xl text-green-600' />
                <p className='mt-3 text-lg font-semibold'>Ios App Designer</p>
                <p className='mt-2 text-justify text-sm font-normal'>
                  Cinco de Mayo is a celebration held every year on 5 May to to
                  commemorate the anniversary of Mexico.
                </p>
                <button className='mt-4 flex items-center rounded-md bg-slate-200 px-2 py-1 text-gray-500 '>
                  Read more <MdArrowForward className='ml-1' />
                </button>
              </div>
              <div className='w-[30%] rounded-md bg-white p-10 shadow-sm'>
                <MdOutlinePhotoCamera className='text-5xl text-green-600' />
                <p className='mt-3 text-lg font-semibold'>Photography</p>
                <p className='mt-2 text-justify text-sm font-normal'>
                  Cinco de Mayo is a celebration held every year on 5 May to to
                  commemorate the anniversary of Mexico.
                </p>
                <button className='mt-4 flex items-center rounded-md bg-slate-200 px-2 py-1 text-gray-500 '>
                  Read more <MdArrowForward className='ml-1' />
                </button>
              </div>
            </div>
            <div className='mt-10 flex items-start justify-around'>
              <div className='w-[30%] rounded-md bg-white p-10 shadow-sm'>
                <MdOutlineGraphicEq className='text-5xl text-green-600' />
                <p className='mt-3 text-lg font-semibold'>Graphic Designer</p>
                <p className='mt-2 text-justify text-sm font-normal'>
                  Cinco de Mayo is a celebration held every year on 5 May to to
                  commemorate the anniversary of Mexico.
                </p>
                <button className='mt-4 flex items-center rounded-md bg-slate-200 px-2 py-1 text-gray-500 '>
                  Read more <MdArrowForward className='ml-1' />
                </button>
              </div>
              <div className='w-[30%] rounded-md bg-white p-10 shadow-sm'>
                <MdOutlineSettings className='text-5xl text-green-600' />
                <p className='mt-3 text-lg font-semibold'>Web Security</p>
                <p className='mt-2 text-justify text-sm font-normal'>
                  Cinco de Mayo is a celebration held every year on 5 May to to
                  commemorate the anniversary of Mexico.
                </p>
                <button className='mt-4 flex items-center rounded-md bg-slate-200 px-2 py-1 text-gray-500 '>
                  Read more <MdArrowForward className='ml-1' />
                </button>
              </div>
              <div className='w-[30%] rounded-md bg-white p-10 shadow-sm'>
                <MdOutlineSupportAgent className='text-5xl text-green-600' />
                <p className='mt-3 text-lg font-semibold'>24/7 Support</p>
                <p className='mt-2 text-justify text-sm font-normal'>
                  Cinco de Mayo is a celebration held every year on 5 May to to
                  commemorate the anniversary of Mexico.
                </p>
                <button className='mt-4 flex items-center rounded-md bg-slate-200 px-2 py-1 text-gray-500 '>
                  Read more <MdArrowForward className='ml-1' />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id='about' className='min-h-[600px] pt-[60px]'>
          <div className='m-auto w-[80%] xl:w-[1200px] '>
            <h2 className='w-full text-center font-medium'>
              Portfolio & Projects
            </h2>
            <p className='m-auto mt-2 w-[50%] text-center text-sm text-gray-500'>
              Obviously I am a Web Designer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </p>
            <div className='mt-10 flex flex-col items-center justify-center'>
              <div className='flex'>
                <p className='mr-8 cursor-pointer hover:text-blue-500'>All</p>
                <p className='mr-8 cursor-pointer hover:text-blue-500'>
                  Branning
                </p>
                <p className='mr-8 cursor-pointer hover:text-blue-500'>
                  Designing
                </p>
                <p className='mr-8 cursor-pointer hover:text-blue-500'>
                  Photography
                </p>
                <p className='cursor-pointer hover:text-blue-500'>
                  Development
                </p>
              </div>
              <div className='mt-10 w-full'>
                <div className='flex justify-between'>
                  <div>
                    <Image
                      src='/images/11.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/12.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/13.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/14.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                </div>
                <div className='mt-5 flex justify-between'>
                  <div>
                    <Image
                      src='/images/15.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/16.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/17.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/18.jpg'
                      alt=''
                      className='rounded-md'
                      width={280}
                      height={280}
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className='mt-10 w-full text-center font-medium'>
              Happy Clients
            </h3>
            <div className='mt-5 w-full'>
              <Slider {...settings}>
                <div className='homepage-itemCard mx-5 w-[350px] rounded-lg bg-slate-100 p-10'>
                  <p className='text-justify text-sm'>
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero Launch your campaign and benefit
                    from our expertise.
                  </p>
                  <div className='mt-5 flex items-center'>
                    <div className='mr-3'>
                      <Image
                        src='/images/11.jpg'
                        width={40}
                        height={40}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                    <div>
                      <p>Tạ Ngọc Trung</p>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
                <div className='homepage-itemCard mx-5 w-[350px] rounded-lg bg-slate-100 p-10'>
                  <p className='text-justify text-sm'>
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero Launch your campaign and benefit
                    from our expertise.
                  </p>
                  <div className='mt-5 flex items-center'>
                    <div className='mr-3'>
                      <Image
                        src='/images/12.jpg'
                        width={40}
                        height={40}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                    <div>
                      <p>Tạ Ngọc Trung</p>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
                <div className='homepage-itemCard mx-5 w-[350px] rounded-lg bg-slate-100 p-10'>
                  <p className='text-justify text-sm'>
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero Launch your campaign and benefit
                    from our expertise.
                  </p>
                  <div className='mt-5 flex items-center'>
                    <div className='mr-3'>
                      <Image
                        src='/images/13.jpg'
                        width={40}
                        height={40}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                    <div>
                      <p>Tạ Ngọc Trung</p>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
                <div className='homepage-itemCard mx-5 w-[350px] rounded-lg bg-slate-100 p-10'>
                  <p className='text-justify text-sm'>
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero Launch your campaign and benefit
                    from our expertise.
                  </p>
                  <div className='mt-5 flex items-center'>
                    <div className='mr-3'>
                      <Image
                        src='/images/15.jpg'
                        width={40}
                        height={40}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                    <div>
                      <p>Tạ Ngọc Trung</p>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
                <div className='homepage-itemCard mx-5 w-[350px] rounded-lg bg-slate-100 p-10'>
                  <p className='text-justify text-sm'>
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero Launch your campaign and benefit
                    from our expertise.
                  </p>
                  <div className='mt-5 flex items-center'>
                    <div className='mr-3'>
                      <Image
                        src='/images/17.jpg'
                        width={40}
                        height={40}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                    <div>
                      <p>Tạ Ngọc Trung</p>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
                <div className='homepage-itemCard mx-5 w-[350px] rounded-lg bg-slate-100 p-10'>
                  <p className='text-justify text-sm'>
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero Launch your campaign and benefit
                    from our expertise.
                  </p>
                  <div className='mt-5 flex items-center'>
                    <div className='mr-3'>
                      <Image
                        src='/images/18.jpg'
                        width={40}
                        height={40}
                        className='rounded-full'
                        alt=''
                      />
                    </div>
                    <div>
                      <p>Tạ Ngọc Trung</p>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        style={{ fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section id='contact' className='min-h-[600px] pt-[60px]'>
          <div className='m-auto w-[80%] xl:w-[1200px] '>
            <h2 className='w-full text-center font-medium'>Contacts</h2>
            <p className='m-auto mt-5 w-[50%] text-center text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='mt-10 flex flex-col xl:flex-row'>
              <div className='w-[60%] xl:w-[60%]'>
                <div className='m-auto flex w-[70%] justify-between'>
                  <div className='w-[48%]'>
                    <Input
                      size='large'
                      placeholder='Nhập tên của bạn...'
                      prefix={<HiOutlineUser />}
                    />
                  </div>
                  <div className='w-[48%]'>
                    <Input
                      size='large'
                      placeholder='Nhập email của bạn...'
                      prefix={<HiOutlineMail />}
                    />
                  </div>
                </div>
                <div className='m-auto mt-5 w-[70%]'>
                  <TextArea
                    rows={4}
                    placeholder='Thông tin bạn muốn gửi đến chúng tôi...'
                    maxLength={8}
                  />
                </div>

                <div className='m-auto mt-5 w-[70%]'>
                  <button className='mt-5 w-[150px] rounded-md bg-gray-800 py-3 text-xl font-medium text-white transition-all duration-500 ease-in-out hover:bg-gray-600'>
                    Gửi
                  </button>
                </div>
              </div>
              <div className='mt-5 w-[60%] xl:mt-0 xl:w-[40%]'>
                <div className='mb-5 flex items-center'>
                  <HiOutlineMail className='mr-2 text-2xl' />
                  <p>support247@tjob.com</p>
                </div>
                <div className='mb-5 flex items-center'>
                  <HiOutlineGlobeAlt className='mr-2 text-2xl' />
                  <p>www.website.com</p>
                </div>
                <div className='mb-5 flex items-center'>
                  <HiOutlinePhone className='mr-2 text-2xl' />
                  <p>0862982787</p>
                </div>
                <div className='mb-5 flex items-center'>
                  <HiOutlineBriefcase className='mr-2 text-2xl' />
                  <p>7:00 Am - 9:00 Pm</p>
                </div>
                <div className='mb-5 flex items-center'>
                  <HiOutlineLocationMarker className='mr-2 text-2xl' />
                  <p>Ngõ 1, Phạm Văn Đồng, Cầu Giấy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </Layout>
  );
}
