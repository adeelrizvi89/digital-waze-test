import "./App.css";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewAppointmentForm from "./Components/NewAppointmentForm";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

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
        {/* <PageOne /> */}
        {/* <PageTwo /> */}
        {/* <MainSection /> */}
      </div>
    </>
  );
}

export default App;
