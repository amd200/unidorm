import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Uitily/Header";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUp/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
