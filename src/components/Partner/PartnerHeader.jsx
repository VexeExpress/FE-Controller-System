import React from 'react';
export function PartnerHeader({ handleShow }) {
    return (
        <div className="partner-header">
            <span className="partner-title">DANH SÁCH ĐỐI TÁC</span>
            <button className="btn-add-partner" onClick={handleShow}>Thêm đối tác</button>
        </div>
    );
}