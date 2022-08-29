import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutDefault from '@/components/Layout/Default';
import LayoutTimeline from '@/components/Layout/WithTimeline';
import About from '@/views/about';
import Index from '@/views/index';
import Preview from '@/views/preview';

function RoutesViews() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutTimeline />}>
          <Route index element={<Index />} />
          <Route path="preview" element={<Preview />} />
        </Route>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesViews;
