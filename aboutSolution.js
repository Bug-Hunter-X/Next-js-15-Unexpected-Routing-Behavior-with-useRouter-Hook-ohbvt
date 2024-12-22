```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact', undefined, { shallow: true }); 
  };

  useEffect(() => {
    // Ensure the client-side routing works correctly
    if (typeof window !== 'undefined') {
        if (router.asPath !== router.route) {
            router.replace(router.route);
        }
    }
  }, [router]);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```