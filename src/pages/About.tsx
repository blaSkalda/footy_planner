import { Container, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { Box } from '@mui/system';
import React from 'react';

export const About = () => (
  <Container maxWidth="sm">
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Hello world about
    </Typography>
    <Link to="/home" color="secondary">
      Go to the home page
    </Link>
  </Box>
</Container>
);

export default About;
