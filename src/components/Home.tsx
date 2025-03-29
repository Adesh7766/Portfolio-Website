import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm Adesh Pandey
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h4" color="primary" gutterBottom>
            Full Stack .Net Developer
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography variant="h6" color="textSecondary" paragraph sx={{ maxWidth: '600px', mb: 4 }}>
            I create beautiful and functional web applications using modern technologies.
            Let's build something amazing together!
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
          >
            View My Work
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
          >
            Contact Me
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 