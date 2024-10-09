import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AddPartnerModal } from '../../components/company/AddPartnerModal';
import { CompanyTable } from '../../components/company/CompanyTable';
import { getParter } from '../../services/companyService';
import '../../styles/css/company.css'
export function Company() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getParter();
                setCompanies(data);
                console.log("Data company: " + data)
            } catch (error) {
                console.error('Failed to fetch companies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);
    return (
        <>
            <div class="partner-header">
                <span class="partner-title">DANH SÁCH ĐỐI TÁC</span>
                <button class="btn-add-partner" onClick={handleShow}>Thêm đối tác</button>
            </div>


            {loading ? (
                <p>Loading...</p>
            ) : (
                <CompanyTable companies={companies} />
            )}

            <AddPartnerModal show={show} handleClose={handleClose} />


        </>
    );
};
