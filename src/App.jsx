import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";


function App() {
  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
