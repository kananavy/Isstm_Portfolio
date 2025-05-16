// src/pages/UserList/UserList.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, InputGroup, FormControl, Badge } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* ─── Données fictives (à remplacer par votre API) ─────────────────────────── */
const mockUsers = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    role: 'Administrateur',
    status: 'Actif',
  },
  {
    id: 2,
    name: 'Marie Curie',
    email: 'marie.curie@example.com',
    role: 'Utilisateur',
    status: 'Inactif',
  },
  {
    id: 3,
    name: 'Albert Einstein',
    email: 'albert.einstein@example.com',
    role: 'Modérateur',
    status: 'Actif',
  },
];

/* ─── Composant principal ──────────────────────────────────────────────────── */
function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  /* Simulation d’un appel API */
  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  /* Filtrage en fonction de la barre de recherche */
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  /* Suppression fictive (à remplacer par appel API) */
  const handleDelete = (id) => {
    if (window.confirm('Confirmer la suppression ?')) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      {/* Titre + bouton Ajouter */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Liste des utilisateurs</h2>

        {/* Bouton “Ajouter un utilisateur” */}
        <Button as={Link} to="/users/add" variant="primary">
          <FaPlus className="me-2" />
          Ajouter un utilisateur
        </Button>
      </div>

      {/* Barre de recherche */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Rechercher par nom ou email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {/* Tableau des utilisateurs */}
      <Table responsive bordered hover>
        <thead className="table-primary">
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Statut</th>
            <th style={{ width: '130px' }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Badge bg={user.status === 'Actif' ? 'success' : 'secondary'}>
                    {user.status}
                  </Badge>
                </td>
                <td>
                  {/* Bouton Modifier */}
                  <Button
                    as={Link}
                    to={`/users/edit/${user.id}`}
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    title="Modifier"
                  >
                    <FaEdit />
                  </Button>

                  {/* Bouton Supprimer */}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    title="Supprimer"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Aucun utilisateur trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
