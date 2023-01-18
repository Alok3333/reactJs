import {
  Avatar,
  Button,
  Card,
  Divider,
  Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';

const UserNotification = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch('http://localhost:4000/users')
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      });
  }

  const deleteEmp = (id) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((val) => {
        console.log(val);
        getList();
      });
    });
  };

  return (
    <div>
      {user.map((item) => {
        return (
          <Card
            sx={{ marginLeft: '36%', marginRight: '36%', marginTop: '25px' }}
            key={item.id}
          >
            <Box sx={{ p: 2, display: 'flex', height: '65px' }}>
              <Avatar variant="rounded" src={item.profile} />
              <Stack spacing={0.5} sx={{ marginRight: '40px', mx: 2 }}>
                <Typography fontWeight={700}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  sent you an invite to connect
                </Typography>
              </Stack>
            </Box>
            <Divider />
            <Stack direction="row" spacing={2} sx={{ p: 1, display: 'flex' }}>
              <Button variant="contained">Accept</Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteEmp(item.id)}
              >
                Decline
              </Button>
            </Stack>
          </Card>
        );
      })}
    </div>
  );
};

export default UserNotification;
