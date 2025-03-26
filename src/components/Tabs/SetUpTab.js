import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import CustomButton from "../Button/CmrButton";
import SNRAnalysisContent from './SNRAnalysisContent';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';


const SetUpTab = ({ toggleAccordion }) => {
    return (
        <>
            <div className="button-container mb-3">
                <CustomButton
                    variant="outline-primary"
                    icon={faRedo}
                    text="Reset Signal & Noise Files"
                    className="custom-purple-outline-button"
                    onClick={() => alert("Button Clicked!")}
                ></CustomButton>
            </div>

            {/* First Accordion - Default open */}
            <Accordion defaultActiveKey="0" style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={toggleAccordion}>Signal & Noise Files</Accordion.Header>
                    <Accordion.Body>
                        {/* First row: Signal File selection */}
                        <div className="d-flex align-items-center">
                            <p className="me-3">Signal File:</p>
                            <CustomButton
                                variant="primary"
                                text="Choose"
                                className="custom-purple-button me-4"
                                onClick={() => alert("Button Clicked!")}
                            ></CustomButton>
                            <Form.Check type="checkbox" id="multi-raid" label="Multi-Raid" />
                        </div>


                        {/* Divider */}
                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                        {/* Second row: Noise File selection */}
                        <div className="d-flex align-items-center">
                            <p className="me-3">Noise File:</p>
                            <CustomButton
                                variant="primary"
                                text="Choose"
                                className="custom-purple-button me-4"
                                onClick={() => alert("Button Clicked!")}
                            ></CustomButton>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Second Accordion - Default closed */}
            <Accordion style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={toggleAccordion}>SNR Analysis</Accordion.Header>
                    <Accordion.Body>
                        <SNRAnalysisContent />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default SetUpTab;
