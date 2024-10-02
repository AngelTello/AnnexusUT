import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import RegisterForm from "./routes/RegisterForm/RegisterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register-form" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
