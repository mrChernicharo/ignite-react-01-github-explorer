import React from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  link: "https://github.com/unform/unform",
  description: "Forms in React",
};

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de Repositórios</h1>
      <p>my love</p>
      <p>my love</p>
      <p>my love</p>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
