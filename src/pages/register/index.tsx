import { Form, Input } from 'antd';
import Link from 'next/link';
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RegisterPage() {
  return (
    <Layout>
      <Seo templateTitle='Register' />

      <main>
        <Header />
        <section className='login flex h-[90vh] items-center justify-center bg-white'>
          <div className='h-[80%] w-[400px] rounded-lg border-[2px] p-6 shadow-lg lg:h-[600px] lg:w-[400px]'>
            <h1 className='w-full text-center'>
              <Link href='/'>TJob</Link>
            </h1>
            <p className='mt-[16px] w-full text-center text-sm'>
              Chào mừng bạn, hãy trở thành thành viên của chúng tôi
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
                rules={[
                  { required: true, message: 'Hãy nhập email của bạn!' },
                  {
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Email của bạn không đúng định dạng',
                  },
                ]}
              >
                <Input placeholder='VD: abc@gmail.com' />
              </Form.Item>

              <div className='mt-[20px]'></div>

              <label className='pl-2 font-semibold '>
                Mật khẩu<span className='text-red-500'> *</span>
              </label>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Hãy nhập mật khẩu của bạn!' },
                  {
                    pattern: new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
                    message:
                      'Mật khẩu cần có ít nhất 8 kí tự, ít nhất 1 kí tự hoa và 1 kí tự thường',
                  },
                ]}
              >
                <Input.Password placeholder='VD: Abc!1234' />
              </Form.Item>

              <div className='mt-[20px]'></div>

              <label className='pl-2 font-semibold '>
                Nhập lại mật khẩu<span className='text-red-500'> *</span>
              </label>
              <Form.Item
                name='confirmPassword'
                rules={[
                  { required: true, message: 'Đây là trường bắt buộc!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('Mật khẩu nhập lại không đúng!')
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder='VD: Abc!1234' />
              </Form.Item>

              <div className='mt-[30px]'></div>
              <div className='flex justify-center'>
                <button className='w-[250px] rounded-lg bg-black py-4 text-xl font-medium text-white transition-all duration-500 ease-in-out hover:bg-gray-700'>
                  Đăng ký
                </button>
              </div>
            </Form>

            <p className='m-0 mt-[20px] w-full cursor-pointer text-center text-blue-700 underline hover:text-blue-500'>
              <Link href='/login'>Bạn đã có tài khoản? Quay lại</Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
