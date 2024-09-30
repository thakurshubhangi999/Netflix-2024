import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Homescreen from "./screens/Homescreen";
import { useEffect} from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen
 from "./screens/ProfileScreen";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
          <Route exact path="/profile" element={<ProfileScreen />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
