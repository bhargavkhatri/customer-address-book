import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

import CustomerLoginPage from "./Pages/CustomerLoginPage";
import Addressbook from "./Pages/Addressbook";
import AddAddress from "./Pages/AddAddress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CustomerLoginPage />} />
            <Route path="/addressbook" element={<Addressbook />} />
            <Route path="/add-address" element={<AddAddress />} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
