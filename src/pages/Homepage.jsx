import NavBar from "../components/NavBar";
import Main from "../components/Main";

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col p-3 bg-purple">
      <NavBar />
      <Main className="flex-grow" />
    </div>
  );
}

export default Homepage;
