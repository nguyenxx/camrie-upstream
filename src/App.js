// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Container, Nav } from 'react-bootstrap';
// import NavBar from "./components/NavBar/NavBar"; 
// import HomeTab from './app/home/HomeTab';
// import SetUpTab from './app/setup/SetUpTab'; 
// import './App.css';

// // Extract the main page content into a separate component
// function MainPage() {
//   const [activeTab, setActiveTab] = useState("home");
//   const [isAccordionOpen, setIsAccordionOpen] = useState(true);

//   // Toggle function for the accordion
//   const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

//   return (
//     <>
//       <NavBar />
//       <Container className="mt-4">
//         <Nav variant="tabs" activeKey={activeTab} onSelect={setActiveTab} className="custom-tabs mt-4">
//           <Nav.Item>
//             <Nav.Link eventKey="home">Home</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="setup">Set Up</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="results">Results</Nav.Link>
//           </Nav.Item>
//         </Nav>

//         <div className="mt-3">
//           {activeTab === "home" && (
//             <HomeTab
//               isAccordionOpen={isAccordionOpen}
//               toggleAccordion={toggleAccordion}
//             />
//           )}
//           {activeTab === "setup" && (
//             <SetUpTab
//               isAccordionOpen={isAccordionOpen}
//               toggleAccordion={toggleAccordion}
//             />
//           )}
//           {/* Additional tabs like Results can be added similarly */}
//         </div>
//       </Container>
//       <footer className="footer">
//         <Container>
//           <p className="text-center">&copy; 2025 Copyright: Center for Biomedical Imaging. All rights reserved.</p>
//         </Container>
//       </footer>
//     </>
//   );
// }

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import NavBar from "./components/NavBar/NavBar";
import HomeTab from './app/home/HomeTab';
import SetUpTab from './app/setup/SetUpTab';
import SignIn from './app/signin/SignIn'; // Corrected path

import './App.css';

function MainPage() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  // Handle tab selection and navigation
  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
    navigate(`/main/${selectedTab}`); // Navigate to the selected tab's route
  };

  return (
    <>
      <NavBar />
      <Container className="mt-4">
      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect} className="custom-tabs mt-4 mb-3">
        <Nav.Item>
          <Nav.Link eventKey="home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="setup">Set Up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="results">Results</Nav.Link>
        </Nav.Item>
      </Nav>

        <Routes>
          <Route path="/home" element={<HomeTab />} />
          <Route path="/setup" element={<SetUpTab />} />
        </Routes>
      </Container>
      <footer className="footer">
        <Container>
          <p className="text-center">&copy; 2025 Copyright: Center for Biomedical Imaging. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Default to Sign-In */}
        <Route path="/main/*" element={<MainPage />} /> {/* Nested routes for Main Page */}
      </Routes>
    </Router>
  );
}

export default App;
