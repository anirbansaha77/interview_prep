import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import List from "../../DesignSystem/BaseComponents/List";
import ListItem from "../../DesignSystem/BaseComponents/ListItem";
import { useNavigate } from 'react-router';
import './Home.css';

interface HomeProps {
  title?: string;
  titleDescription?: string;
}
interface User {
  id: number;
  login: string;
  avatar_url: string;
}

/**
 * Home component representing the main page displaying a list of GitHub users.
 *
 * @component
 * @returns {JSX.Element} The JSX representation of the Home component.
 */
const Home: React.FC<HomeProps> = ({ title, titleDescription }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://api.github.com/users`);
        const data: User[] = await response.json();
        setUsers(data);
        setError(false);
      } catch (error) {
        setError(true);
        console.error(`Error fetching GitHub users`, error);
      }
    };

    fetchUsers();
  }, []);
  /**
   * Handles the click event on a list item, navigating to the details page for the selected user.
   *
   * @param {React.MouseEvent} event - The mouse event.
   * @param {string} index - The index of the selected user.
   */
  const handleListItemClick = (event: React.MouseEvent, index: string) => {
    navigate(`/userdetails/${index}`);
  };

  return (
    <Box 
      sx={{
        width: '100%',
        maxWidth: 600,
        bgcolor: '',
        textAlign: 'center',
        margin: "0 auto"
      }}
    >
      <Typography variant="h6" color="text.primary" noWrap>
        {title || "GitHub Users2" }
      </Typography>
      <List sx={{ bgcolor: 'background.paper', textAlign: 'center', alignItems: "flex-start" }}>
        {
          error && <Typography variant="subtitle1" color="red" noWrap>
          {"Api Call failed to load users!"}
          </Typography>
        }
        {users.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem
              sx={{ maxWidth: 600, bgcolor: 'background.paper', textAlign: 'center', alignItems: "flex-start" }}
            >
              <ListItemButton
                onClick={(event) => handleListItemClick(event, item.login)}
              >
                <ListItemAvatar>
                  <Avatar alt={item.login} src={item.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }}
                  primary={item.login}
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ width: '100%' }} component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default Home;
