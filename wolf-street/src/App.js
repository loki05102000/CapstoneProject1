import Register from "./Pages/RegisterPage/Register";
import ChoicePage from "./Pages/ChoicePage/ChoicePage";
import { Routes, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path= "/choice" element = {<ChoicePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
