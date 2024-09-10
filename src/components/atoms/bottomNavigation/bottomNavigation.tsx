"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

const BottomNavigation = () => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <>
      <div className="my-8" />
      <div className="fixed bottom-0 left-0 z-50 w-full bg-transparent ">
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-md mx-auto">
            <div className="px-7 bg-white drop-shadow-lg rounded-2xl mb-2">
              <div className="flex">
                <div className="flex-1 group">
                  <Link
                    href="/"
                    className={`flex items-end justify-center text-center
                       mx-auto px-4 pt-2 w-full text-gray-400
                        border-b-2 border-transparent
                        ${
                          pathname === "/" &&
                          "group-hover:border-indigo-500 group-hover:text-indigo-500"
                        }`}
                  >
                    <span className="block px-1 pt-1 pb-2 text-center">
                      <IoHomeOutline className="ml-1 text-2xl pt-1 mb-1 block" />
                      <span className="block text-xs pb-1">Home</span>
                    </span>
                  </Link>
                </div>
                <div className="flex-1 group">
                  <Link
                    href="/explore"
                    className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                  >
                    <span className="block px-1 pt-1 pb-2">
                      <MdOutlineExplore className="ml-2 far fa-compass text-2xl pt-1 mb-1 block" />
                      <span className="block text-xs pb-1">Explore</span>
                    </span>
                  </Link>
                </div>
                <div className="flex-1 group">
                  <Link
                    href="/profile/cat"
                    className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                  >
                    <span className="block px-1 pt-1 pb-2">
                      <IoSearch className="ml-1 far fa-search text-2xl pt-1 mb-1 block" />
                      <span className="block text-xs pb-1">Search</span>
                    </span>
                  </Link>
                </div>
                <div className="flex-1 group">
                  <Link
                    href="/settings"
                    className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500"
                  >
                    <span className="block px-1 pt-1 pb-2">
                      <IoSettingsOutline className="ml-2 far fa-cog text-2xl pt-1 mb-1 block" />
                      <span className="block text-xs pb-1">Settings</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
