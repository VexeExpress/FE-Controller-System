import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/css/dashboard.css';

export function Dashboard() {
  const doanhThuThang = [
    30000000, // Tháng 1
    50000000, // Tháng 2
    40000000, // Tháng 3
    60000000, // Tháng 4
    70000000, // Tháng 5
    90000000, // Tháng 6
    100000000, // Tháng 7
    85000000, // Tháng 8
    75000000, // Tháng 9
    95000000, // Tháng 10
    110000000, // Tháng 11
    200000000  // Tháng 12
  ];

  const tongDoanhThu = 300000000; // 1 tỷ

  const calculateBarHeight = (doanhThu, tongDoanhThu) => {
    return (doanhThu / tongDoanhThu) * 100; 
  };

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
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Biểu đồ doanh thu</Card.Title>
              <div className="chart-container">
                {doanhThuThang.map((doanhThu, index) => {
                  const height = calculateBarHeight(doanhThu, tongDoanhThu);
                  return (
                    <div className="bar" key={index} style={{ height: `${height}%` }}>
                      <div className="value">{doanhThu.toLocaleString()}</div>
                      Tháng {index + 1}
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Biểu đồ số chuyến đi</Card.Title>
              <div style={{ height: '300px', backgroundColor: '#f0f0f0' }}></div>
            </Card.Body>
          </Card>
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

export default Dashboard;
