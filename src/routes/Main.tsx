import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutDefault from '@/components/Layout/Default';
import Home from '@/views/Home';

function RoutesViews() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesViews;
