import classNames from 'classnames';
import { useMatch } from 'react-router-dom';

import { ITimline } from '@/utils/Types';

interface TypesTimeline {
  timelineData: ITimline[];
}

function Timeline({ timelineData }: TypesTimeline): JSX.Element {
  const matchHome = useMatch('/');
  const matchPreviw = useMatch('/preview');

  return (
    <ol className="relative border-l border-gray-200">
      {timelineData.map((item) => (
        <li key={item.id} className="mb-10 ml-8">
          <span className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white ring-8 ring-white ">
            {item.icon}
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">{item.title}</h3>
          <p className="text-base font-normal text-gray-500">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
