import React from 'react';
import Story from './Story';
import useSWR from 'swr'

export default function Comment({ id }) {
    const { data, error } = useSWR(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&limitToFirst=30`);
    if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
        <h4>Stories:</h4>
        {data && data.map(story => <Story key={story} id={story} />)}
        {!data && <div>Loading...</div>}
      </div>
  )
}
