import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import './GitHubRepos.css';
import useFetch from '../../../customHooks/useFetch';

// interface Repo {
//   id: number;
//   name: string;
// }

// export type Props = {
//   userId: string;
// };

const GitHubRepos = ({ userId }) => {
  // const [repos, setRepos] = useState<Repo[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const { data: repos, loading, error } = useFetch(`https://api.github.com/users/${userId}/repos`);
  // useEffect(() => {
  //   const fetchRepos = async () => {
  //     try {
  //       const response = await fetch(`https://api.github.com/users/${userId}/repos`);
  //       const data: Repo[] = await response.json();
  //       setRepos(data);
  //       setLoading(false);
  //       setError(false);
  //     } catch (error) {
  //       console.error('Error fetching GitHub repositories:', error);
  //       setLoading(false);
  //       setError(true);
  //     }
  //   };

  //   fetchRepos();
  // }, [userId]);

  return (
    <div className="github-repos-container">
      {
        error && <Typography variant="subtitle1" color="red" noWrap>
        {`Error fetching GitHub repos for user ${userId}`}
        </Typography>
      }
      { !error && <h2>GitHub Orgs of {userId}</h2> }
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id} className="repo-item">
              {repo.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubRepos;
