import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
const PartnerModal = ({ show, handleClose, handleSubmit, partnerData, handleInputChange }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm Đối Tác</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="company_name">
                        <Form.Label>Tên Công Ty</Form.Label>
                        <Form.Control
                            type="text"
                            name="company_name"
                            value={partnerData.company_name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="phone_number" className="mt-3">
                        <Form.Label>Số Điện Thoại</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone_number"
                            value={partnerData.phone_number}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="address" className="mt-3">
                        <Form.Label>Địa Chỉ</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={partnerData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="status" className="mt-3">
                        <Form.Label>Trạng Thái</Form.Label>
                        <Form.Check
                            type="checkbox"
                            name="status"
                            label="Hoạt động"
                            checked={partnerData.status}
                            onChange={(e) => handleInputChange({
                                target: { name: 'status', value: e.target.checked }
                            })}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-4">Lưu</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
export default PartnerModal;
