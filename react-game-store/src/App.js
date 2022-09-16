import { useState } from 'react';
import {
  BrowserRouter as Router,


  NavLink, Route, Switch
} from "react-router-dom";
import Consoles from "./ConsoleComponent/Consoles";
import Games from "./GameComponent/Games";
import AdminPage from "./Pages/AdminPage";
import CustomerPage from "./Pages/CustomerPage";
import Home from './Pages/Home';
import TShirts from "./TShirtComponent/TShirts";
function App() {
  const [userRole, setUserRole] = useState(" ");

  let page;
  if (userRole === "Admin") {
    page = <AdminPage />;
  } else if (userRole === "Customer") {
    page = <CustomerPage />;
  } else {
    page = <Home updateUserRole={setUserRole} />
  }


  return (
    <>

      {
        userRole === "" ? null : (
          <button
            type="button"
            onClick={() => setUserRole("")}
            className="btn btn-outline-dark">
            Change User
          </button>
        )}
      {page}

      <main className="container">
        <Router>
          <nav className="nav">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>

            <NavLink exact to="/games" className="nav-link" activeClassName="active">Games</NavLink>

            <NavLink exact to="/consoles" className="nav-link" activeClassName="active">Consoles</NavLink>

            <NavLink exact to="/tshirts" className="nav-link" activeClassName="active">TShirts</NavLink>

          </nav>
          <Switch>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/consoles">
              <Consoles />
            </Route>
            <Route path="/tshirts">
              <TShirts />
            </Route>
            <Route path="/">
              <h2>Welcome</h2>
            </Route>
          </Switch>
        </Router>
      </main>

    </>
  );
}

export default App;