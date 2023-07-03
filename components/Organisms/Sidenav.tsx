/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import dynamic from "next/dynamic";

const SideNav = dynamic(() => import("@/components/Molecules/SideNav"), {
  ssr: false,
});
export default SideNav;
