import React from 'react';

import Header from '../components/Header';

interface TypesLayoutDefault {
  children: React.ReactNode;
}

function LayoutDefault({ children }: TypesLayoutDefault): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="container mx-auto max-w-screen-lg">{children}</main>
    </div>
  );
}

export default LayoutDefault;
