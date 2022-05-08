import { useRouter } from 'next/router';
import * as React from 'react';

export default function ManageProject() {
  const router = useRouter();
  return (
    <div>
      Manage Project
      <button onClick={() => router.push('/manage-projects/123')}>Click</button>
    </div>
  );
}
