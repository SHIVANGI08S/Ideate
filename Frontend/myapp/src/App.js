import {Route,Routes} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Verify from "./verify/Verify";
import Ideas from "./ideas/Ideas";

function App() {
  return (
    <div>
    <header><Header/></header>
    <section>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ideas" element={<Ideas/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </section>
    </div>
  );
}

export default App;
