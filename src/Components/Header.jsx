import { NavLink, useLocation } from "react-router";

function Header() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/register" && (
        <header className="flex justify-between items-center border-b h-16">
          <NavLink className="p-2" to="/">
            Home
          </NavLink>
          <NavLink className="p-2" to="/register">
            Crie sua conta
          </NavLink>
        </header>
      )}
    </>
  );
}

export default Header;
