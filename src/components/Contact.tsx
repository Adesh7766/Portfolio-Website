import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom className="gradient-text">
            Contact Me
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)'
              },
              gap: 4
            }}
          >
            <Box>
              <Paper elevation={3} sx={{ p: 3 }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Connect With Me
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link
                    href="mailto:adesh.pandey1673@gmail.com"
                    underline="none"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <EmailIcon />
                    <Typography>adesh.pandey1673@gmail.com</Typography>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/adesh-pandey-16b505280"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <LinkedInIcon />
                    <Typography>LinkedIn Profile</Typography>
                  </Link>
                  <Link
                    href="https://github.com/Adesh7766"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <GitHubIcon />
                    <Typography>GitHub Profile</Typography>
                  </Link>
                </Box>
              </Paper>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact; 