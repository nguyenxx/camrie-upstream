import React from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faUpload } from '@fortawesome/free-solid-svg-icons';

import JobsGrid from '../../components/JobsGrid/JobsGrid'
import '../../App.css';

const ResultsTab = ({ isAccordionOpen, toggleAccordion }) => {
    return (
        <>
            {/* Upload button + checkbox on the same line, aligned to the right */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check
                    type="checkbox"
                    id="auto-refresh"
                    label="Auto Refreshing"
                />

                <Button variant="primary" className="custom-purple-button">
                    <FontAwesomeIcon icon={faUpload} style={{ marginRight: '8px' }} /> Upload Results
                </Button>
            </div>

            {/* First Accordion - Default open */}
            <Accordion defaultActiveKey="0" style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={toggleAccordion}>Jobs</Accordion.Header>
                    <Accordion.Body>

                        {/* Accordion Content (JobsGrid) */}
                        <JobsGrid isAccordionOpen={isAccordionOpen} />

                        {/* Refresh button below the accordion */}
                        <div className="button-container">
                            <Button variant="primary" className="custom-purple-button">
                                <FontAwesomeIcon icon={faSyncAlt} style={{ marginRight: '8px' }} /> Refresh
                            </Button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Second Accordion - Default closed */}
            <Accordion style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={toggleAccordion}>View Results</Accordion.Header>
                    <Accordion.Body>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <p style={{ color: 'rgba(0, 0, 0, 0.4)' }}> Please Select a Job Result </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Third Accordion - Default closed */}
            <Accordion style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={toggleAccordion}>Current Job Settings</Accordion.Header>
                    <Accordion.Body>
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <p style={{ color: 'rgba(0, 0, 0, 0.4)' }}> Please Select a Job Result </p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default ResultsTab;
