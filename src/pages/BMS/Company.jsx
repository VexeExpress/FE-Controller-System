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
        setCompanies(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  const searchCompanies = async () => {
    if (searchTerm) {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/company/search?name=${searchTerm}`);
        const result = await response.json();
        setCompanies(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    } else {
      const response = await fetch('http://localhost:3000/api/company/getAllCompany');
      const result = await response.json();
      setCompanies(result.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="partner-header">DANH SÁCH ĐỐI TÁC</div>

      <input
        type="text"
        placeholder="Tìm kiếm theo tên công ty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchCompanies}>Tìm kiếm</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CompanyTable companies={companies} />
      )}
    </div>
  );
}
