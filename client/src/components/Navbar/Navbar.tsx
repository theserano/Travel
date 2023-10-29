import logoArrow from "../../assets/Arrow 05.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const showDropdown = (): void => {
    setDropdown(!dropdown);
  };

  return (
    <div className=" flex justify-between navbar w-4/6  pt-4 items-center mx-auto">
      <div className="logo">
        <div className="logo_text text-white text-2xl font-bold">Travel</div>
        <div className="arrow"><img src={logoArrow} alt="logoArrow" /></div>
      </div>

      <ul className="nav_links flex flex-row gap-8 text-white text-sm">
        <Link className="link" to="/"><li>Home</li></Link>
        <Link className="link" to="/"><li>About</li></Link>
        <Link className="link" to="/">
          <li
            onClick={showDropdown}
            className={`serv_dropdown flex flex-row items-center ${dropdown ? 'dropdown_active' : ''}`}
          >
            Services <IoMdArrowDropdown />
            <div className={`serv_select ${dropdown ? 'dropdown_active' : ''}`}>
              <div className="dropdown_links">Honeymoon Packages</div>
              <div className="dropdown_links">Tours Packages</div>
              <div className="dropdown_links">Musical Events</div>
              <div className="dropdown_links">Build Package</div>
            </div>
          </li>
        </Link>
        <Link className="link" to="/"><li>Upcoming Packages</li></Link>
      </ul>

      <div className="nav_button">Get in Touch</div>
    </div>
  );
};

export default Navbar;
