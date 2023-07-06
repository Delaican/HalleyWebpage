'use client'
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { Disclosure } from '@headlessui/react'
import { Client } from "@prismicio/client";

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';



const Header = ({ headerData }) => (
  <Disclosure>
    {({ open }) => (
      <header className="bg-[#F0F0F0] bg-opacity-80 relative h-24">
        <nav className="container mx-auto px-6 py-0">
          <div className="flex items-center justify-between">
            {/* <!-- logo --> */}
            <PrismicNextLink field={headerData.data.logolink}>
              <PrismicNextImage field={headerData.data.logo} className="h-24 w-24 object-contain" />
            </PrismicNextLink>
            {/* <!-- mobile menu --> */}
            <Disclosure.Button>
              <div className="flex lg:hidden">
                {open ? <RxCross1 /> : <RxHamburgerMenu />}
              </div>
            </Disclosure.Button>
            {/* <!-- menu items --> */}
            <div
              className="lg:flex hidden justify-between absolute lg:top-0 top-28 lg:relative lg:bg-none w-full lg:w-auto left-0 p-6 lg:p-0 z-50"
            >
              <div className="lg:space-x-6 lg:flex-row flex-col flex font-medium">
                {headerData.data.menu.map((item, index) =>
                  <PrismicNextLink key={index} field={item.menulink}>
                    <div className="hover:text-zinc-600 lg:mb-0 mb-8">
                      <PrismicRichText field={item.menutext} />
                    </div>
                  </PrismicNextLink>
                )}
              </div>

            </div>

            {open &&
              <div className="absolute top-20 w-full bg-[#F0F0F0]/80 z-20">
                <div className="flex flex-col items-center space-y-4 lg:hidden">
                  {headerData.data.menu.map((item, index) =>
                    <PrismicNextLink key={index} field={item.menulink}>
                      <div className="hover:text-zinc-600 lg:mb-0 mb-8">
                        <PrismicRichText field={item.menutext} />
                      </div>
                    </PrismicNextLink>
                  )}
                </div>
              </div>
            }
          </div>
        </nav>
      </header>
    )}
  </Disclosure>
);


export default Header;


  // function MyDisclosure() {
  //   return (
  //     <Disclosure>
  //       {({ open }) => (
  //         /* Use the `open` state to conditionally change the direction of an icon. */
  //         <>
  //           <Disclosure.Button>
  //             Do you offer technical support?
  //             <ChevronRightIcon className={open ? 'rotate-90 transform' : ''} />
  //           </Disclosure.Button>
  //           <Disclosure.Panel>No</Disclosure.Panel>
  //         </>
  //       )}
  //     </Disclosure>
  //   )
  // }