import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CompanyDetails.css";
import RevenueChart from "../components/RevenueChart";
import PieChart from "../components/Piechart";

export function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/company/getCompanyByID/${id}`);
        const result = await response.json();
        setCompany(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchCompany();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>{company.name}</h1>
      </div>

      <div className="stats">
        <div className="card danger">
          <h3>Tổng số nhân viên</h3>
          <p>{company.employees}</p>
        </div>
        <div className="card success">
          <h3>Tổng số tài xế</h3>
          <p>{company.drivers}</p>
        </div>
        <div className="card primary">
          <h3>Tổng số xe</h3>
          <p>{company.vehicles}</p>
        </div>
        <div className="card info">
          <h3>Tổng số chuyến đi</h3>
          <p>{company.trips}</p>
        </div>
        <div className="card warning">
          <h3>Tổng vé bán ra</h3>
          <p>{company.ticketsSold}</p>
        </div>
      </div>

      <div className="charts">
        <div className="pie-chart">
          <PieChart vehicleTripData={company.vehicleTrips} />
        </div>
        <div className="revenue-chart">
          <RevenueChart revenueData={company.revenue} />
        </div>
      </div>


    </div>
  );
}

export default CompanyDetails;
