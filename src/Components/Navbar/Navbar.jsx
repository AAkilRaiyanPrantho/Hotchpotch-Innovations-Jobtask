import logo from '../../../images/White Logo_Hotchpotch-01 1.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#12141D] text-white">
  <div className="navbar-start lg:hidden">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Demos</a></li>
        <li>
          <a>About</a>
        </li>
        <li><a>Blog</a></li>
        <li><a>Pages</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo}></img></a>
  </div>
  <div className="navbar-start hidden lg:flex">
  <a className="btn btn-ghost text-xl"><img src={logo}></img></a>
    <ul className="menu menu-horizontal px-1">
    <li><a>Demos</a></li>
        <li>
          <a>About</a>
        </li>
        <li><a>Blog</a></li>
        <li><a>Pages</a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn btn-outline text-white">Sign In</a>
    <a className="btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-white">Get Started Free</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;
