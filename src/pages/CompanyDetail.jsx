import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
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
        <Spinner animation="border" variant="primary" />
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <Container fluid>
      {/* Tiêu đề tên công ty */}
      <Row className="mb-4">
        <Col className="text-center">
          <h1>{company.name}</h1> {/* Ensure companies is not null */}
        </Col>
      </Row>

      {/* Các thông tin tổng quan */}
      <Row className="mb-4 justify-content-between">
        <Col md="2">
          <Card bg="danger" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số nhân viên</Card.Title>
              <Card.Text>{company.employees}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="success" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số tài xế</Card.Title>
              <Card.Text>{company.drivers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="primary" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số xe</Card.Title>
              <Card.Text>{company.vehicles}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="info" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số chuyến đi</Card.Title>
              <Card.Text>{company.trips}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="warning" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng vé bán ra</Card.Title>
              <Card.Text>{company.ticketsSold}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Biểu đồ */}
      <Row className="mb-4">
        <Col md={3}>
          <PieChart vehicleTripData={company.vehicleTrips} />
        </Col>
        <Col md={9}>
          <RevenueChart revenueData={company.revenue} />
        </Col>
      </Row>

      {/* Thông báo và chuyến đi sắp tới */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Thông báo</Card.Title>
              <ul>
                <li>Xe A cần bảo trì</li>
                <li>Chuyến B bị hủy</li>
                <li>Xe C gặp sự cố</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Chuyến đi sắp tới</Card.Title>
              <ul>
                <li>Chuyến 1: 10h00 - Hà Nội đi Đà Nẵng</li>
                <li>Chuyến 2: 12h00 - Sài Gòn đi Nha Trang</li>
                <li>Chuyến 3: 14h00 - Hải Phòng đi Vinh</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyDetails;