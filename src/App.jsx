import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";

// Import the pages

import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import PageAll from "./Components/PageAll";

// Import css
import './App.css';
import './Tab.css';

function App() {

    return (
        <div className="App">
          <center><h1>React Router Example</h1></center>
            <Router>
              <center>  <div className="nav" style={{width: 'max-content'}}>
                  
                  <ul className="nav nav-pills mb-3"  id="pills-tab" role="tablist" >
                      <li className="nav-item" role="presentation" style={{backgroundColor:'#FAFAFA !important',
    color: 'green',
    borderRadius: '0px',
    borderBottom: '2px solid green !important'}}><Link className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true" to="/">ALL</Link></li>
                      <li className="nav-item" role="presentation"><Link className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false" to="page1">FULL STACK DEVELOPMENT</Link></li>
                      <li className="nav-item" role="presentation"><Link className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false" to="page2">DATA SCIENCE</Link></li>
                      <li className="nav-item" role="presentation"><Link className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"  to="page3">CYBER SECURITY </Link></li>
                      <li className="nav-item" role="presentation"><Link className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"  to="page4">CAREER </Link></li>
                  </ul>
              </div></center>
                <Routes>
                    <Route exact path="/" element={<PageAll />} />
                    <Route exact path="page1" element={<Page1 />} />
                    <Route exact path="page2" element={<Page2 />} />
                    <Route exact path="page3" element={<Page3 />} />
                    <Route exact path="page4" element={<Page4 />} />
                </Routes>
                
            </Router>
        </div>
    );
}
export default App;