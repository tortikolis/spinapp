import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Link href="/" >
            <a className='links'>Charts</a>
          </Link>
          <Link href="/video" >
              <a className='links'>Video</a>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}