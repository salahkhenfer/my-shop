import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useAuth } from "./context/GlobalState";
import { useEffect } from "react";
import { auth } from "./firebase";
import Home from "./components/Home";
import { Checkout } from "./components/Checkout";
import Payment from "./components/Payment";
import PuymentDone from "./components/PuymentDone";
import Orders from "./components/Orders";
export const getBasketTotal = (basket) => {
  let cuont = 0;
  for (let i = 0; i < basket.length; i++) {
    cuont = cuont + basket[i].price;
  }
  return cuont;
};
function App() {
  const { dispatch } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/Orders"
        element={
          <>
            <Header />
            <Orders />
          </>
        }
      />
      <Route
        path="/Basket"
        element={
          <>
            <Header />
            <Checkout />
          </>
        }
      />
      <Route
        path="/Payment"
        element={
          <>
            <Header />
            <Payment />
          </>
        }
      />
      <Route
        path="/PuymentDone"
        element={
          <>
            <Header />
            <PuymentDone />
          </>
        }
      />
      <Route path="/Login" element={<Login />} />
      <Route path="*" element={<h1>page not found</h1>} />
    </Routes>
  );
}

export default App;
