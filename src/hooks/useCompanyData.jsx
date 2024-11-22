import { useState, useEffect } from "react";
import { fetchCompanyData } from "../services/companyService.js"; 

export function useCompanyDataDetail(id) {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        setLoading(true);
        const data = await fetchCompanyData(id); 
        setCompany(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getCompanyData();
  }, [id]);

  return { company, loading, error };
}
