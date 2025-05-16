// src/pages/UserEdit/UserEdit.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function UserEdit() {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h2>Modifier l'utilisateur #{id}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" defaultValue="Nom actuel" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" defaultValue="email@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rôle</Form.Label>
          <Form.Control as="select" defaultValue="Utilisateur">
            <option>Administrateur</option>
            <option>Modérateur</option>
            <option>Utilisateur</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Mettre à jour</Button>
      </Form>
    </div>
  );
}

export default UserEdit;
