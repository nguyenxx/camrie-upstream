import React from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';
import CustomButton from "../../components/Button/CmrButton";
import SNRAnalysisContent from './SNRAnalysisContent';
import { faRedo, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';


const SetUpTab = ({ toggleAccordion }) => {
    return (
        <>
            {/* First Accordion - Default open */}
            <Accordion defaultActiveKey="0" style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={toggleAccordion}>Model</Accordion.Header>
                    <Accordion.Body>
                        {/* First row: Model selection */}
                        <div className="d-flex align-items-center mb-3">
                            <p className="me-3">Model:</p>
                            <CustomButton
                                variant="primary"
                                text="Choose"
                                icon={faFolderOpen}
                                className="custom-purple-button"
                                onClick={() => alert("Button Clicked!")}
                            ></CustomButton>
                        </div>

                        {/* Extract info from json object and display here */}
                        <div className="w-50">
                        <Card>
                            <Card.Header>Model Information</Card.Header>
                            <Card.Body>
                                <ul className='no-bullets'>
                                    <li>B<sub>0</sub> = </li>
                                    <li>Object = </li>
                                    <li>Resolution = </li>
                                    <li>Number of Tissue = </li>
                                    <li>Coil Name = </li>
                                    <li>Number of Coils = </li>
                                    <li>EM Simulator = </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                        <CustomButton
                                variant="primary"
                                text="OK"
                                className="custom-purple-button"
                                onClick={() => alert("Button Clicked!")}
                        ></CustomButton>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Second Accordion - Default closed, Opens once OK button is clicked */}
            <Accordion style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={toggleAccordion}>Pulse Sequence</Accordion.Header>
                    <Accordion.Body>
                        {/* First row: Model selection */}
                        <div className="d-flex align-items-center mb-3">
                            <p className="me-3">Sequence:</p>
                            <CustomButton
                                variant="primary"
                                text="Choose"
                                icon={faFolderOpen}
                                className="custom-purple-button"
                                onClick={() => alert("Button Clicked!")}
                            ></CustomButton>
                            <p className='ms-4'> {'<<'} Type {'>>'} </p>
                        </div>

                        {/* Extract info from json object and display here */}
                        <div className="w-50">
                        <Card>
                            <Card.Header>Sequence Information</Card.Header>
                            <Card.Body>
                                <ul className='no-bullets'>
                                    <li>TR = </li>
                                    <li>TE = </li>
                                    <li>FA = </li>
                                    <li>ACC = </li>
                                    <li>Coil Name = </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                        <Form.Check className="me-3" type="checkbox" id="preview-reconstruction" label="Preview Reconstruction" />
                        <CustomButton
                                variant="primary"
                                text="ADD"
                                className="custom-purple-button"
                                onClick={() => alert("Button Clicked!")}
                        ></CustomButton>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            {/* SNR Analysis */}
            {/* <Accordion style={{ marginBottom: '10px' }}>
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={toggleAccordion}>SNR Analysis</Accordion.Header>
                    <Accordion.Body>
                        <SNRAnalysisContent />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </>
    );
};

export default SetUpTab;
