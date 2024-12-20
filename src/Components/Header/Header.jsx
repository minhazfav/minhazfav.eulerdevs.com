import ThemeController from "../Body/Hero/ThemeController";
import image from "../../assets/avatar.jpeg";
import DropdownMenu from "./Dropdown";
import primal from "../../assets/primal.svg";
const Header = () => {
  return (
    <header className=" bg-base-200 flex justify-center items-center">
      <div className="navbar max-w-7xl">
        <div className="navbar-start">
          <DropdownMenu></DropdownMenu>
          {/* Logo */}
          <div className="flex justify-center items-center ml-4">
            <div className="w-10 rounded-full">
              <img
                alt="Md Minhazul Abedin"
                className="w-full rounded-full"
                src={image}
              />
            </div>
            {/* Brand Name */}
            <a className="btn btn-ghost text-xl">Md Minhazul Abedin</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ml-28">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a href="https://minhazfav.eulerdevs.com">Home</a>
            </li>
            <li>
              <a href="https://minhazfav.eulerdevs.com">Computer</a>
            </li>
            <li>
              <a href="https://minhazfav.eulerdevs.com">Physics</a>
            </li>
            <li>
              <a href="https://minhazfav.eulerdevs.com">Philosophy</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex mr-3">
            <a
              href="https://primal.net/p/npub100zfmgrdngsg6mfjvdqvap9r0q9uhznpfy88g94n3pa473vxjv5q9m94yq"
              target="_blank"
            >
              <img src={primal} alt="" className="h-6 w-6" />
            </a>
          </div>
          <ThemeController></ThemeController>
        </div>
      </div>
    </header>
  );
};

export default Header;
