import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import RevenueChart from '../../components/Revenuechart'; 
import PieChart from '../../components/Piechart'; 

export function CompanyDetails() {
  const [revenueMonthData, setRevenueMonthData] = useState([]);
  const [vehicleTripData, setVehicleTripData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const revenueData = [
          30000000,
          50000000,
          40000000,
          60000000,
          70000000,
          90000000,
          100000000,
          85000000,
          75000000,
          95000000,
          110000000,
          100000000
        ];

        const vehicleData = [
          { vehicleName: 'Xe A', tripCount: 10 },
          { vehicleName: 'Xe B', tripCount: 15 },
          { vehicleName: 'Xe C', tripCount: 5 },
        ];

        setRevenueMonthData(revenueData);
        setVehicleTripData(vehicleData);
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row className="mb-4 justify-content-between">
        <Col md="2">
          <Card bg="danger" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số nhân viên</Card.Title>
              <Card.Text>40</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="success" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số tài xế</Card.Title>
              <Card.Text>20</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="primary" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số xe</Card.Title>
              <Card.Text>50</Card.Text>
            </Card.Body>
          </Card>
        </Col> 
        <Col md="2">
          <Card bg="info" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng số chuyến đi</Card.Title>
              <Card.Text>120</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="2">
          <Card bg="warning" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Tổng vé bán ra</Card.Title>
              <Card.Text>350</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={3}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <PieChart vehicleTripData={vehicleTripData} />
          )}
        </Col>
        <Col md={9}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Đang tải dữ liệu...</p>
            </div>
          ) : (
            <RevenueChart revenueData={revenueMonthData} />
          )}
        </Col>
      </Row>

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
