// src/pages/StudentAdd/StudentAdd.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/* ─── Structure Niveau → Mention → Parcours ───────── */
const cursus = {
  'Licence professionnelle': {
    STNPA: [
      'Génie Informatique',
      'Génie Électronique Informatique',
      'Génie Biomédical (L2 après PACES ou équivalent)',
    ],
    STI: ['Génie Électrique', 'Génie Industriel', 'Froid et Énergie'],
    STGC: [
      'Bâtiments et Travaux Publics',
      'Génie Hydraulique',
      'Génie de l\'Architecture',
    ],
  },
  'Master Ingénieur': {
    STNPA: [
      'Génie Logiciel',
      'Électronique et Informatique Industrielle',
      'Télécommunications et Réseaux',
      'Génie Biomédical',
    ],
    STI: [
      'Ingénierie des Systèmes Électriques Automatisés',
      'Génie Industriel',
      'Froid et Énergie',
    ],
    STGC: [
      'Bâtiments et Travaux Publics',
      'Aménagements et Travaux Publics',
      'Hydrauliques et Ouvrages',
    ],
  },
};

export default function StudentEdit() {
  const navigate = useNavigate();

  /* États du formulaire */
  const [form, setForm] = useState({
    nom: '',
    matricule: '',
    niveau: '',
    mention: '',
    parcours: '',
    statut: 'Actif',
  });

  /* Helpers pour listes dépendantes */
  const mentions = form.niveau ? Object.keys(cursus[form.niveau]) : [];
  const parcours = form.niveau && form.mention ? cursus[form.niveau][form.mention] : [];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(form); // À remplacer par une requête API
    alert('Étudiant enregistré !');
    navigate('/etudiants');
  };

  return (
    <div className="container mt-4">
      <h2>Modifier un étudiant</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nom complet</Form.Label>
              <Form.Control
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Matricule</Form.Label>
              <Form.Control
                name="matricule"
                value={form.matricule}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Niveau</Form.Label>
              <Form.Select
                name="niveau"
                value={form.niveau}
                onChange={(e) =>
                  setForm({
                    ...form,
                    niveau: e.target.value,
                    mention: '',
                    parcours: '',
                  })
                }
                required
              >
                <option value="">-- Choisir --</option>
                {Object.keys(cursus).map((niv) => (
                  <option key={niv}>{niv}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Mention</Form.Label>
              <Form.Select
                name="mention"
                value={form.mention}
                onChange={(e) =>
                  setForm({
                    ...form,
                    mention: e.target.value,
                    parcours: '',
                  })
                }
                disabled={!form.niveau}
                required
              >
                <option value="">-- Choisir --</option>
                {mentions.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Parcours</Form.Label>
              <Form.Select
                name="parcours"
                value={form.parcours}
                onChange={handleChange}
                disabled={!form.mention}
                required
              >
                <option value="">-- Choisir --</option>
                {parcours.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>Statut</Form.Label>
          <Form.Select
            name="statut"
            value={form.statut}
            onChange={handleChange}
          >
            <option>Actif</option>
            <option>Inactif</option>
          </Form.Select>
        </Form.Group>

        <Button variant="warning" type="submit">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
}
