import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import AdmissionForm from "./pages/admissionForm"
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;