// src/pages/Statistics/Statistics.jsx
import React, { useState } from 'react';
import { Card, Row, Col, ProgressBar, Table, ButtonGroup, Button } from 'react-bootstrap';
import { FaUserGraduate, FaCheckCircle, FaTimesCircle, FaUsers, FaUserShield, FaUserTie } from 'react-icons/fa';

const etudiantsStats = {
  totalStudents: 120,
  activeStudents: 95,
  inactiveStudents: 25,
  repartitionByLevel: {
    'Licence professionnelle': 70,
    'Master Ingénieur': 50,
  },
  repartitionByMention: {
    STNPA: 45,
    STI: 40,
    STGC: 35,
  },
};

const utilisateursStats = {
  totalUsers: 80,
  admins: 10,
  enseignants: 30,
  etudiants: 40,
  repartitionByRole: {
    Admin: 10,
    Enseignant: 30,
    Étudiant: 40,
  },
};

export default function Statistics() {
  const [type, setType] = useState('etudiants'); // ou 'utilisateurs'

  // Pour étudiants
  const {
    totalStudents,
    activeStudents,
    inactiveStudents,
    repartitionByLevel,
    repartitionByMention,
  } = etudiantsStats;

  const percentActive = ((activeStudents / totalStudents) * 100).toFixed(0);
  const percentInactive = ((inactiveStudents / totalStudents) * 100).toFixed(0);

  // Pour utilisateurs
  const {
    totalUsers,
    admins,
    enseignants,
    etudiants,
    repartitionByRole,
  } = utilisateursStats;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Statistiques {type === 'etudiants' ? 'des étudiants' : 'des utilisateurs'}</h2>

      <ButtonGroup className="mb-4">
        <Button
          variant={type === 'etudiants' ? 'primary' : 'outline-primary'}
          onClick={() => setType('etudiants')}
        >
          Étudiants
        </Button>
        <Button
          variant={type === 'utilisateurs' ? 'primary' : 'outline-primary'}
          onClick={() => setType('utilisateurs')}
        >
          Utilisateurs
        </Button>
      </ButtonGroup>

      {type === 'etudiants' ? (
        <>
          <Row className="mb-4">
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaUserGraduate size={40} className="mb-2 text-primary" />
                  <Card.Title>Total étudiants</Card.Title>
                  <Card.Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalStudents}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaCheckCircle size={40} className="mb-2 text-success" />
                  <Card.Title>Actifs</Card.Title>
                  <Card.Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeStudents}</Card.Text>
                  <ProgressBar now={percentActive} label={`${percentActive}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaTimesCircle size={40} className="mb-2 text-danger" />
                  <Card.Title>Inactifs</Card.Title>
                  <Card.Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>{inactiveStudents}</Card.Text>
                  <ProgressBar now={percentInactive} label={`${percentInactive}%`} variant="danger" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="mb-4">
            <Card.Header>Répartition par Niveau</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Niveau</th>
                    <th>Nombre d'étudiants</th>
                    <th>Pourcentage</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(repartitionByLevel).map(([niveau, count]) => {
                    const percent = ((count / totalStudents) * 100).toFixed(1);
                    return (
                      <tr key={niveau}>
                        <td>{niveau}</td>
                        <td>{count}</td>
                        <td>{percent} %</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Répartition par Mention</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Mention</th>
                    <th>Nombre d'étudiants</th>
                    <th>Pourcentage</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(repartitionByMention).map(([mention, count]) => {
                    const percent = ((count / totalStudents) * 100).toFixed(1);
                    return (
                      <tr key={mention}>
                        <td>{mention}</td>
                        <td>{count}</td>
                        <td>{percent} %</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <Row className="mb-4">
            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaUsers size={40} className="mb-2 text-primary" />
                  <Card.Title>Total utilisateurs</Card.Title>
                  <Card.Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalUsers}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaUserShield size={40} className="mb-2 text-warning" />
                  <Card.Title>Admins</Card.Title>
                  <Card.Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>{admins}</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <FaUserTie size={40} className="mb-2 text-info" />
                  <Card.Title>Enseignants</Card.Title>
                  <Card.Text style={{ fontSize: '2rem', fontWeight: 'bold' }}>{enseignants}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card>
            <Card.Header>Répartition par Rôle</Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Rôle</th>
                    <th>Nombre d'utilisateurs</th>
                    <th>Pourcentage</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(repartitionByRole).map(([role, count]) => {
                    const percent = ((count / totalUsers) * 100).toFixed(1);
                    return (
                      <tr key={role}>
                        <td>{role}</td>
                        <td>{count}</td>
                        <td>{percent} %</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}
