import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomeTab from '../home/HomeTab';
import SetUpTab from '../setup/SetUpTab';

function MainPage() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
    navigate(`/main/${selectedTab}`); // Dynamically update the route
  };

  return (
    <>
      <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect} className="custom-tabs mt-4">
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

      <Container className="mt-4">
        <Routes>
          <Route path="home" element={<HomeTab />} />
          <Route path="setup" element={<SetUpTab />} />
          <Route path="results" element={<div>Results Content Coming Soon</div>} />
        </Routes>
      </Container>
    </>
  );
}

export default MainPage;
