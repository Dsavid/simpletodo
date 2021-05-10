import React from "react";
import Home from "./components/Home/Home";
import "./styles/global.scss";
import TodoPage from "./components/todo/TodoPage";
import { Switch, Route, useHistory } from "react-router-dom";
import HomeNavbar from "./components/Home/HomeNavbar";
import About from "./components/Home/About";
import ListDetail from "./components/todo/ListDetail";
function App() {
  const history = useHistory();
  const cookies = document.cookie.split(";");
  const token = cookies.filter((cookie) => cookie.includes("token"))[0];
  if (token != undefined) {
    history.push("todo");
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomeNavbar />
          <Home />
        </Route>
        <Route path="/about" exact>
          <HomeNavbar />
          <About />
        </Route>
        <Route path="/todo" exact>
          <TodoPage />
        </Route>
        <Route path="/todo/:id" exact>
          <ListDetail />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
