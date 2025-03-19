import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  // Toggle function for the accordion
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <div>
      <NavBar />
      <Container className="mt-5">
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
      </Container>
    </div>
  );
}

export default App;
