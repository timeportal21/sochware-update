import React from "react";
import "./_custom_modal.scss";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaCloudUploadAlt } from "react-icons/fa";

function CustomModal({ modalData, toggleModal, handleClose, customButton }) {
    return (
        <Modal
            size="lg"
            show={toggleModal}
            onHide={handleClose}
            dialogClassName="apply-job"
        >
            <Modal.Header closeButton>
                <Modal.Title>Applying for {modalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="job-description">
                        <h2>Job Description</h2>
                        <p>{modalData.description}</p>
                    </div>
                    <div className="requirements">
                        <h2>Requirements</h2>
                        <p>{modalData.requirements}</p>
                    </div>
                    <div className="benefits">
                        <h2>Benefits</h2>
                        <ul>
                            <li>competitive salary</li>
                            <li>2 days weekend off</li>
                        </ul>
                    </div>
                    <div className="upload-button">
                        <div className="form-group">
                            <label
                                htmlFor="file-upload"
                                className={`custom-button custom-btn-sm mr-2 ${customButton} `}
                            >
                                <FaCloudUploadAlt /> Upload Your CV
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                name="uploadcv"
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="file-upload"
                                className={`custom-button custom-btn-sm mr-2 ${customButton} `}
                            >
                                <FaCloudUploadAlt /> Upload Your Cover Letter
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                name="uploadcv"
                            />
                        </div>
                        {/* <Button
                            className={`custom-button custom-btn-sm mr-2 ${customButton} `}
                            size="sm"
                        >
                            Learn More
                        </Button> */}
                        {/* <button className={}>
                            Upload Your CV
                        </button> */}
                        {/* <button className="btn btn-primary">
                            Upload Your Cover Letter
                        </button> */}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Apply
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
