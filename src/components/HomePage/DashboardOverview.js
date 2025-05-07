import React from 'react';
import StatsCard from './StatsCard';
import ActionCard from './ActionCard';
import './DashboardOverview.css'; // Styles spécifiques

// Données exemples (normalement venues d'une API)
const statsData = [
  { title: "Nombre total d'étudiant.e et selon le genre dans la base", value: "Au total, nous avons\n195 étudiant.e.s\ncette année !!" },
  { title: "Nombre d'étudiant.e selon leur âge", value: "33, moins de 20 ans !\n137, moins de 25 ans !\n25, plus de 25 ans !" },
  { title: "Nombre d'étudiant.e selon la nationalité", value: "190, malagasy !\n5, étranger !" },
  { title: "Nombre d'étudiant.e selon le niveau", value: "62, en L1 ;\n69, en L2 ;\n64, en L3 !" },
  { title: "Nombre d'étudiant.e selon les genres", value: "128, féminins ;\n66, masculins !" },
  { title: "Nombre d'étudiant.e de chaque mention", value: "44 en Gestion ;\n80 en Infirmiers ;\n70 en Sage-Femmes !" }
];

const actionData = [
  {
    title: "Utilisateurs, Personnels et Enseignants",
    links: [
      { text: "Liste des utilisateurs", href: "#" },
      { text: "Liste des personnels administratifs", href: "#" },
      { text: "Liste de toutes les enseignant.e.s", href: "#" },
    ]
  },
  {
    title: "Gestion de l'établissement",
    links: [
        { text: "Liste des mentions au sein de l'ISNM", href: "#" },
        { text: "Liste des parcours existants", href: "#" },
        { text: "Liste des unités d'enseignement", href: "#" },
        { text: "Liste des éléments Constitutifs", href: "#" },
        { text: "Salles de classe disponibles", href: "#" },
        { text: "Niveaux d'étude possibles", href: "#" },
        { text: "Semestres d'étude existants", href: "#" },
        { text: "Horaires effectués par les enseignants", href: "#" },
    ]
  },
   {
    title: "Gestion des étudiant.e.s",
    links: [
        { text: "Option d'ajouts des étudiant.e.s", href: "#" },
        { text: "Liste des étudiant.e.s inscrits", href: "#" },
        { text: "Ajout et historique des paiements", href: "#" },
        { text: "Gestion des absences des étudiant.e.s", href: "#" },
    ]
  },
   {
    title: "Gestion de notes des étudiant.e.s",
    links: [
        { text: "Notes des étudiant.e.s en L1 Gestion", href: "#" },
        { text: "Notes des étudiant.e.s en L1 TG", href: "#" }, // Présumé 'IG' ou autre
        { text: "Notes des étudiant.e.s en L1 SF", href: "#" },
        { text: "Notes des étudiant.e.s en L2 Gestion", href: "#" },
        { text: "Notes des étudiant.e.s en L2 IG", href: "#" },
        { text: "Notes des étudiant.e.s en L2 SF", href: "#" },
        { text: "Notes des étudiant.e.s en L3 Gestion", href: "#" },
        { text: "Notes des étudiant.e.s en L3 IG", href: "#" },
        { text: "Notes des étudiant.e.s en L3 SF", href: "#" },
    ]
  },
  // ... Ajoutez les autres cartes d'action ici
];


function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <h1 className="dashboard-title">Systeme Informatisé de Gestion de L'ISNM Antsiranana</h1>

      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <div className="actions-grid">
        {actionData.map((action, index) => (
           <ActionCard
             key={index}
             title={action.title}
             links={action.links}
           />
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;
