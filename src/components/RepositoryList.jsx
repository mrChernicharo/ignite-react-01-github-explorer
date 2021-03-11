import React from "react";
import RepositoryItem from "./RepositoryItem";

const repository = {
  name: "unform",
  link: "https://github.com/unform/unform",
  description: "Forms in React",
};

const RepositoryList = () => {
  return (
    <section>
      <h1>Lista de Repositórios</h1>

      <ul>
        <li>
          <strong></strong>
          <p>Lorem ipsum dolor sit.</p>

          <a href="">Acessar Repositório</a>
        </li>

        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};

export default RepositoryList;
