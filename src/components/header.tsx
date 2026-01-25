import { NavLink } from 'react-router-dom';
import { HeaderMenu } from './header_about';
import { publicPath } from '../utils/publicPath';

export default function Header() {
  return (
    <header className="items-center justify-between flex fixed w-full h-20 top-0 bg-blue-100 z-10">
      <div className="absolute left-10 flex items-center">
        <img src={publicPath("./img/icon.png")} alt="" className="w-[90px] h-[90px]" />
        <div className="flex-col">
          <p className="text-xl font-azuki font-bold pl-4">江別で沼釣り</p>
          <p className="text-xl font-azuki font-bold pl-14">してみませんか？</p>
        </div>
      </div>

      <ul className="top-0 px-10 mr-10 gap-10 flex ml-auto">
        <li className="list-none">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-10 py-2 rounded-3xl font-azuki font-bold inline-flex items-center ${
                isActive ? "bg-lime-700 text-white" : "bg-white"
              }`
            }
          >
            ホーム
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/news"
            end
            className={({ isActive }) =>
              `px-10 py-2 rounded-3xl font-azuki font-bold inline-flex items-center ${
                isActive ? "bg-lime-700 text-white" : "bg-white"
              }`
            }
          >
            お知らせ
          </NavLink>
        </li>
        <li className="list-none">
          <HeaderMenu />
        </li>
        <li className="list-none">
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              `px-10 py-2 rounded-3xl font-azuki font-bold inline-flex items-center ${
                isActive ? "bg-lime-700 text-white" : "bg-white"
              }`
            }
          >
            お問い合わせ
          </NavLink>
        </li>
      </ul>
    </header>
  );
}