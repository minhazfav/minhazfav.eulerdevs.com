import ThemeController from "../Body/Hero/ThemeController";
import image from "../../assets/icon.png";
import DropdownMenu from "./Dropdown";
const Header = () => {
  return (
    <header className=" bg-base-200 flex justify-center items-center">
      <div className="navbar max-w-7xl">
        <div className="navbar-start">
          <DropdownMenu></DropdownMenu>
          {/* Logo */}
          <div className="flex justify-center items-center ml-4">
            <div className="w-10 rounded-full">
              <img alt="Md Minhazul Abedin" className="w-full" src={image} />
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
              <details>
                <summary>Blog</summary>
                <ul className="p-2">
                  <li>
                    <a className="text-lg md:text-2xl">CSS</a>
                  </li>
                  <li>
                    <a className="text-lg md:text-2xl">React</a>
                  </li>
                  <li>
                    <a className="text-lg md:text-2xl">NodeJS</a>
                  </li>
                  <li>
                    <a className="text-lg md:text-2xl">Linux</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex mr-3">
            <a href="https://www.facebook.com/minhazfav.facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="h-6 w-6 invisible"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#2aa4f4" />
                  <stop offset={1} stopColor="#007ad9" />
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                ></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/minhazfav/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="h-7 w-7"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288d1"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
                ></path>
              </svg>
            </a>
          </div>
          <ThemeController></ThemeController>
        </div>
      </div>
    </header>
  );
};

export default Header;
