import "./App.css";
import Auth from "./Route/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Auth />
      <ToastContainer />
    </div> 
  );
}

export default App;
