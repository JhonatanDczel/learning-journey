import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { items } from "../data/items";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Nav />

      <div>
        <div>
          {items.map((item) => (
            <div>
              <Link to={`/contacts/${item.id}`}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
