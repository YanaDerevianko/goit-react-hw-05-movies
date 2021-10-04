import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import AppBAr from "./components/AppBar/AppBar";

export default function App() {
  return (
    <div>
      <AppBAr />
      <Route path="/">
        <Homepage />
      </Route>
    </div>
  );
}


