import React, { useState, useEffect } from 'react';
import { PartnerHeader } from '../../components/Partner/PartnerHeader';
import { PartnerTable } from '../../components/Partner/PartnerTable';
import { PartnerModal } from '../../components/Partner/PartnerModal';
import { getPartner } from '../../services/companyService';
import '../../styles/css/company.css'

export function PartnerPage() {
    const [loading, setLoading] = useState(true);  
    const [show, setShow] = useState(false);  
    const [companies, setCompanies] = useState([  
        {
            id: 1,
            name: "Công ty 1",
            phone: "0877717575",
            address: "San Francisco, CA",
            createdAt: "2024-08-01",  
            status: true
        },
        {
            id: 2,
            name: "Công ty 2",
            phone: "0397892603",
            address: "Austin, TX",
            createdAt: "2024-07-28",  
            status: true
        },
    ]);
    useEffect(() => {
       
        setTimeout(() => {
            setLoading(false); 
        }, 1000);  
    }, []);
    
    

    const handleShow = () => setShow(true); 
    const handleClose = () => setShow(false);  

    return (
        <>
            <PartnerHeader handleShow={handleShow} /> 
            
            {loading ? (
                <p>Loading...</p> 
            ) : (
                <PartnerTable companies={companies} /> 
            )}

            <PartnerModal show={show} handleClose={handleClose} />  
        </>
    );
}
