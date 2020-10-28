import React, { useState } from 'react';
import Comment from './Comment';
import useSWR from 'swr'

export default function Story({ id }) {
  const [showComments, setShowComments] = useState(false);
  const { data, error } = useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <p>{data.title}</p>
      <div onClick={onShowComment}>({(data.kids || []).length}) show comments</div>
      {showComments && data.kids.map(id => {
        return <Comment key={id} id={id} />
      })}
    </div>
  )

  function onShowComment() {
    setShowComments(p => !p);
  }
}
