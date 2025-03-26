import React, { useState } from "react";
import { Form, Card, Accordion, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";
import RadioButtonGroup from '../../components/RadioButtonGroup/RadioButtonGroup';
import NumberInput from "../../components/NumberInput/NumberInput";
import "katex/dist/katex.min.css"; // Required for math rendering
import '../../App.css';

const SNRAnalysisContent = () => {
    const [selectedMethod, setSelectedMethod] = useState("");
    const [selectedReconstruction, setSelectedReconstruction] = useState("");
    const [selectedMultipleReplicaReconstruction, setSelectedMultipleReplicaReconstruction] = useState("");

    const handleMethodSelection = (event) => {
        setSelectedMethod(event.target.id);
        setSelectedReconstruction("");  // Reset reconstruction selection when switching methods
        setSelectedMultipleReplicaReconstruction("");
    };

    const handleReconstructionSelection = (event) => {
        setSelectedReconstruction(event.target.id);
    };

    const handleMultipleReplicaReconstructionSelection = (event) => {
        setSelectedMultipleReplicaReconstruction(event.target.id);
    };

    const analyticMethodContent = `
$$SNR_{RSS} = \\sqrt{2(p^H\\Psi ^{-1}p)}\\quad\\quad\\quad$$ $$SNR_{B1}=\\sqrt{2}\\frac{b^H\\Psi_{scaled}^{-1}p}{b^H\\Psi_{scaled}^{-1}b}\\quad\\quad\\quad$$ $$SNR_{SENSE} = \\sqrt{2}\\frac{|u^Tp|}{\\sqrt{u\\Psi^{-1}_{scaled}u^T}}$$  
`;

    const superscriptDesc = `
Where the superscript $^{T}$ and $^{H}$ indicate the transpose and the conjugate of the transpose, respectively;  
$b$ is the vector of complex coil sensitivity,  
$p$ is the vector of complex image values for each coil, and  
$u$ is the vector of complex coil unmixing coefficients for the SENSE reconstruction.
`;

    return (
        <>
            {/* Radio Buttons for Method Selection */}
            <div className="d-flex align-items-center justify-content-between margin-right-radio">
                <Form.Check
                    type="radio"
                    name="methodSelection"
                    id="analytic-method"
                    label="Analytic Method"
                    onChange={handleMethodSelection}
                />
                <Form.Check
                    type="radio"
                    name="methodSelection"
                    id="multiple-replica"
                    label="Multiple Replica"
                    onChange={handleMethodSelection}
                />
                <Form.Check
                    type="radio"
                    name="methodSelection"
                    id="pseudo-multiple-replica"
                    label="Pseudo Multiple Replica"
                    onChange={handleMethodSelection}
                />
                <Form.Check
                    type="radio"
                    name="methodSelection"
                    id="generalized-pseudo-replica"
                    label="Generalized Pseudo-Replica"
                    onChange={handleMethodSelection}
                />
            </div>

            {/* Dynamic Card Content */}
            {selectedMethod && (
                <>
                    <Card className="mt-3">
                        <Card.Body>
                            {selectedMethod === "analytic-method" && (
                                <>
                                    <p>
                                        This method is applicable to root-sum-of-squares magnitude coil combinations, B1-weighted coil combinations, and SENSE parallel imaging reconstructions.
                                    </p>
                                    <div className="math-center">
                                        <ReactMarkdown
                                            remarkPlugins={[remarkMath]}
                                            rehypePlugins={[rehypeKatex]}
                                        >
                                            {analyticMethodContent}
                                        </ReactMarkdown>
                                    </div>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkMath]}
                                        rehypePlugins={[rehypeKatex]}
                                    >
                                        {superscriptDesc}
                                    </ReactMarkdown>
                                    <p>
                                        Kellman P, McVeigh ER. Image reconstruction in SNR units: a general method for SNR measurement. Magn Reson Med. 2005 Dec;54(6):1439-47. doi: <a href="https://pubmed.ncbi.nlm.nih.gov/16261576/">10.1002/mrm.20713</a>. Erratum in: Magn Reson Med. 2007 Jul;58(1):211-2
                                    </p>
                                </>
                            )}
                            {selectedMethod === "multiple-replica" && <p>The SNR is calculated on a pixel-by-pixel basis as the ratio of the average (signal) and standard deviation (noise) of pixel values through a stack of equivalent image replicas. The replicas can be generated with any image reconstruction technique. A noise reference scan could be used to estimate the noise correlation between the elements of a received array.</p>}
                            {selectedMethod === "pseudo-multiple-replica" && (
                                <>
                                    <p>The SNR is calculated on a pixel-by-pixel basis as the ratio of the average (signal) and standard deviation (noise) of pixel values through a stack of image pseudo replicas, which are generated via a Monte Carlo technique from k-space data from a single MR acquisition. The pseudo replicas can be generated with any image reconstruction technique. A noise reference scan could be used to estimate the noise correlation between the elements of a received array.
                                    </p>

                                    <p>
                                        Robson PM, Grant AK, Madhuranthakam AJ, Lattanzi R, Sodickson DK, McKenzie CA. Comprehensive quantification of signal-to-noise ratio and g-factor for image-based and k-space-based parallel imaging reconstructions. Magn Reson Med. 2008 Oct;60(4):895-907.
                                        doi: <a href="https://pubmed.ncbi.nlm.nih.gov/18816810/" target="_blank" rel="noreferrer">10.1002/mrm.21728</a>
                                    </p>
                                </>
                            )}
                            {selectedMethod === "generalized-pseudo-replica" && (
                                <>
                                    <p>
                                        This SNR estimation approach is a hybrid of the NEMA two-acquisition method and the pseudo multiple replica method.
                                        An estimate of the image noise is determined using noise variations in space (similar to the NEMA technique) between a
                                        reconstruction of the acquired data and a separate reconstruction of that same data with pseudo-noise added (similar to the pseudo multiple replica technique).
                                    </p>

                                    <p>
                                        Wiens CN, Kisch SJ, Willig-Onwuachi JD, McKenzie CA. Computationally rapid method of estimating signal-to-noise
                                        ratio for phased array image reconstructions. Magn Reson Med. 2011 Oct;66(4):1192-7. doi: <a href="https://pubmed.ncbi.nlm.nih.gov/21465545/" target="_blank" rel="noreferrer">10.1002/mrm.22893</a>
                                    </p>
                                </>
                            )}
                        </Card.Body>
                    </Card>

                    <Accordion defaultActiveKey="0" className="mt-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Image Reconstruction Method</Accordion.Header>
                            <Accordion.Body>
                                {selectedMethod === "analytic-method" && (
                                    <>
                                        {/* Radio Buttons for Reconstruction Selection */}
                                        <div className="d-flex align-items-center justify-content-between margin-right-radio">
                                            <Form.Check
                                                type="radio"
                                                name="reconstructionSelection"
                                                id="root-sum"
                                                label="Root Sum of Squares"
                                                onChange={handleReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="reconstructionSelection"
                                                id="b1-weighted"
                                                label="B1 Weighted"
                                                onChange={handleReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="reconstructionSelection"
                                                id="sense"
                                                label="SENSE"
                                                onChange={handleReconstructionSelection}
                                            />
                                        </div>



                                        {/* Conditional Rendering of Reconstruction Content */}
                                        {selectedReconstruction && (
                                            <>
                                                <div>
                                                    {selectedReconstruction === "root-sum" && (
                                                        <>
                                                            <div className="d-flex align-items-center mt-5">
                                                                <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                                <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                            </div>

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="mt-5 mb-5" defaultChecked />

                                                            <div className="button-container mt-4">
                                                                <Button
                                                                    variant="outline-primary"
                                                                    className="custom-purple-outline-button">Queue Job
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}
                                                    {selectedReconstruction === "b1-weighted" && (
                                                        <>
                                                            <div className="d-flex align-items-center mb-5 mt-5">
                                                                <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                                <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                            </div>

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <div className="d-flex align-items-center mb-5">
                                                                <Form.Check
                                                                    type="radio"
                                                                    name="b1-weighted-selection"
                                                                    id="load-coil-sensitivities"
                                                                    className="me-4"
                                                                    label="Load Coil Sensitivities"
                                                                    disabled
                                                                />
                                                                <Form.Check
                                                                    type="radio"
                                                                    name="b1-weighted-selection"
                                                                    id="calclulate-coil-sensitivities"
                                                                    label="Calculate Coil Sensitivities"
                                                                    className="me-4"
                                                                    defaultChecked={true}
                                                                />

                                                                <DropdownSelect
                                                                    label="Coil sensitivities calculation method"
                                                                    values={["Internal Reference"]}
                                                                    defaultSelected={true}  // This will make "Internal Reference" selected by default
                                                                    onChange={(value) => console.log(value)} // Handle the selected value as needed
                                                                />

                                                            </div>

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <RadioButtonGroup
                                                                groupLabel="Object Masking"
                                                                values={[
                                                                    "Do Not Mask Coil Sensitivities Maps",
                                                                    "Use Percent Threshold of the Max Value",
                                                                    "ESPIRIT",
                                                                    "Predefined Mask"
                                                                ]}
                                                                name="objectMaskingSelection"
                                                                defaultChecked={true} // This will select the first value by default
                                                            />


                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <div className="d-flex align-items-center mb-5">
                                                                <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="me-4" defaultChecked />
                                                                <Form.Check type="checkbox" id="save-coil-sensitivities" label="Save Coil Sensitivities" defaultChecked />
                                                            </div>

                                                            <div className="button-container mt-4">
                                                                <Button
                                                                    variant="outline-primary"
                                                                    className="custom-purple-outline-button">Queue Job
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}
                                                    {selectedReconstruction === "sense" && (
                                                        <>
                                                            <div className="d-flex align-items-center mb-5 mt-5">
                                                                <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                                <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                            </div>

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <div className="d-flex align-items-center mb-5">
                                                                <Form.Check
                                                                    type="radio"
                                                                    name="b1-weighted-selection"
                                                                    id="load-coil-sensitivities"
                                                                    className="me-4"
                                                                    label="Load Coil Sensitivities"
                                                                    disabled
                                                                />
                                                                <Form.Check
                                                                    type="radio"
                                                                    name="b1-weighted-selection"
                                                                    id="calclulate-coil-sensitivities"
                                                                    label="Calculate Coil Sensitivities"
                                                                    className="me-4"
                                                                    defaultChecked={true}
                                                                />

                                                                <DropdownSelect
                                                                    label="Coil sensitivities calculation method"
                                                                    values={["Internal Reference"]}
                                                                    defaultSelected={true}  // This will make "Internal Reference" selected by default
                                                                    onChange={(value) => console.log(value)} // Handle the selected value as needed
                                                                />

                                                            </div>

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <RadioButtonGroup
                                                                groupLabel="Object Masking"
                                                                values={[
                                                                    "Do Not Mask Coil Sensitivities Maps",
                                                                    "Use Percent Threshold of the Max Value",
                                                                    "ESPIRIT",
                                                                    "Predefined Mask"
                                                                ]}
                                                                name="objectMaskingSelection"
                                                                defaultChecked={true} // This will select the first value by default
                                                            />


                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <Form.Check type="checkbox" id="decimate-data" label="Decimate Data" className="me-4" />

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <div className="d-flex align-items-center mb-5">
                                                                <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="me-4" defaultChecked />
                                                                <Form.Check type="checkbox" id="save-coil-sensitivities" label="Save Coil Sensitivities" className="me-4" defaultChecked />
                                                                <Form.Check type="checkbox" id="save-g-factor" label="Save g Factor" defaultChecked />
                                                            </div>

                                                            <div className="button-container mt-4">
                                                                <Button
                                                                    variant="outline-primary"
                                                                    className="custom-purple-outline-button">Queue Job
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                                {selectedMethod === "multiple-replica" && (
                                    <>
                                        {/* Radio Buttons for Reconstruction Selection */}
                                        <div className="d-flex align-items-center justify-content-between margin-right-radio">
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaReconstruction"
                                                id="root-sum-of-squares"
                                                label="Root Sum of Squares"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaReconstruction"
                                                id="espirit"
                                                label="ESPIRIT"
                                                disabled
                                            />
                                        </div>

                                        {/* Conditional Rendering of Reconstruction Content */}
                                        {selectedMultipleReplicaReconstruction && (
                                            <>
                                                <div>
                                                    {selectedMultipleReplicaReconstruction === "root-sum-of-squares" && (
                                                        <>
                                                            <div className="d-flex align-items-center mt-5">
                                                                <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                                <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                            </div>

                                                            <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="mt-5 mb-5" defaultChecked />
                                                            <div className="button-container mt-4">
                                                                <Button
                                                                    variant="outline-primary"
                                                                    className="custom-purple-outline-button">Queue Job
                                                                </Button>
                                                            </div>
                                                        </>
                                                    )}
                                                    {selectedMultipleReplicaReconstruction === "espirit" && (
                                                        <>
                                                        </>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                                {selectedMethod === "pseudo-multiple-replica" && (
                                    <>
                                        <NumberInput
                                            label="Number of Pseudo Replica:"
                                            min={2}
                                            max={128}
                                            step={1}
                                            defaultValue={20}
                                        />

                                        <hr className="light-hr mx-auto mb-4 mt-4"></hr>

                                        {/* Radio Buttons for Multiple Replica Reconstruction Selection */}
                                        <div className="d-flex align-items-center justify-content-between margin-right-radio">
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="root-sum"
                                                label="Root of Sum Squares"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="b1-weighted"
                                                label="B1 Weighted"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="sense"
                                                label="SENSE"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="grappa"
                                                label="GRAPPA"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="espirit"
                                                label="ESPIRIT"
                                                disabled
                                            />
                                        </div>

                                        {/* Conditional Rendering of Reconstruction Content */}
                                        {selectedMultipleReplicaReconstruction && (
                                            <>
                                                {selectedMultipleReplicaReconstruction === "root-sum" && (
                                                    <>
                                                        <div className="d-flex align-items-center mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="mt-5 mb-5" defaultChecked />

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "b1-weighted" && (
                                                    <>
                                                        <div className="d-flex align-items-center mb-5 mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="load-coil-sensitivities"
                                                                className="me-4"
                                                                label="Load Coil Sensitivities"
                                                                disabled
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="calclulate-coil-sensitivities"
                                                                label="Calculate Coil Sensitivities"
                                                                className="me-4"
                                                                defaultChecked={true}
                                                            />

                                                            <DropdownSelect
                                                                label="Coil sensitivities calculation method"
                                                                values={["Internal Reference"]}
                                                                defaultSelected={true}
                                                                onChange={(value) => console.log(value)}
                                                            />
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <RadioButtonGroup
                                                            groupLabel="Object Masking"
                                                            values={[
                                                                "Do Not Mask Coil Sensitivities Maps",
                                                                "Use Percent Threshold of the Max Value",
                                                                "ESPIRIT",
                                                                "Predefined Mask"
                                                            ]}
                                                            name="objectMaskingSelection"
                                                            defaultChecked={true}
                                                        />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="me-4" defaultChecked />
                                                            <Form.Check type="checkbox" id="save-coil-sensitivities" label="Save Coil Sensitivities" defaultChecked />
                                                        </div>

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "sense" && (
                                                    <>
                                                        <div className="d-flex align-items-center mb-5 mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="load-coil-sensitivities"
                                                                className="me-4"
                                                                label="Load Coil Sensitivities"
                                                                disabled
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="calclulate-coil-sensitivities"
                                                                label="Calculate Coil Sensitivities"
                                                                className="me-4"
                                                                defaultChecked={true}
                                                            />

                                                            <DropdownSelect
                                                                label="Coil sensitivities calculation method"
                                                                values={["Internal Reference"]}
                                                                defaultSelected={true}
                                                                onChange={(value) => console.log(value)}
                                                            />
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <RadioButtonGroup
                                                            groupLabel="Object Masking"
                                                            values={[
                                                                "Do Not Mask Coil Sensitivities Maps",
                                                                "Use Percent Threshold of the Max Value",
                                                                "ESPIRIT",
                                                                "Predefined Mask"
                                                            ]}
                                                            name="objectMaskingSelection"
                                                            defaultChecked={true}
                                                        />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <Form.Check type="checkbox" id="decimate-data" label="Decimate Data" className="me-4" />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="me-4" defaultChecked />
                                                            <Form.Check type="checkbox" id="save-coil-sensitivities" label="Save Coil Sensitivities" className="me-4" defaultChecked />
                                                            <Form.Check type="checkbox" id="save-g-factor" label="Save g Factor" defaultChecked />
                                                        </div>

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "grappa" && (
                                                    <>
                                                        <div className="d-flex align-items-center mb-5 mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <NumberInput
                                                            label="Kernel Size 1:"
                                                            min={2}
                                                            max={128}
                                                            step={1}
                                                            defaultValue={3}
                                                        />

                                                        <NumberInput
                                                            label="Kernel Size 2:"
                                                            min={2}
                                                            max={128}
                                                            step={1}
                                                            defaultValue={4}
                                                        />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <Form.Check type="checkbox" id="decimate-data" label="Decimate Data" className="me-4" />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" defaultChecked />
                                                        </div>

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "espirit" && (
                                                    <>

                                                    </>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                                {selectedMethod === "generalized-pseudo-replica" && (
                                    <>
                                        <NumberInput
                                            label="Number of Pseudo Replica:"
                                            min={2}
                                            max={128}
                                            step={1}
                                            defaultValue={3}
                                        />

                                        <NumberInput
                                            label="Cubic VOI Size (Length of Side in Pixels):"
                                            min={2}
                                            max={128}
                                            step={1}
                                            defaultValue={3}
                                        />

                                        <hr className="light-hr mx-auto mb-4 mt-4"></hr>

                                        {/* Radio Buttons for Multiple Replica Reconstruction Selection */}
                                        <div className="d-flex align-items-center justify-content-between margin-right-radio">
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="root-sum"
                                                label="Root of Sum Squares"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="b1-weighted"
                                                label="B1 Weighted"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="sense"
                                                label="SENSE"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="grappa"
                                                label="GRAPPA"
                                                onChange={handleMultipleReplicaReconstructionSelection}
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="multipleReplicaSelection"
                                                id="espirit"
                                                label="ESPIRIT"
                                                disabled
                                            />
                                        </div>

                                        {/* Conditional Rendering of Reconstruction Content */}
                                        {selectedMultipleReplicaReconstruction && (
                                            <>
                                                {selectedMultipleReplicaReconstruction === "root-sum" && (
                                                    <>
                                                        <div className="d-flex align-items-center mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="mt-5 mb-5" defaultChecked />

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "b1-weighted" && (
                                                    <>
                                                        <div className="d-flex align-items-center mb-5 mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="load-coil-sensitivities"
                                                                className="me-4"
                                                                label="Load Coil Sensitivities"
                                                                disabled
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="calclulate-coil-sensitivities"
                                                                label="Calculate Coil Sensitivities"
                                                                className="me-4"
                                                                defaultChecked={true}
                                                            />

                                                            <DropdownSelect
                                                                label="Coil sensitivities calculation method"
                                                                values={["Internal Reference"]}
                                                                defaultSelected={true}
                                                                onChange={(value) => console.log(value)}
                                                            />
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <RadioButtonGroup
                                                            groupLabel="Object Masking"
                                                            values={[
                                                                "Do Not Mask Coil Sensitivities Maps",
                                                                "Use Percent Threshold of the Max Value",
                                                                "ESPIRIT",
                                                                "Predefined Mask"
                                                            ]}
                                                            name="objectMaskingSelection"
                                                            defaultChecked={true}
                                                        />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="me-4" defaultChecked />
                                                            <Form.Check type="checkbox" id="save-coil-sensitivities" label="Save Coil Sensitivities" defaultChecked />
                                                        </div>

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "sense" && (
                                                    <>
                                                        <div className="d-flex align-items-center mb-5 mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="load-coil-sensitivities"
                                                                className="me-4"
                                                                label="Load Coil Sensitivities"
                                                                disabled
                                                            />
                                                            <Form.Check
                                                                type="radio"
                                                                name="b1-weighted-selection"
                                                                id="calclulate-coil-sensitivities"
                                                                label="Calculate Coil Sensitivities"
                                                                className="me-4"
                                                                defaultChecked={true}
                                                            />

                                                            <DropdownSelect
                                                                label="Coil sensitivities calculation method"
                                                                values={["Internal Reference"]}
                                                                defaultSelected={true}
                                                                onChange={(value) => console.log(value)}
                                                            />
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <RadioButtonGroup
                                                            groupLabel="Object Masking"
                                                            values={[
                                                                "Do Not Mask Coil Sensitivities Maps",
                                                                "Use Percent Threshold of the Max Value",
                                                                "ESPIRIT",
                                                                "Predefined Mask"
                                                            ]}
                                                            name="objectMaskingSelection"
                                                            defaultChecked={true}
                                                        />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <Form.Check type="checkbox" id="decimate-data" label="Decimate Data" className="me-4" />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" className="me-4" defaultChecked />
                                                            <Form.Check type="checkbox" id="save-coil-sensitivities" label="Save Coil Sensitivities" className="me-4" defaultChecked />
                                                            <Form.Check type="checkbox" id="save-g-factor" label="Save g Factor" defaultChecked />
                                                        </div>

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "grappa" && (
                                                    <>
                                                        <div className="d-flex align-items-center mb-5 mt-5">
                                                            <Form.Check type="checkbox" id="no-flip-angle-correction" label="No Flip Angle Correction" className="me-4" />
                                                            <Button variant="primary" className="custom-purple-button">Choose FA Map</Button>
                                                        </div>

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <NumberInput
                                                            label="Kernel Size 1:"
                                                            min={2}
                                                            max={128}
                                                            step={1}
                                                            defaultValue={3}
                                                        />

                                                        <NumberInput
                                                            label="Kernel Size 2:"
                                                            min={2}
                                                            max={128}
                                                            step={1}
                                                            defaultValue={4}
                                                        />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <Form.Check type="checkbox" id="decimate-data" label="Decimate Data" className="me-4" />

                                                        <hr className="light-hr mx-auto mb-5 mt-5"></hr>

                                                        <div className="d-flex align-items-center mb-5">
                                                            <Form.Check type="checkbox" id="save-mat-file" label="Save .mat file" defaultChecked />
                                                        </div>

                                                        <div className="button-container mt-4">
                                                            <Button variant="outline-primary" className="custom-purple-outline-button">Queue Job</Button>
                                                        </div>
                                                    </>
                                                )}

                                                {selectedMultipleReplicaReconstruction === "espirit" && (
                                                    <>

                                                    </>
                                                )}
                                            </>
                                        )}

                                    </>
                                )}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
            )}
        </>
    );
};

export default SNRAnalysisContent;