import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom className="gradient-text">
            About Me
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              },
              gap: 4
            }}
          >
            <Box>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Who I Am
                </Typography>
                <Typography paragraph>
                  I am a passionate full-stack developer with a strong foundation in modern web technologies.
                  My journey in software development has equipped me with the skills to build robust and
                  scalable applications.
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Experience
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Junior .NET Developer
                </Typography>
                <Typography paragraph color="text.secondary">
                  4+ Months of Experience
                </Typography>
                <Typography paragraph>
                  Specialized in developing and maintaining web applications using .NET technologies.
                  Proficient in building RESTful APIs, implementing authentication systems, and working
                  with SQL Server databases.
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <Typography paragraph>
                  • Frontend: JavaScript, jQuery, HTML5, CSS3<br />
                  • Backend: .NET Framework, .NET Core, C#<br />
                  • Database: SQL, MS SQL<br />
                  • Tools: Git, CursorAI, Jira<br />
                  • Methodologies: Agile, Scrum
                </Typography>
              </Paper>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About; 