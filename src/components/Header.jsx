const Header = () => {
  return (
    <div className="bg-black">
      <div className="navbar flex px-11 py-[22px]">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-white text-xs">PROJECTS</a>
              </li>
              <li>
                <a className="text-white text-xs">ABOUT</a>
              </li>
            </ul>
          </div>
          <a className="text-[36px] text-white font-normal">FAHAD K.</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-white text-xs">PROJECTS</a>
            </li>
            <li>
              <a className="text-white text-xs">ABOUT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="border border-white px-3 py-1  rounded-full">
            <a className="text-white text-xs">AVAILABLE FOR HIRED</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
