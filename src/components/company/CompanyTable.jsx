import React from 'react';

export function CompanyTable({ companies }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên công ty</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company) => (
                    <tr key={company.id}>
                        <td>{company.id}</td>
                        <td>{company.name}</td>
                        <td>{company.phone}</td>
                        <td>{company.address}</td>
                        <td>{company.createdAt}</td>
                        <td>{company.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
