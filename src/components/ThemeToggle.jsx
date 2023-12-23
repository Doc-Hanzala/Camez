import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "../Context";

const ThemeToggle = () => {
  const { themeToggle, changeTheme } = useGlobalContext();
  return (
    <button className="btn"  onClick={changeTheme}>
      {themeToggle ? <CiSun  className="sun" /> : <FaMoon  className="moon" />}
    </button>
  );
};

export default ThemeToggle;
