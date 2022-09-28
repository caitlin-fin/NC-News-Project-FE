import NavBar from "./NavBar";
import "../styling/Header.css";

function Header() {
  return (
    <div className="header">
        <h1 className = "header-title">Northcoders News</h1>
      <NavBar />
    </div>
  );
}
export default Header;
