import React, { useState } from 'react';
import { Accordion, Button, Container, Row, Col } from 'react-bootstrap';
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
                    <DataTable isAccordionOpen={isAccordionOpen} setSelectedRows={setSelectedRows}/>
                    <div className="button-container">
                        <Row className="w-100">
                            <Col md={6} className="d-flex gap-2 mb-3">
                                <Button variant="danger" disabled={selectedRows.length === 0}>
                                    <FontAwesomeIcon icon={faTrash} style={{ marginRight: "8px" }} /> Delete
                                </Button>
                                <Button variant="success" disabled={selectedRows.length === 0}>
                                    <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} /> Download
                                </Button>
                            </Col>

                            <Col md={6} className='d-flex ms-auto mb-3'>
                                <Button variant="primary" className="custom-purple-button" >
                                    <FontAwesomeIcon icon={faUpload} style={{ marginRight: "8px" }} /> Upload
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default HomeTab;