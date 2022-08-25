import './App.css';
import Timeline from './components/Timeline';
import LayoutDefault from './layout/Default';
import ConstantTimeline from './utils/ContantsTimeLine';

function App() {
  return (
    <LayoutDefault>
      <div className="mx-2 mt-4 grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-4">
          <div className="w-100 rounded-md bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Timeline</h3>
            <div className="p-2">
              <Timeline timelineData={ConstantTimeline} />
            </div>
          </div>
        </div>
        <div className="col-span-12 bg-red-100 md:col-span-8">right</div>
      </div>
    </LayoutDefault>
  );
}

export default App;
