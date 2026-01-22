import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

export const HeaderMenu = () => {
  const resolved = useResolvedPath("/about/*");
  const match = useMatch({ path: resolved.pathname, end: false });

  const isActive = Boolean(match);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={`px-10 py-2 rounded-3xl font-azuki font-bold inline-flex items-center ${
          isActive ? "bg-lime-700 text-white" : "bg-white"
          }`
        }
      >
        いきもの
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <NavLink
                to="/about/catfish"
                className={`block px-4 py-2 text-sm rounded-md transition-colors ${active ? "bg-lime-100" : ""
                  }`}
              >
                アメリカナマズについて
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <NavLink
                to="/about/eel"
                className={`block px-4 py-2 text-sm rounded-md transition-colors ${active ? "bg-lime-100" : ""
                  }`}
              >
                ヤツメウナギについて
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <NavLink
                to="/about/turtle"
                className={`block px-4 py-2 text-sm rounded-md transition-colors ${active ? "bg-lime-100" : ""
                  }`}
              >
                ミシシッピアカミミガメについて
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <NavLink
                to="/about/frog"
                className={`block px-4 py-2 text-sm rounded-md transition-colors ${active ? "bg-lime-100" : ""
                  }`}
              >
                ウシガエルについて
              </NavLink>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};