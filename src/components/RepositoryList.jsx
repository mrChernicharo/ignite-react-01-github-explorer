import React, { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repository.scss";

//https://api.github.com/users/**/repos
//https://api.github.com/orgs/**/repos
//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: "unform",
  link: "https://github.com/unform/unform",
  description: "Forms in React",
};

let n = 0;

export function RepositoryList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((resp) => resp.json())
      .then((data) => setRepos(data));
  }, []);

  console.log({ message: `renderização ${++n}`, ...repos });

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repos.map((repo) => (
          <RepositoryItem repository={repository} />
        ))}
      </ul>
    </section>
  );
}
