import React from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repository.scss";

const repository = {
  name: "unform",
  link: "https://github.com/unform/unform",
  description: "Forms in React",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
