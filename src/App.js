import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/all-posts" element={<AllPosts />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
