import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewAppointmentForm from "./pages/NewAppointmentForm";
import Navbar from "./Components/shared/layout/Navbar";
import Header from "./Components/shared/layout/Header";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Header />
          <Switch>
            <Route path="/modal" component={NewAppointmentForm} />
            <Route path="/pageTwo" component={PageTwo} />
            <Route path="" component={PageOne} exact />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
