import {Link, NavLink, Outlet} from 'react-router-dom';
import type {FC} from 'react';

const Main: FC = () => {
  return (
    <>
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl normal-case">
            TravelAg
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="resorts" className={({isActive}) => (isActive ? 'hidden' : 'text-blue-400')}>
                Resorts
              </NavLink>
            </li>
            <li>
              <NavLink to="buckets" className={({isActive}) => (isActive ? 'hidden' : 'text-blue-400')}>
                Buckets
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Main;
