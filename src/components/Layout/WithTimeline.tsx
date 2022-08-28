import { Outlet } from 'react-router-dom';

import Header from '../UI/Header';

import Timeline from '@/components/UI/Timeline';
import ConstantTimeline from '@/utils/ContantsTimeLine';

function LayoutTimeline(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main className="container mx-auto max-w-screen-lg py-5">
        <div className="mx-2 grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4">
            <div className="w-100 rounded-md bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Timeline</h3>
              <div className="p-2">
                <Timeline timelineData={ConstantTimeline} />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default LayoutTimeline;
