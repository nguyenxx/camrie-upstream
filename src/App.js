import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import HomeTab from './components/HomeTab';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  // Toggle function for the accordion
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Nav variant="tabs" activeKey={activeTab} onSelect={setActiveTab} className="custom-tabs mt-4">
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

        <div className="mt-3">
          {activeTab === "home" && (
            <HomeTab
              isAccordionOpen={isAccordionOpen}
              toggleAccordion={toggleAccordion}
            />
          )}
          {/* {activeTab === "setup" && (
            <SetUpTab
              isAccordionOpen={isAccordionOpen}
              toggleAccordion={toggleAccordion}
            />
          )}
          {activeTab === "results" &&  <ResultsTab
              isAccordionOpen={isAccordionOpen}
              toggleAccordion={toggleAccordion}
            />} */}
        </div>
        
      </Container>
      <footer className="footer">
        <Container>
          <p className="text-center">&copy; 2025 Copyright: Center for Biomedical Imaging. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
