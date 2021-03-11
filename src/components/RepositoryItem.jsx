import React from "react";

const RepositoryItem = (props) => {
  return (
    <li>
      <h3>{props.repository?.name}</h3>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.link}>Acessar Repositório</a>
    </li>
  );
};

export default RepositoryItem;
