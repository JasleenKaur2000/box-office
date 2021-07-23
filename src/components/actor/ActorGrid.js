import React from 'react';
import IMAGE_NOT_FOUND from '../../images/IMAGE_NOT_FOUND.jfif';
import { FlexGrid } from '../styled';
import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
