import React, { useEffect, useState } from 'react';
import { CompanyTable } from '../../components/company/CompanyTable';
import { companiesData } from "../../data/compaiesData.js"; 

export function Company() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setTimeout(() => {
          setCompanies(companiesData);
          console.log("Data company: ", companiesData);
          setLoading(false);
        }, 1000); 
      } catch (error) {
        console.error('Failed to fetch companies:', error);
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
