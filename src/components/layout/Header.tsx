import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { MdLogin, MdOutlinePersonAddAlt } from 'react-icons/md';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/#home', label: 'Trang chủ' },
  { href: '/#service', label: 'Dịch vụ' },
  { href: '/#about', label: 'Về chúng tôi' },
  { href: '/#contact', label: 'Liên lạc' },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className='sticky top-0 z-50 m-auto flex max-w-[1920px] justify-center border-b-[1.5px] bg-white'>
      <div className=' flex h-14 w-[1500px] items-center justify-between'>
        <div className='w-[30%] font-bold hover:text-gray-600'>
          <UnstyledLink href='/' className='flex items-center'>
            <Image src='/favicon/logo.png' alt='' height={50} width={50} />
            <span className='ml-2 text-3xl'>TJob</span>
          </UnstyledLink>
        </div>
        <nav className='w-[40%]'>
          <ul className='flex items-center justify-around font-semibold'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='mr-4 flex w-[30%] justify-end text-lg'>
          <div
            className='flex cursor-pointer items-center rounded-lg bg-slate-100 px-4 py-2 transition-all duration-300 ease-linear hover:bg-slate-200'
            onClick={() => router.push('/login')}
          >
            <MdLogin />
            <p className='ml-2 text-base'>Đăng nhập</p>
          </div>
          <div className='w-6'></div>
          <div
            className='flex cursor-pointer items-center rounded-lg bg-slate-100 px-6 py-2 transition-all duration-300 ease-linear hover:bg-slate-200'
            onClick={() => router.push('/register')}
          >
            <MdOutlinePersonAddAlt />
            <p className='ml-2 text-base'>Đăng ký</p>
          </div>
        </div>
      </div>
    </header>
  );
}
