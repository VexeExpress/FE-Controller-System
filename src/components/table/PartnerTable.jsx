import React from 'react';
import { Button } from 'react-bootstrap';
export function PartnerTable({ partners }) {
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
                {partners.map((company, index) => (
                    <tr key={company.id}>
                        <td>{index + 1}</td>
                        <td>{company.company_name}</td>
                        <td>{company.phone_number}</td>
                        <td>{company.address}</td>
                        <td>{company.created_at}</td>
                        <td>{company.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
                        <td>
                            <Button variant="outline-primary" className='mr-2'>Sửa</Button>
                            <Button variant="outline-danger">Xoá</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
