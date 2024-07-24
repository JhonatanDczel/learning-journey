import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Nav />

      <div>
        <Outlet />
      </div>
    </>
  );
}
