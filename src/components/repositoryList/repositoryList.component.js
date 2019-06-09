import React from 'react'
import moment from "moment";
import RepositoryItem from '../repositoryItem';
import { RepositoryListWrapper, RepositoryListScrollWrapper } from "./repositoryList.style";
import {
  withRouter
} from 'react-router-dom';

export default withRouter(function RepositoryList(props) {

  function sortList(list) {
    return list.sort((a, b) => {
      let aDiff = moment().diff(a.createdAt, 'days');
      let bDiff = moment().diff(b.createdAt, 'days');
      return aDiff - bDiff;
    });
  }

  function renderRepos(repos) {
    if(repos) {
      let {list} = repos;
      if(!list || !Array.isArray(list)) return (<span>No repositories available</span>)
      
      list = sortList(list);
      
      return list.map((repo) => <RepositoryItem setSelectedRepo={() => {
        props.setSelectedRepo(repo);
        props.history.push('/issues');
      }} info={repo} key={repo.id}></RepositoryItem>);
    }
    
  }
  return (
    <RepositoryListWrapper showOnMobile={props.showOnMobile}>
      <h2>Repository List</h2>
      <RepositoryListScrollWrapper>
        {renderRepos(props.repositories)}
      </RepositoryListScrollWrapper>
    </RepositoryListWrapper>
  )
});
