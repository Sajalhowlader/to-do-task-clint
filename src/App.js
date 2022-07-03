import { Route, Routes } from "react-router-dom";
import "../src/Assets/Css/Main.css";
import "./App.css";
import Header from "./Assets/Common/Header";
import { Toaster } from 'react-hot-toast';
import { publicRoute } from "./Assets/Routes/PublicRoute";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Routes>
      <Toaster 
      position="top-center"
      reverseOrder={false}
      />
    </div>
  );
}

export default App;
