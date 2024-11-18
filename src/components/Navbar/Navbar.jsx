import { useId } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Navbar() {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  return (
    <nav
      className="grid grid-cols-3 justify-between px-24 py-4 items-center"
      style={{
        background: "linear-gradient(to right, #0000FF, #FF0000)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Logo Section */}
      <ul className="flex items-center gap-4">
        <li>
          <img
            src="/assets/images/barca.png"
            alt="Logo"
            className="h-20 w-auto"
          />
        </li>
      </ul>

      {/* User Options */}
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li>
            <button
              onClick={login}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Sign in
            </button>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-4 justify-end">
          <li>
            <Link
              to="/cart"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              My Orders
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}