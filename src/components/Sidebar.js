import {
  IoCalendarClearOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSettings,
  IoTicketOutline,
} from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";
import { UserAddress } from "./ConnectBtn";
import { MdOutlineAddLocation } from "react-icons/md";

function Sidebar() {
  return (
    <div className="flex flex-col p-4 border-r border-neutral-200 gap-4 h-screen items-center ">
      <div className="">
        <Logo />
      </div>
      <div className="flex flex-col gap-2 py-4 justify-center w-full">
      <Link className="sidebar-link" passHref href="/">
        <IoHomeOutline /> Home
      </Link>
      <Link className="sidebar-link" passHref href="/state">
        <MdOutlineAddLocation /> States
      </Link>
      <Link className="sidebar-link" passHref href="/settings">
        <IoSettings /> Preferences
      </Link>
      </div>
      <div className='mt-auto'>
        <UserAddress/>
      </div>
    </div>
  );
}

export default Sidebar;
