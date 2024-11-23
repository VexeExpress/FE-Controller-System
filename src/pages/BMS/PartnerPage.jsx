import React, { useState, useEffect } from 'react';
import { PartnerTable } from '../../components/Partner/PartnerTable';
import { PartnerModal } from '../../components/Partner/PartnerModal';
import '../../styles/css/company.css'
import { getAllPartner } from '../../services/companyService';

export function PartnerPage() {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [companies, setCompanies] = useState([]); 
    useEffect(() => {
        const fetchPartner = async () => {
            try {
                const data = await getAllPartner();
                setCompanies(data); 
                console.log(data);
            } catch (error) {
                console.error('Error fetching partner:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchPartner();
    }, []);



    const handleShowModal = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="partner-header">
                <span className="partner-title">DANH SÁCH ĐỐI TÁC</span>
                <button className="btn-add-partner" onClick={handleShowModal}>Thêm đối tác</button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <PartnerTable companies={companies} />
            )}

            <PartnerModal show={show} handleClose={handleClose} />
        </>
    );
}
