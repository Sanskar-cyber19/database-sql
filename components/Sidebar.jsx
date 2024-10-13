import Link from "next/link";
import { BsImages } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";

export function Sidebar() {
  return (
    <div className="sidebar h-100 py-1 px-1 text-center">
      <h1>Logo</h1>
      <div className="sidebar-list py-3">
        <Link href="/" className="py-05">
          <h4 className="sidebar-menu">Dashboard</h4>
        </Link>
        <Link href="/" className="py-05">
          <h4 className="sidebar-menu">Applications</h4>
        </Link>
        <Link href="/" className="py-05">
          <h4 className="sidebar-menu">
            {" "}
            <BsImages /> <span>Media</span>
          </h4>
        </Link>
        <Link href="/" className="py-05">
          <h4 className="sidebar-menu">
            {" "}
            <TbSettings2 /> <span>Setting</span>
          </h4>
        </Link>
        <Link href="/" className="py-05">
          <h4 className="sidebar-menu">
            {" "}
            <TbSettings2 /> <span>LogOut</span>
          </h4>
        </Link>
      </div>
      <div className="py-3">Footer</div>
    </div>
  );
}
