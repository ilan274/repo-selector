import React from 'react';
import './card.styles.css';
import repo from '../../images/repo.png';

export const Card = props => (
  <div className="card-container">
    <a
    href={props.repo.html_url}
    target='_blank'
    >
      <img alt="repo" style={{ margin: 'auto' }} width='180' src={repo} />
      <h2>{props.repo.name}</h2>
    </a>
  </div>
);
