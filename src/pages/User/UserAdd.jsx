import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function UserAdd() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    role: 'Utilisateur',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
    // Ici, tu peux appeler une API avec fetch/axios par exemple
    // axios.post('/api/users', formData).then(...)
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un utilisateur</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="nom"
            placeholder="Entrez le nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            name="prenom"
            placeholder="Entrez le prénom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Entrez l'email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rôle</Form.Label>
          <Form.Select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option>Administrateur</option>
            <option>Modérateur</option>
            <option>Utilisateur</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
}

export default UserAdd;
