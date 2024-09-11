"use client";

import { allRoutes } from "@/constants/allRoutes";
import { MegaMenu, Navbar } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";

export default function NavbarWrapper() {
  return (
    <MegaMenu>
      <Navbar.Brand href={allRoutes.HOME}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href={allRoutes.HOME}>Home</Navbar.Link>
        <Navbar.Link href={allRoutes.HOME}>Company</Navbar.Link>
        <MegaMenu.DropdownToggle>
          Marketplace
          <HiChevronDown className="ml-2" />
        </MegaMenu.DropdownToggle>
        <Navbar.Link href={allRoutes.HOME}>Resources</Navbar.Link>
        <Navbar.Link href={allRoutes.HOME}>Contact</Navbar.Link>
      </Navbar.Collapse>
      {/* <MegaMenu.Dropdown>
        <div className="mt-6 border-y border-gray-200 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
          <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul
              className="mb-4 hidden space-y-4 md:mb-0 md:block"
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Online Stores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Segmentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Marketing CRM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Online Stores
                </a>
              </li>
            </ul>
            <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 dark:hover:text-primary-500"
                >
                  Resources
                </a>
              </li>
            </ul>
            <a href="#" className="rounded-lg bg-gray-500 p-8 text-left">
              <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                Preview the new Flowbite dashboard navigation.
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
              >
                Get started
                <HiArrowRight className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      </MegaMenu.Dropdown> */}
    </MegaMenu>
  );
}
