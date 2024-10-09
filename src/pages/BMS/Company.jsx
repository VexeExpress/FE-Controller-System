import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AddPartnerModal } from '../../components/company/AddPartnerModal';
import { CompanyTable } from '../../components/company/CompanyTable';
import { getParter } from '../../services/companyService';

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
            <div class="partner-list">
                <h5>DANH SÁCH ĐỐI TÁC</h5>
                <Button variant="primary" onClick={handleShow}>Thêm đối tác</Button>
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
