import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}/*import React from 'react'
import "./style.css"
 const Saidbar = () => {
  return (
    <div className='sidebar'>
        <div className='section'>
            <div className='row'>
                <div className='col'>
                    <div className='block'>
                        
                        <ul>
                            <li ><a href="#">antic<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">bathi stand<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">bowls<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">brass bell<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">copper items<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">cow with calf<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">gift icons<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">k vilakku<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">kamatchi vilaku<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">kitchen<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">new brass items<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">pooja items<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">silver items<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">status<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                            <li ><a href="#">vilakku<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>

                            <li ><a href="#">wedding items<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>







                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Saidbar
*/