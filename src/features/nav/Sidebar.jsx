import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="h-screen w-20">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <h3 className="flex items-center justify-between p-4">Tenor</h3>

        <ul></ul>
      </nav>
    </aside>
  );
}

// import { Link } from 'react-router-dom';

// export default function Sidebar() {
// 	return (
// 		<nav>
// 			<ul>
// 				<li>
// 					<Link to="/">Home</Link>
// 				</li>
// 				<li>
// 					<Link to="/todos">Todo Lists</Link>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// }
