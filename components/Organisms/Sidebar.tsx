import dynamic from "next/dynamic";

const SideNav = dynamic(() => import("@/components/Molecules/SideNav"), {
  ssr: false,
});
export default SideNav;
