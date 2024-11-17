import { Routes, Route } from "react-router-dom";
import CustomizePage from "./CustomizePage";
import DesignPage from "./DesignPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/customize" element={<CustomizePage />}></Route>
      </Routes>

      
      <DesignPage />
    </>
  );
}

export default App;
