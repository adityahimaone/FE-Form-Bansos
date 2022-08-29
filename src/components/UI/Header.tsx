/* eslint-disable jsx-a11y/anchor-is-valid */
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { listHeader } from '@/utils/list-data';

function Header(): JSX.Element {
  const location = useLocation();

  const [offcanvas, setOffcanvas] = useState<boolean>(false);
  return (
    <nav className="bg-blue-400 px-2 py-2 sm:px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between">
          <div className="flex w-8/12 items-center justify-start md:w-4/12">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded bg-slate-300/40 font-bold text-yellow-400 shadow-2xl">
              FDB
            </div>
            <span className=" font-medium text-white">Form Data Bansos</span>
          </div>
          <div className="flex w-4/12 justify-end md:hidden">
            <button type="button" onClick={() => setOffcanvas(!offcanvas)}>
              <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div
            className={`fixed top-0 z-50 flex h-full w-full justify-start bg-gradient-to-b from-blue-500 to-blue-700 p-10 transition-all md:static md:h-auto md:w-8/12 md:justify-end md:bg-none md:p-0 ${
              offcanvas ? 'right-0' : '-right-full'
            }`}
          >
            <button
              type="button"
              onClick={() => setOffcanvas(!offcanvas)}
              className="absolute top-10 right-10 text-white md:hidden"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <ul className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-14 md:space-y-0">
              {listHeader.map((item) => (
                <li
                  key={item.id}
                  className={classNames('font-semibold hover:text-yellow-600', {
                    'text-yellow-400': location.pathname === item.url,
                    'text-white': location.pathname !== item.url,
                  })}
                >
                  <Link to={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
