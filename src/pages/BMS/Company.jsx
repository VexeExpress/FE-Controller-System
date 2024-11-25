import React, { useEffect, useState } from 'react';
import { CompanyTable } from '../../components/company/CompanyTable';

export function Company() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    company.phone.toLowerCase().includes(searchTerm.toLowerCase()) || 
    company.address.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div>
      <div className="partner-header">DANH SÁCH ĐỐI TÁC</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên công ty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CompanyTable companies={filteredCompanies} />
      )}
    </div>
  );
}
