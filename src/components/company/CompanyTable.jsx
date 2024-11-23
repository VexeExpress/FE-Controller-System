import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CompanyTable({ companies }) {
    const navigate = useNavigate();

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
                        <td>
                            <button onClick={() => navigate(`details/${company.id}`)}>
                                Xem chi tiết
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
