import React from 'react';
export function PartnerTable({ companies }) {
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
                {companies.map((company, index) => (
                    <tr key={company.id}>
                        <td>{index + 1}</td>
                        <td>{company.name}</td>
                        <td>{company.phone}</td>
                        <td>{company.address}</td>
                        <td>{company.createdAt}</td>
                        <td>{company.status ? "Hoạt động" : "Ngưng hoạt động"}</td>
                        <td>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
