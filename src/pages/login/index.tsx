import { Form, Input } from 'antd';
import Link from 'next/link';
import * as React from 'react';
import { FcGlobe, FcGoogle } from 'react-icons/fc';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function LoginPage() {
  return (
    <Layout>
      <Seo templateTitle='Login' />

      <main>
        <Header />
        <section className='login flex h-[90vh] items-center justify-center bg-white'>
          <div className='h-[80%] w-[400px] rounded-lg border-[2px] p-6 shadow-lg lg:h-[650px] lg:w-[400px]'>
            <h1 className='w-full text-center'>
              <Link href='/'>TJob</Link>
            </h1>
            <p className='mt-[16px] w-full text-center text-sm'>
              Chào mừng đến với TJob-nơi quản lý công việc hiệu quả
            </p>

            <div className='mt-[30px]'></div>

            <Form
              name='basic'
              // initialValues={{ remember: true }}
              autoComplete='off'
            >
              <label className='pl-2 font-semibold'>
                Email<span className='text-red-500'> *</span>
              </label>
              <Form.Item
                name='username'
                rules={[{ required: true, message: 'Hãy nhập email của bạn!' }]}
              >
                <Input placeholder='VD: abc@gmail.com' />
              </Form.Item>

              <div className='mt-[30px]'></div>

              <label className='pl-2 font-semibold '>
                Mật khẩu<span className='text-red-500'> *</span>
              </label>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
                ]}
              >
                <Input.Password placeholder='VD: Abc!1234' />
              </Form.Item>

              <p className='m-0 cursor-pointer text-blue-700 underline hover:text-blue-500'>
                Quên mật khẩu?
              </p>
              <div className='mt-[30px]'></div>
              <div className='flex justify-center'>
                <button className='w-[250px] rounded-lg bg-black py-4 text-xl font-medium text-white transition-all duration-500 ease-in-out hover:bg-gray-700'>
                  Đăng nhập
                </button>
              </div>
            </Form>

            <p className='mt-[30px] w-full text-center'>hoặc</p>
            <div className='mt-[20px]'></div>
            <div className='flex justify-around'>
              <div className='flex cursor-pointer items-center rounded-md border-2 px-10 py-2 transition-all duration-500 ease-in-out hover:bg-gray-200 '>
                <FcGoogle />
                <span>oogle</span>
              </div>
              <div className='flex cursor-pointer items-center rounded-md border-2 px-10 py-2 transition-all duration-500 ease-in-out hover:bg-gray-200 '>
                <FcGlobe />
                <span>Github</span>
              </div>
            </div>

            <p className='m-0 mt-[20px] w-full cursor-pointer text-center text-blue-700 underline hover:text-blue-500'>
              <Link href='/register'>Bạn chưa có tài khoản? Bấm vào đây</Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
