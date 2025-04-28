import { BrowserRouter,Routes,Route } from "react-router-dom"
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Header from "./components/header"
const App = () => {
  return (
    <BrowserRouter>
    <div className="h-screen flex flex-col">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:country" element={<Detail/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
