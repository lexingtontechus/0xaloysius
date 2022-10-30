import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./darkSwitch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
];
const collapsedItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-trueGray-400 hover:bg-trueGray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="block h-6 w-6 text-trueGray-700 dark:text-trueGray-100"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="inline-flex h-content w-auto fill-red-500 dark:fill-yellow-900"
                  >
                    <Logo />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative mx-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-trueGray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-trueGray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/img/logo.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-trueGray-100" : "",
                              "block px-4 py-2 text-sm text-trueGray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-trueGray-100" : "",
                              "block px-4 py-2 text-sm text-trueGray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-trueGray-100" : "",
                              "block px-4 py-2 text-sm text-trueGray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <ThemeChanger />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {collapsedItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-trueSky-600 text-trueGray-700 dark:text-trueGray-100 dark:bg-trueSky-600"
                      : "text-trueGray-700 hover:bg-trueGray-400 dark:text-trueGray-100 dark:hover:bg-trueGray-400",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="40"
      viewBox="0 0 200.00000000000003 45.57885426586286"
    >
      <g transform="matrix(1.1394713566465715,0,0,1.1394713566465715,-2.5524161214263077,-11.121240701674834)">
        <path d="M15.68 9.760000000000002 c3.6 0 6.4 2.12 6.4 6.12 l0 18.36 c0 3.52 -2.88 6.04 -6.4 6.04 l-7.04 0 c-3.52 0 -6.4 -2.16 -6.4 -6.04 l0 -18.44 c0 -3.64 2.8 -6.04 6.4 -6.04 l7.04 0 z M4.28 15.8 l0 18.44 c0 0.68 0.2 1.28 0.48 1.88 l12.92 -24 c-0.6 -0.32 -1.28 -0.52 -2 -0.52 l-7.04 0 c-2.32 0 -4.36 1.88 -4.36 4.2 z M20 34.24 l0 -18.44 c0 -0.88 -0.24 -1.68 -0.72 -2.36 l-13.2 24.2 c0.68 0.52 1.64 0.8 2.56 0.8 l7.04 0 c2.32 0 4.32 -1.88 4.32 -4.2 z M37.72 29.96 c0.4 0.2 0.72 0.52 0.92 0.92 l4.68 9.12 l-1.56 0 c-0.24 0 -0.52 -0.16 -0.6 -0.4 l-4.28 -8.36 c-0.08 -0.24 -0.36 -0.4 -0.6 -0.4 l-2.2 0 c-0.24 0 -0.52 0.16 -0.6 0.4 l-4.44 8.36 c-0.08 0.24 -0.36 0.4 -0.6 0.4 l-1.52 0 l4.84 -9.08 c0.2 -0.36 0.52 -0.68 0.92 -0.88 c-0.4 -0.2 -0.72 -0.52 -0.92 -0.92 l-4.88 -9.12 l1.56 0 c0.24 0 0.48 0.16 0.6 0.36 l4.4 8.4 c0.12 0.2 0.4 0.4 0.64 0.4 l2.24 0 c0.24 0 0.52 -0.2 0.6 -0.4 l4.24 -8.4 c0.12 -0.2 0.36 -0.36 0.6 -0.36 l1.56 0 l-4.64 9.04 c-0.2 0.4 -0.56 0.72 -0.96 0.92 z M56.8 19.96 c2.76 0 4.96 2.28 4.96 5.04 l0 14.56 c0 0.24 -0.2 0.44 -0.44 0.44 l-10.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -2.08 c0 -2.8 2.2 -5.04 4.96 -5.04 l8.24 0 c0.24 0 0.4 -0.16 0.44 -0.44 l0 -2.6 c0 -1.76 -1.4 -3.2 -3.16 -3.2 l-8.36 0 c-0.2 0 -0.4 -0.2 -0.4 -0.44 l0 -1.24 l8.76 0 z M51.28 38.24 l8.68 0 l0 -8.84 c-0.08 0.08 -0.2 0.16 -0.32 0.16 l-8.36 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 2.32 c0 1.76 1.4 3.16 3.16 3.16 z M66.52000000000001 39.56 l0 -27.92 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 27.88 l-1.36 0 c-0.24 0 -0.44 -0.16 -0.44 -0.4 z M84.24000000000001 40.28 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -10.52 c0 -2.76 2.2 -5.04 4.96 -5.04 l6.04 0 c2.72 0 4.92 2.28 4.92 5.04 l0 10.52 c0 2.76 -2.2 5 -4.92 5 z M84.24000000000001 21.4 l-6.04 0 c-1.76 0 -3.16 1.44 -3.16 3.2 l0 10.84 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -10.84 c0 -1.76 -1.4 -3.2 -3.12 -3.2 z M109.16 20 c0.24 0 0.44 0.16 0.44 0.4 l0 24.32 c0 2.8 -2.2 5.04 -4.96 5.04 l-10 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.4 -0.44 l9.6 0 c1.76 0 3.16 -1.4 3.16 -3.16 l0 -5.52 c-0.16 0.36 -0.56 0.56 -1.08 0.56 l-7.84 0.04 c-3.36 0 -4.92 -2.28 -4.92 -5.04 l0 -14.96 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 14.6 c0 1.76 0.76 3.32 3.12 3.32 l8.2 0 c0.4 0 0.72 -0.32 0.72 -0.72 l0 -17.6 l1.36 0 z M127.92 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z M134.44 39.56 l0 -19.56 l1.36 0 c0.24 0 0.44 0.16 0.44 0.4 l0 19.6 l-1.36 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 z M134.44 13 l0 -1.88 l1.4 0 c0.24 0 0.4 0.2 0.4 0.4 l0 1.88 l-1.4 0 c-0.24 0 -0.4 -0.16 -0.4 -0.4 z M141.84 35 l0 -15.04 l1.36 0 c0.24 0 0.44 0.2 0.44 0.44 l0 14.76 c0 1.76 1.4 3.16 3.16 3.16 l6.04 0 c1.72 0 3.12 -1.4 3.12 -3.16 l0 -14.76 c0 -0.24 0.2 -0.44 0.44 -0.44 l1.36 0 l0 15.04 c0 2.76 -2.2 5 -4.92 5 l-6.04 0 c-2.76 0 -4.96 -2.24 -4.96 -5 z M176.04000000000002 33.04 c0 -0.24 -0.2 -0.52 -0.4 -0.56 l-12.48 -4.48 c-0.6 -0.2 -1.08 -0.88 -1.08 -1.52 l0 -2 c0 -2.76 2.2 -4.48 4.96 -4.48 l9.2 0 l0 1.2 c0 0.24 -0.2 0.44 -0.44 0.44 l-8.76 0 c-1.76 0 -3.16 1.12 -3.16 2.88 l0 1.48 c0 0.24 0.2 0.48 0.4 0.56 l12.4 4.48 c0.6 0.2 1.08 0.88 1.08 1.52 l0 3.04 c0 2.8 -2.24 4.4 -4.96 4.4 l-10.76 0 l0 -1.24 c0 -0.24 0.2 -0.44 0.44 -0.44 l10.32 0 c1.72 0 3.24 -0.96 3.24 -2.68 l0 -2.6 z" />
      </g>
    </svg>
  );
}
