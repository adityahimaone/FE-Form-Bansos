import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutDefault from '@/components/Layout/Default';
import LayoutTimeline from '@/components/Layout/WithTimeline';
import About from '@/views/about';
import Home from '@/views/home';
import Preview from '@/views/preview';

function RoutesViews() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutTimeline />}>
          <Route index element={<Home />} />
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
