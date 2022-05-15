
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Login from "./component/Auth/Login.js";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Employee from "./component/Dashboard/Employee.js";

import ProtectedRoute from "./component/Route/ProtectedRoute";

function App() {
  return (
     <Router>
         <Route exact path="/login" component={Login} />
         <ProtectedRoute exact path="/dashboard" component={Dashboard} />
         <ProtectedRoute exact path="/employees" component={Employee} />
     </Router>
  );
}

export default App;
