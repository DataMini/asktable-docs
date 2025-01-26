import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.location.href = '/docs/introduction/what-is-asktable';
  }, []);

  return (
    <div>
      <p>Redirecting to documentation...</p>
    </div>
  );
}

export default Home;