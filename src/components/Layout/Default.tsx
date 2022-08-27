import { Outlet } from 'react-router-dom';

import Header from '../UI/Header';

function LayoutDefault(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="container mx-auto max-w-screen-lg py-5">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutDefault;
