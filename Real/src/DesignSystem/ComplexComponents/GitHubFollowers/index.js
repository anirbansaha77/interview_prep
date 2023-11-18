import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import './GitHubFollowers.css';

import useFetch from '../../../customHooks/useFetch';

// interface Follower {
//   id: number;
//   login: string;
// }

// interface GitHubFollowersProps {
//   userId: string;
// }

const GitHubFollowers = ({ userId }) => {
  // const [followers, setFollowers] = useState<Follower[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const { data, loading, error } = useFetch(`https://api.github.com/users/${userId}/followers`);

  // useEffect(() => {
  //   const fetchFollowers = async () => {
  //     try {
  //       const response = await fetch(`https://api.github.com/users/${userId}/followers`);
  //       const data: Follower[] = await response.json();
  //       setFollowers(data);
  //       setLoading(false);
  //       setError(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error(`Error fetching GitHub followers for user ${userId}:`, error);
  //       setError(true);
  //     }
  //   };

  //   fetchFollowers();
  // }, [userId]);

  const displayedFollowers = data.slice(0, 5);

  const handleListItemClick = (event, index) => {
    event.preventDefault();
    window.location.href= `/userdetails/${index}`;
  };

  return (
    <div className={"container"}>
      {
        error && <Typography variant="subtitle1" color="red" noWrap>
        {`Error fetching GitHub followers for user ${userId}`}
        </Typography>
      }
      { !error && <h2>GitHub Followers of {userId}</h2>}
      {loading ? (
        <p>Loading...</p>
      ) : ( !error &&
        <>
          <p>Total Followers: {data.length}</p>
          <p>First five followers:</p>
            {displayedFollowers.map((follower) => (
                <div key={`div_${follower.id}`}>
                    <a key={follower.id} href="_blank" onClick={(event) => handleListItemClick(event, follower.login)} >{follower.login}</a>
                </div>
            ))}
        </>
      )}
    </div>
  );
};

export default GitHubFollowers;
