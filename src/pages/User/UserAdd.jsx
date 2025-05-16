// src/pages/UserAdd/UserAdd.jsx
import React from 'react';
import { Form, Button } from 'react-bootstrap';

function UserAdd() {
  return (
    <div className="container mt-4">
      <h2>Ajouter un utilisateur</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Entrez le nom" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Entrez l'email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rôle</Form.Label>
          <Form.Control as="select">
            <option>Administrateur</option>
            <option>Modérateur</option>
            <option>Utilisateur</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
}

export default UserAdd;
