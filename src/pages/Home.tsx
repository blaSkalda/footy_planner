import { Container, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';
import React from 'react';

export const Home = () => (
  <Container maxWidth="sm">
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Hello world
    </Typography>
    <Link to="/about" color="secondary">
      Go to the about page
    </Link>
  </Box>
</Container>
);

export default Home;
