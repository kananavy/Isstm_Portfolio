// src/pages/StudentList/StudentList.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, InputGroup, FormControl, Badge } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* ─── Données fictives ───────────────────────────── */
const mockStudents = [
  {
    id: 1,
    matricule: 'ISST21-10-17FGCI/G.Info',
    nom: 'RAKOTONOMENJANAHARY Elio Rachel',
    niveau: 'Master Ingénieur',
    mention: 'STNPA',
    parcours: 'Génie Logiciel',
    statut: 'Actif',
  },
  {
    id: 2,
    matricule: 'ISST22-03-11STGC/BTP',
    nom: 'Andriamatoa Tiana',
    niveau: 'Licence professionnelle',
    mention: 'STGC',
    parcours: 'Bâtiments et Travaux Publics',
    statut: 'Inactif',
  },
];

/* ─── Composant liste ────────────────────────────── */
export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => setStudents(mockStudents), []);

  const filtered = students.filter(
    (s) =>
      s.nom.toLowerCase().includes(search.toLowerCase()) ||
      s.matricule.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Confirmer la suppression ?')) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      {/* Titre + bouton Ajouter */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Liste des étudiants</h2>
        <Button as={Link} to="/etudiants/ajout" variant="warning">
          <FaPlus className="me-2" /> Ajouter un étudiant
        </Button>
      </div>

      {/* Barre de recherche */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Rechercher par nom ou matricule"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {/* Tableau */}
      <Table responsive bordered hover>
        <thead className="table-warning">
          <tr>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Statut</th>
            <th style={{ width: '130px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length ? (
            filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.matricule}</td>
                <td>{s.nom}</td>
                <td>
                  <Badge bg={s.statut === 'Actif' ? 'success' : 'secondary'}>
                    {s.statut}
                  </Badge>
                </td>
                <td>
                  <Button
                    as={Link}
                    to={`/etudiants/edition/${s.id}`}
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    title="Modifier"
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(s.id)}
                    title="Supprimer"
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                Aucun étudiant trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
