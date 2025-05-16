import React from "react";
import StatsCard from "../../components/StatsCard/StatsCard";
import ActionCard from "../../components/ActionCard/ActionCard";
import "../../styles/DashboardOverview/DashboardOverview.css";

function DashboardOverview() {
  const statsData = [
    {
      title: "Nombre total d'étudiant·e·s",
      value: "Au total, nous avons\n195 étudiant·e·s\ncette année !",
    },
    {
      title: "Répartition par âge",
      value: "33 < 20 ans\n137 < 25 ans\n25 ≥ 25 ans",
    },
    {
      title: "Répartition par nationalité",
      value: "190 Malagasy\n5 Étranger·e·s",
    },
    { title: "Répartition par niveau", value: "62 en L1\n69 en L2\n64 en L3" },
    { title: "Répartition par genre", value: "128 Féminin\n66 Masculin" },
    {
      title: "Répartition par mention",
      value: "44 Gestion\n80 Infirmier·e·s\n70 Sage-femmes",
    },
  ];

  const actionData = [
    {
      title: "Utilisateurs, personnels & enseignant·e·s",
      links: [
        { text: "Liste des utilisateurs", href: "#" },
        { text: "Liste des personnels administratifs", href: "#" },
        { text: "Liste de toutes les enseignant·e·s", href: "#" },
      ],
    },
    {
      title: "Gestion de l’établissement",
      links: [
        { text: "Mentions", href: "#" },
        { text: "Parcours", href: "#" },
        { text: "Unités d’enseignement", href: "#" },
        { text: "Éléments Constitutifs", href: "#" },
        { text: "Salles disponibles", href: "#" },
        { text: "Niveaux d’étude", href: "#" },
        { text: "Semestres", href: "#" },
        { text: "Horaires enseignants", href: "#" },
      ],
    },
    {
      title: "Gestion des étudiant·e·s",
      links: [
        { text: "Ajouter un·e étudiant·e", href: "#" },
        { text: "Liste des étudiant·e·s", href: "#" },
        { text: "Paiements", href: "#" },
        { text: "Absences", href: "#" },
      ],
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
      ],
    },
  ];

  return (
    <div
  className="container py-4 d-none d-lg-block"
  
>
      <h1 className="text-center mb-5 text-primary fw-bold">
        Système Informatisé de Gestion – ISNM Antsiranana
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
          <div className="col-12 col-md-6" key={index}>
            <ActionCard title={action.title} links={action.links} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardOverview;
