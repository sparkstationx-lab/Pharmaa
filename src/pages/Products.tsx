import React, { useEffect } from 'react';

export const Products: React.FC = () => {
  useEffect(() => {
    document.title = 'Products · Jadon Pharmaceuticals India Private Limited';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1 min-h-[60vh] py-12 px-4 sm:px-6 max-w-[1200px] mx-auto w-full">
      {/* Content left blank for now */}
    </main>
  );
};
