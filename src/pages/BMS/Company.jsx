import React, { useEffect, useState } from 'react';
import { CompanyTable } from '../../components/company/CompanyTable';
import  '../../styles/css/company.css'
export function Company() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [sortOption, setSortOption] = useState('name_asc'); // Lựa chọn sắp xếp mặc định

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/company/getAllCompany');
        const result = await response.json();
        setCompanies(result.data.companiesData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  // Hàm sắp xếp dựa trên lựa chọn
  const sortedCompanies = [...companies].sort((a, b) => {
    const [criteria, order] = sortOption.split('_'); // Tách lựa chọn thành tiêu chí và thứ tự
    const isAsc = order === 'asc';

    if (criteria === 'name') {
      return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (criteria === 'createdAt') {
      return isAsc
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  return (
    <div>
      <div className="partner-header">DANH SÁCH ĐỐI TÁC</div>

      <div className="sort-controls">
       
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name_asc">Tên tăng dần</option>
          <option value="name_desc">Tên giảm dần</option>
          <option value="createdAt_asc">Ngày tạo tăng dần</option>
          <option value="createdAt_desc">Ngày tạo giảm dần</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CompanyTable companies={sortedCompanies} />
      )}
    </div>
  );
}
