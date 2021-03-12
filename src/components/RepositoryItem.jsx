import React from "react";

export function RepositoryItem(props) {
  return (
    <li>
      <h3>{props.repository?.name}</h3>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.link}>Acessar Repositório</a>
    </li>
  );
}
