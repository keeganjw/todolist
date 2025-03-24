import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="mb-6">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todo Lists</Link>
        </li>
      </ul>
    </nav>
  );
}
