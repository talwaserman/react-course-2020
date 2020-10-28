import React from 'react';
import useSWR from 'swr';

const StarWarsFilm = ({url}) => {
    const { data, error } = useSWR(url);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <section className="star-wars">
      <p> Title: {data.title}</p>
      <p> Opening: {data.opening_crawl}</p>
    </section>
  )
  return (<div >

  </div>);
};

export default StarWarsFilm;
