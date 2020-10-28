# React & Ajax

Hackernews API Doc:
https://github.com/HackerNews/API

1. Ajax Theory
  - Every line will be a component: <Story />
    https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

  - Another component for the comments: <Comments />
    https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty

  - List of all stories (container): <HackerNewsPage />
    https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

    -> Outside all components (service) hacker_news_api_endpoint.js
      Micro management
      
    -> Inside each component (useEffect)
      Can't control order in which things are displayed on screen
      Data throttling
      Caching
      
    -> Custom Hook - Extract stateful logic from components

2. React SWR

3. Lab - Write a Hackernews client:
  https://github.com/HackerNews/API





function Story(props) {
  // Ajax
  
  return (
    <HackerNewsRow storyTitle={story.title} storyUrl={story.url} />
  );
}













