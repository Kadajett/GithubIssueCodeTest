import React from 'react'

import RepositoryItem from '../repositoryItem';
import { RepositoryListWrapper } from "./repositoryList.style";

export default function RepositoryList(props) {
  function renderRepos(repos) {
    if(repos) {
      const {list} = repos;
      if(!list || !Array.isArray(list)) return (<span>No repositories available</span>)
      return list.map((repo) => <RepositoryItem setSelectedRepo={() => {props.setSelectedRepo(repo.id)}} info={repo} key={repo.id}></RepositoryItem>);
    }
    
  }
  return (
    <RepositoryListWrapper>
        {renderRepos(props.repositories)}
    </RepositoryListWrapper>
  )
}
