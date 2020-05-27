import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => (
  <div className="card-list">
    {props.repositories.map(repo => (
      <Card key={repo.id} repo={repo} />
    ))}
  </div>
);