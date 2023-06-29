'use client';
import { Sidenav } from 'tw-elements';
import { useRef } from 'react';
import useInitTE from '@/hooks/global/useInitTE';
import Text from '@/components/Atoms/Text';
import useStore from '@/hooks/global/useStore';

const SideNav = () => {
  const sideNavRef = useRef(null);
  useInitTE({ Sidenav }, sideNavRef, { sidenavWidth: 244 });

  const setSidenav = useStore((state) => state.setSidenav, ['admin']);

  const onClickSidenav = (data: string) => setSidenav(data);

  return (
    <div className="min-h-screen h-auto relative w-[18%]">
      <nav
        id="sidenav-1"
        className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
        ref={sideNavRef}
      >
        <div className="flex justify-center p-8 border-b-2">LOGO</div>
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          {sidenavLinks.map((link, id) => (
            <li
              className="relative"
              key={`${link}-${id}`}
              onClick={() => onClickSidenav(link)}
            >
              <a
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-primary hover:bg-opacity-[0.5] hover:text-inherit hover:outline-none focus:bg-primary focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
              >
                <Text className="text-base md:text-lg capitalize">{link}</Text>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;

export const sidenavLinks = ['dashboard', 'general', 'collections', 'users'];
