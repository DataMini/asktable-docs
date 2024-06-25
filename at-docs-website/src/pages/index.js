import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    // 当组件加载后重定向到文档页面
    window.location.href = '/docs/introduction/what-is-asktable'; // 替换为你的文档页面路径
  }, []);

  return (
    <div>
      {/* 你可以保留原有的内容或简单展示一个加载指示，因为页面将会重定向 */}
      <p>Redirecting to documentation...</p>
    </div>
  );
}

export default Home;