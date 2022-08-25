import './App.css';
import LayoutDefault from './layout/Default';

function App() {
  return (
    <LayoutDefault>
      <div className="mt-4 grid grid-cols-12 gap-2">
        <div className="col-span-12 bg-blue-100 md:col-span-4">left</div>
        <div className="col-span-12 bg-red-100 md:col-span-8">right</div>
      </div>
    </LayoutDefault>
  );
}

export default App;
