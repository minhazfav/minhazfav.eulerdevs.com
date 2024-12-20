import { useState } from "react";

function DropdownMenu() {
  // State to manage the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Toggle button */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden"
        id="dropdown-toggle"
        onClick={toggleMenu} // Add click handler to toggle menu visibility
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-6 w-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      <ul
        id="dropdown-menu"
        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
          isOpen ? "" : "hidden"
        }`} // Toggle 'hidden' class based on state
      >
        <li>
          <a
            href="https://minhazfav.eulerdevs.com"
            className="text-lg md:text-2xl"
          >Home</a>
        </li>
        <li>
          <a className="text-lg md:text-2xl">Computer</a>
        </li>
        <li>
          <a className="text-lg md:text-2xl">Physics</a>
        </li>
        <li>
          <a className="text-lg md:text-2xl">Philosophy</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
