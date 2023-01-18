import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../pages/listitem.css';

function AlignItemsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/employee')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div style={{backgroundColor: 'rgb(231, 235, 240)'}}>
      {data.map((value) => {
        return (
          <div key={value.id} className="list">
            <List
              sx={{
                width: '100%',
                maxWidth: 450,
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                marginLeft: '40%',
                marginBottom: '12px'
              }}
             className="list-box"
             >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={value.profile_image} />
                </ListItemAvatar>
                <ListItemText
                  primary={value.employee_name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="primary"
                      >
                        Salary :
                      </Typography>
                      {value.employee_salary}
                      <br/>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="primary"
                      >
                        Age :
                      </Typography>
                      {value.employee_age}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </div>
        );
      })}
    </div>
  );
}

export default AlignItemsList;
