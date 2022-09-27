import { Link } from "react-router-dom";

function NavBar() {
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      <p>Logged in as: user</p>
      </nav>
  );
}

export default NavBar;
