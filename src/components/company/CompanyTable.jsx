import React from 'react';
import { Table, Button } from 'react-bootstrap';

export function CompanyTable({ companies }) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên công ty</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {companies.length === 0 ? ( 
                    <tr>
                        <td colSpan={7} style={{ textAlign: 'center' }}>Không có công ty nào để hiển thị.</td>
                    </tr>
                ) : (
                    companies.map((company, index) => ( 
                        <tr key={company.id}>
                            <td>{index + 1}</td> 
                            <td>{company.name}</td>
                            <td>{company.phone}</td>
                            <td>{company.address}</td>
                            <td>{company.createdAt}</td> 
                            <td>{company.status}</td> 
                            <td>
                                <Button variant="info" title='Quản lý'>
                                    <i className="bi bi-database"></i>
                                </Button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
}
