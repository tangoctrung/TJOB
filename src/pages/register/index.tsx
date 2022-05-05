import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RegisterPage() {
  return (
    <Layout>
      <Seo templateTitle='Register' />

      <main>
        <section className='bg-white'>
          <h1 className='text-xl text-teal-500'>Register</h1>
        </section>
      </main>
    </Layout>
  );
}
