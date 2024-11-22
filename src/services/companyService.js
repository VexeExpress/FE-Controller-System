import { companiesData } from "../data/compaiesData.js"; 

export const fetchCompanyData = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const selectedCompany = companiesData.find((company) => company.id === parseInt(id));
        if (selectedCompany) {
          resolve(selectedCompany);
        } else {
          reject("Không tìm thấy công ty");
        }
      }, 1000); 
    });
  };
  