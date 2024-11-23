import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Usa from "../assets/img/usa.svg";

const DropDown = ({ lang }) => {
  return (
    <Menu>
      <MenuButton
        class="w-10 h-10 inline-flex justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset rounded-full ring-slate-500 "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {lang == "en" ? (
          <img class="h-5 w-5 rounded-full my-auto" src={Usa.src} alt="" />
        ) : (
          <p className="my-auto">🥒</p>
        )}
      </MenuButton>
      <MenuItems
        class="cursor-pointer absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        anchor="bottom"
      >
        <MenuItem>
          <a
            class="p-2 block font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="/en"
          >
            English
          </a>
        </MenuItem>
        <MenuItem>
          <a
            class="p-2 block font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            href="/pi"
          >
            Pickleñol
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
