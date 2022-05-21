
import React, { useState } from "react";
import "./Header.scss"
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Find from '../../Find'



export default function Header() {
    const [location, setLocation] = useState("Delhi");
    const [searchQuery, setQuery] = useState(null);

    
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
      }
  return (
    <>
      <div className="header-container content-holder" aria-label="Primary">
        <div className="header-container__data">
        <img
        className="header-container__image"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato"
      />
        </div>

        <Menu as="div" className="relative mx-8 -mt-2 inline-block text-left loc-dropdown">
        {({ open }) => (
          <>
            <div>
              {/*This dropdown will be appear on device widths 640px or higher and stay hidden on other widths.*/}
              <Menu.Button className="hidden sm:inline-flex  justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#F57082"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="w-full  md:w-28 py-2 px-6 text-black-700 leading-tight focus:outline-none"
                  id="search"
                  type="text"
                  placeholder={location}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none locations-wrapper"
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => setLocation("Bengaluru")}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-20 py-3 text-sm"
                        )}
                      >
                        Bengaluru
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => setLocation("Kolkata")}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-20 py-3 text-sm"
                        )}
                      >
                        Kolkata
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => setLocation("Delhi NCR")}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-20 py-3 text-sm"
                        )}
                      >
                        Delhi NCR
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => setLocation("Mumbai")}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-20 py-3 text-sm"
                        )}
                      >
                        Mumbai
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>

      
      <div className="ml-5 -mt-3  md:w-80 md:ml-0  max-w-6xl hidden  lg:w-auto md:inline-flex items-center shadow-md rounded-md border border-gray-300 search-bar overflow-hidden
">
        <input
          className=" w-96 py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <div className="p-3">
          <button type="button" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#828282"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div
        className={
          searchQuery ? "absolute  rounded-lg top-20 w-80 max-w-lg px-10 lg:w-max z-10 shadow-md overflow-y-auto max-h-96  header-container__finder"
              : "hidden"
        }>
          {searchQuery ? <Find searchQuery={searchQuery} /> : ""}
      </div>
    </div>
    <div className="lg:inline-flex hidden">
       <p className="mr-8 ml-20 cursor-pointer"> Login</p>
       <p className="mr-8 ml-20 cursor-pointer"> SignUp</p>
      </div>
      
      <div className="lg:hidden navbar">
       navbar
      </div>
      </div>
    </>
  );
}