import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutTimeline from '@/components/Layout/WithTimeline';
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
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesViews;
