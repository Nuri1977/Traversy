import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import { Container } from "@mui/material";

function App() {
  return (
    <main>
      <Header />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
