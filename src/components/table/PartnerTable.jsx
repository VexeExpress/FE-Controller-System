import React from 'react';
import { Button } from 'react-bootstrap';
const PartnerTable = ({ partners, onDelete }) => {
    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xoá đối tác này không?')) {
            onDelete(id);
        }
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên công ty</th>
                    <th>Điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th>Tuỳ chọn</th>
                </tr>
            </thead>
            <tbody>
                {partners.map((partner, index) => (
                    <tr key={partner.id}>
                        <td>{index + 1}</td>
                        <td>{partner.company_name}</td>
                        <td>{partner.phone_number}</td>
                        <td>{partner.address}</td>
                        <td>{partner.created_at}</td>
                        <td>{partner.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
                        <td>
                            <Button variant="outline-primary" className='mr-2'>Sửa</Button>
                            <Button variant="outline-danger" onClick={() => handleDelete(partner.id)}>
                                Xoá
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default PartnerTable;

