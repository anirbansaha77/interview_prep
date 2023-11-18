import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import './GitHubOrganizations.css';
import useFetch from '../../../customHooks/useFetch';

// interface Organization {
//   id: number;
//   login: string;
//   avatar_url?: string;
//   description?: string;
// }

// interface GitHubOrganizationsProps {
//   userId: string;
// }

const GitHubOrganizations = ({ userId }) => {
  // const [orgs, setOrgs] = useState<Organization[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const { data: orgs, loading, error } = useFetch(`https://api.github.com/users/${userId}/orgs`);
  // useEffect(() => {
  //   const fetchOrgs = async () => {
  //     try {
  //       const response = await fetch(`https://api.github.com/users/${userId}/orgs`);
  //       const data: Organization[] = await response.json();
  //       setOrgs(data);
  //       setLoading(false);
  //       setError(false);
  //     } catch (error) {
  //       console.error(`Error fetching GitHub organizations for user ${userId}:`, error);
  //       setLoading(false);
  //       setError(true);
  //     }
  //   };

  //   fetchOrgs();
  // }, [userId]);

  return (
    <div className={"container"}>
      {!error && <h2>GitHub Organizations of {userId}</h2> }
      {loading ? (
        <p className={"loading"}>Loading...</p>
      ) : (
        <>
          {
            error && <Typography variant="subtitle1" color="red" noWrap>
            {`Error fetching GitHub organizations for user ${userId}`}
            </Typography>
          }
          {orgs.length > 0 ? (
              <div className={"organizationItem"}>
                  {orgs.map((org) => (
                    <div key={org.id} style={{"display":"flex", "flexDirection": "column","padding": "5px"}} >
                        <img height="40px" width="40px" alt={org.login} title={org.login} src={org.avatar_url} />
                        <h6>{org.login}</h6>
                    </div>
                  ))}
              </div>
          ) : (!error &&
            <div className={"noOrganizations"}>
              {`${userId} has no Organizations`}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GitHubOrganizations;
