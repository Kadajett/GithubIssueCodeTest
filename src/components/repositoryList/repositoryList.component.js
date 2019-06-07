import React from 'react'

import RepositoryItem from '../repositoryItem';

export default function RepositoryList(props) {
  function renderRepos(repos) {
    if(repos) {
      const {list} = repos;
      if(!list || !Array.isArray(list)) return (<span>No repositories available</span>)
      return list.map((repo) => <RepositoryItem info={repo}></RepositoryItem>);
    }
    
  }
  return (
    <div>
        {renderRepos(props.repositories)}
    </div>
  )
}
