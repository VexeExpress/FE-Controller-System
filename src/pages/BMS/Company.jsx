import React, { useEffect, useState } from 'react';
import { CompanyTable } from '../../components/company/CompanyTable';

export function Company() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

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

  return (
    <div>
      <div className="partner-header">
        DANH SÁCH ĐỐI TÁC
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CompanyTable companies={companies} />
      )}
    </div>
  );
}
