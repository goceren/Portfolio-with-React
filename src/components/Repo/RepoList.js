import React from 'react';
import Cards from '../Cards';
import NoRepos from './NoRepos';
import dayjs from 'dayjs';

const RepoList = props => { 
  
  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Cards name={repo.name} url={repo.html_url} description={repo.description} language={repo.language} date={dayjs(repo.created_at).format('DD MMM YYYY')} key={repo.id} />);    
  } else {
    repos = <NoRepos />
  }

  return(
    <ul className="repo-list">
      {repos}
    </ul> 
  );
}

export default RepoList;