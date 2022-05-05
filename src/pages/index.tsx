import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-white'>
          <h1 className='text-xl text-teal-500'>TJOB</h1>
        </section>
      </main>
    </Layout>
  );
}
