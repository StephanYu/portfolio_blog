import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const Menu = ({ navbarMenu }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button">
          <img className="w-[74px] lg:w-[91px] h-[19px]" src="/hamburger.svg" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[var(--black-a9)]" />
        <Dialog.Content className="bg-white z-10 fixed inset-0 w-full h-full p-6 lg:px-20 lg:py-6 focus:outline-none px-4">
         <div className="flex items-center justify-start mb-[72px]">
            <a
              className="cursor-pointer flex items-center justify-center w-8 h-8"
              href="/"
            >
              <img src="/default-logo.svg" alt="default-logo" />
            </a>
          </div>
         
          <nav>
            <ul className="flex flex-col dark:text-light text-dark text-lg font-bold">
              {
                navbarMenu.map((item, index) => (
                  <li key={item._uid} className="flex items-center justify-start py-[10px] gap-[10px] border-b border-gray">
                    <div className="flex flex-col justify-start items-start"><div className="text-sm font-light">{`0${index + 1}`}</div></div>
                    
                    <a
                      href={`/${item.link.cached_url}`}
                      className="text-[28px] font-normal"
                    >
                      {item.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Dialog.Close asChild>
            <button
              type="button"
              className="font-inherit inline-flex items-center justify-center absolute top-6 right-4 lg:right-20"
              aria-label="Close"
              onClick={handleClose}
            >
              <Cross2Icon className="w-[26px] h-[26px]"/>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Menu;