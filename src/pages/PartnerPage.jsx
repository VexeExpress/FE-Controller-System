import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import PartnerTable from '../components/table/PartnerTable';
import  PartnerModal  from '../components/modal/PartnerModal';
import { createPartner, getPartner, deletePartner } from '../services/partnerService';
export function PartnerPage() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [partnerData, setPartnerData] = useState({
        company_name: '',
        phone_number: '',
        address: '',
        status: true,
    });
    const [partners, setPartners] = useState([]);
    
    const handleDelete = async (id) => {
        console.log('Delete partner with ID:', id);
        try {
            await deletePartner(id);
            console.log('Delete partner successfully');
            setPartners(partners.filter(partner => partner.id !== id));
        } catch (error) {
            console.error('Error deleting partner:', error);
        }
    };
    // Lấy danh sách đối tác
    useEffect(() => {
        const getPartners = async () => {
            try {
                const data = await getPartner();
                setPartners(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching partners:', error);
                setLoading(false);
            }
        };

        getPartners();
    }, []);
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
        console.log('Data send to server:', partnerData);
        try {
            const newPartner = await createPartner(partnerData);
            console.log('Data from server:', newPartner);
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
            <PartnerTable partners={partners} onDelete={handleDelete}/>
        )}

    </>);
}
