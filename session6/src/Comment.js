import React from 'react';
import useSWR from 'swr'

export default function Comment({ id }) {
  const { data, error } = useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <p dangerouslySetInnerHTML={{__html: data.text}}></p>
    </div>
  )
}
