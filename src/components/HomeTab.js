import React, { useState } from 'react';
import { Accordion, Button, Container, Row, Col } from 'react-bootstrap';
import CustomButton from "./CmrButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTable from './DataGrid';
import '../App.css'; // Ensure styling is still applied

const HomeTab = ({ isAccordionOpen, toggleAccordion }) => {
    const [selectedRows, setSelectedRows] = useState([]); // tracl row selection

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header onClick={toggleAccordion}>
                    Data
                </Accordion.Header>
                <Accordion.Body>
                    <DataTable isAccordionOpen={isAccordionOpen} setSelectedRows={setSelectedRows} />
                    <div className="button-container">
                        <Row className="w-100">
                            <Col md={6} className="d-flex gap-2">
                                <CustomButton
                                    variant="danger"
                                    icon={faTrash}
                                    text="Delete"
                                    disabled={selectedRows.length === 0}
                                    onClick={() => alert("Button Clicked!")}
                                ></CustomButton>
                                <CustomButton
                                    variant="success"
                                    icon={faDownload}
                                    text="Download"
                                    disabled={selectedRows.length === 0}
                                    onClick={() => alert("Button Clicked!")}
                                ></CustomButton>
                            </Col>

                            <Col md={6} className='d-flex ms-auto'>
                                <CustomButton
                                    variant="primary"
                                    icon={faUpload}
                                    text="Upload"
                                    className="custom-purple-button"
                                    onClick={() => alert("Button Clicked!")}
                                ></CustomButton>
                            </Col>
                        </Row>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default HomeTab;