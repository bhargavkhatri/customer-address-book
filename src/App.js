import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerLoginPage from "./Pages/CustomerLoginPage";
import Addressbook from "./Pages/Addressbook";
import AddAddress from "./Pages/AddAddress";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CustomerLoginPage />} />
          <Route path="/addressbook" element={<Addressbook />} />
          <Route path="/add-address" element={<AddAddress />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
