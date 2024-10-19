
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addPartner } from '../../services/companyService';

export function PartnerModal({ show, handleClose }) {
    const [formData, setFormData] = useState({
        companyName: '',
        phoneNumber: '',
        address: '',
        status: true, 
    });
    

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleStatusChange = (e) => {
        setFormData({
            ...formData,
            status: e.target.value === 'true',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPartner(formData);
            console.log('Form data submitted:', formData);
            handleClose();
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Thêm đối tác</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="companyName">
                        <Form.Label>Tên công ty</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên công ty"
                            value={formData.companyName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phoneNumber">
                        <Form.Label>Số điện thoại liên hệ</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Nhập số điện thoại"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập địa chỉ"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label>Trạng thái</Form.Label>
                        <Form.Select value={formData.status} onChange={handleStatusChange}>
                            <option value="true">Hoạt động</option>
                            <option value="false">Ngưng hoạt động</option>
                        </Form.Select>
                    </Form.Group>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" type="submit">
                            Lưu lại
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
