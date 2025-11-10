import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Stats() {
  const data = [
    { title: "3 Bulan", desc: "Durasi Program" },
    { title: "6+", desc: "Posisi Tersedia" },
    { title: "100%", desc: "Gratis & Bersertifikat" },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center g-4">
          {data.map((item, i) => (
            <Col md={4} key={i}>
              <Card className="border-0 shadow-sm rounded-4 p-4">
                <h3 style={{ color: "#ff7b00" }}>{item.title}</h3>
                <p className="text-muted mb-0">{item.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Stats;
