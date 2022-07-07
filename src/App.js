import Navbar from "./Components/Navbar";
import NewsBox from "./Components/NewsBox";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <>
       <Router>
        <Navbar/> 
        <Routes>
          <Route exact path="/" element={<Home/>}></Route> 
          <Route path="/:business" element={<NewsBox key="business" pageSize={9} country="in" category="business"/>}></Route> 
          <Route path="/entertainment" element={<NewsBox key="entertainment" pageSize={9} country="in" category="entertainment"/>}></Route> 
          <Route path="/general" element={<NewsBox key="general" pageSize={9} country="in" category="general"/>}></Route> 
          <Route path="/health" element={<NewsBox key="health" pageSize={9} country="in" category="health"/>}></Route> 
          <Route path="/science" element={<NewsBox key="science" pageSize={9} country="in" category="science"/>}></Route> 
          <Route path="/sports" element={<NewsBox key="sports" pageSize={9} country="in" category="sports"/>}></Route> 
          <Route path="/technology" element={<NewsBox key="technology" pageSize={9} country="in" category="technology"/>}></Route> 
        </Routes>
        </Router>
    </>
  );
}

export default App;
