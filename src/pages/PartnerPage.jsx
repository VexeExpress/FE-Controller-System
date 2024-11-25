import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { PartnerTable } from '../components/table/PartnerTable';
import { PartnerModal } from '../components/modal/PartnerModal';
import { createPartner } from '../services/partnerService';
export function PartnerPage() {
    const [showModal, setShowModal] = useState(false);
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [partnerData, setPartnerData] = useState({
        companyName: '',
        phoneNumber: '',
        address: '',
        status: true,
    });
    // Mở modal
    const handleShowModal = () => setShowModal(true);
    // Đóng modal
    const handleCloseModal = () => setShowModal(false);
    // Cập nhật thông tin các input trong form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPartnerData({ ...partnerData, [name]: value });
    };
    // Gửi thông tin để tạo đối tác mới
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newPartner = await createPartner(partnerData);
            setPartners([...partners, newPartner]); // Cập nhật danh sách đối tác
            handleCloseModal(); // Đóng modal sau khi thêm
        } catch (error) {
            console.error('Error creating partner:', error);
        }
    };
    return (<>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="h4 fw-bold">DANH SÁCH ĐỐI TÁC</span>
            <Button className="btn btn-primary" onClick={handleShowModal}>
                Thêm đối tác
            </Button>
        </div>
        
        <PartnerModal
            show={showModal}
            handleClose={handleCloseModal}
            handleSubmit={handleSubmit}
            partnerData={partnerData}
            handleInputChange={handleInputChange}
        />

        {loading ? (
            <p>Loading...</p>
        ) : (
            <PartnerTable partners={partners} />
        )}

    </>);
}
