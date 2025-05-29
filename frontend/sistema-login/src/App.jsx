import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
// import Home from "./pages/Home";
// import UpdateUser from "./pages/UpdateUser";
// import ListUser from "./pages/UserList";
import "./styles/styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterLogin />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/list" element={<UserList />} /> */}
      </Routes>
    </Router>
  );
}