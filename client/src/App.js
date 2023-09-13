import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constant";
import Login from "./containers/Public/Login";
import Home from "./containers/Public/Home";
import Register from "./containers/Public/Register";
import Rent from "./containers/Public/Rent";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
        <Route path={path.RENT} element={<Rent />} />
      </Routes>
    </div>
  );
}

export default App;
