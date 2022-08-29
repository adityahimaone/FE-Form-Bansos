import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { ITimline } from '@/utils/Types';

interface TypesTimeline {
  timelineData: ITimline[];
}

function Timeline({ timelineData }: TypesTimeline): JSX.Element {
  const location = useLocation();

  return (
    <ol className="relative border-l border-gray-200">
      {timelineData.map((item) => (
        <li key={item.id} className="mb-10 ml-8">
          <span className="absolute -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white ring-8 ring-white ">
            {item.icon}
          </span>
          <h3
            className={classNames('mb-1 text-lg font-semibold ', {
              'text-blue-500': location.pathname === item.url,
              'text-gray-900': location.pathname !== item.url,
            })}
          >
            {item.title}
          </h3>
          <p className="text-base font-normal text-gray-500">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
