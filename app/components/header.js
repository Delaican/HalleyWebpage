import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ headerData }) => {
  //const { data: { menu, logo: { url } } } = headerData
  console.log(headerData.menu)
  return (
    <header className="bg-[#F0F0F0] bg-opacity-80 relative">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* <!-- logo --> */}
          <PrismicNextImage field={headerData.logo} />
          {/* <a href="#">
              <Image
                src={url}
                alt="logo"
                height={200}
                width={200}
                className="h-24 object-contain"
              />
            </a> */}
          {/* <!-- mobile menu --> */}
          <div className="flex lg:hidden">
            <svg
              onClick="openMenu();"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          {/* <!-- menu items --> */}
          <div
            className="lg:flex hidden justify-between absolute lg:top-0 top-28 lg:relative bg-[#F0F0F0] lg:bg-none w-full lg:w-auto left-0 p-6 lg:p-0 z-50"
          >
            <div className="lg:space-x-6 lg:flex-row flex-col flex font-medium">
              {headerData.menu.map((item, index) => {
                <PrismicNextLink key={index} field={item.menu.menulink}>
                  <PrismicRichText field={item.menu.menutext} className="hover:text-zinc-600 lg:mb-0 mb-8"/>
                </PrismicNextLink>
              })
              }

            </div>
            {/* <!-- search --> */}
            {/* <div className="lg:ml-40 w-6">
              <a href="#">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
