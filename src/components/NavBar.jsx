import LinkButton from "./LinkButton";
import Logo from "./Logo";
import { HiOutlineFilm } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <div className="flex justify-between bg-yellow p-3">
      <Logo />
      {location.pathname !== "/mylist" && (
        <div className="flex flex-row gap-2 ">
          <HiOutlineFilm size={30} className="text-purple" />
          <LinkButton
            to="/mylist"
            className="text-2xl font-bold text-purple hover:text-blue-900 active:text-extrabold"
          >
            My List
          </LinkButton>
        </div>
      )}
    </div>
  );
}

export default NavBar;
