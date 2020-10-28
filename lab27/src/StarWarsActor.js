import React, { Fragment, useState } from 'react';
import useSWR from 'swr';
import StarWarsFilm from './StarWarsFilm';

const StarWarsActor = () => {
  const [actorId, setActorId] = useState(1);
  const { data, error } = useSWR(`https://swapi.dev/api/people/${actorId}/`);
  return (
    <Fragment>
      <input
        type="text"
        value={actorId}
        onChange={e => setActorId(e.target.value)}
      />
      {data && (
        <section className="star-wars">
          <p> Name: {data.name}</p>
          <p> height: {data.height}</p>
          <p>
            <u>Films:</u>
          </p>
          {data.films.map(film => (
            <StarWarsFilm key={film} url={film} />
          ))}
        </section>
      )}
    </Fragment>
  );
  return <div></div>;
};

export default StarWarsActor;
