import React from 'react';
import StatsCard from '../../components/StatsCard/StatsCard';
import ActionCard from '../../components/ActionCard/ActionCard';

function DashboardOverview() {
  const statsData = [
    { title: "Nombre total d'étudiant.e et selon le genre", value: "Au total, nous avons\n195 étudiant.e.s\ncette année !!" },
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
        { text: "Liste des mentions", href: "#" },
        { text: "Liste des parcours", href: "#" },
        { text: "Unités d'enseignement", href: "#" },
        { text: "Éléments Constitutifs", href: "#" },
        { text: "Salles disponibles", href: "#" },
        { text: "Niveaux d'étude", href: "#" },
        { text: "Semestres", href: "#" },
        { text: "Horaires enseignants", href: "#" },
      ]
    },
    {
      title: "Gestion des étudiant.e.s",
      links: [
        { text: "Ajout étudiant.e", href: "#" },
        { text: "Liste des étudiant.e.s", href: "#" },
        { text: "Paiements", href: "#" },
        { text: "Absences", href: "#" },
      ]
    },
    {
      title: "Gestion de notes",
      links: [
        { text: "Notes L1 Gestion", href: "#" },
        { text: "Notes L1 IG", href: "#" },
        { text: "Notes L1 SF", href: "#" },
        { text: "Notes L2 Gestion", href: "#" },
        { text: "Notes L2 IG", href: "#" },
        { text: "Notes L2 SF", href: "#" },
        { text: "Notes L3 Gestion", href: "#" },
        { text: "Notes L3 IG", href: "#" },
        { text: "Notes L3 SF", href: "#" },
      ]
    },
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5 text-primary fw-bold">
        Système Informatisé de Gestion de l'ISNM Antsiranana
      </h1>

      {/* Statistiques */}
      <div className="row g-4 mb-5">
        {statsData.map((stat, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <StatsCard title={stat.title} value={stat.value} />
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="row g-4">
        {actionData.map((action, index) => (
          <div className="col-md-6" key={index}>
            <ActionCard title={action.title} links={action.links} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;
