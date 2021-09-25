import "./App.css";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewAppointmentForm from "./Components/NewAppointmentForm";

function App() {
  return (
    <>
      <Router>
        <Route path="" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
      </Router>
      <NewAppointmentForm />
    </>
  );
}

export default App;
