import React from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: 'Ecommerce Website',
    description: 'A ecommerce application built with modern technologies. Features include Web APIs for product management, user authentication, and order processing. Built with .NET 8, utilizing SQL Server for data persistence and following clean architecture principles.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlJTIwYXBwfGVufDB8fDB8fHww&w=1000&q=80',
    technologies: ['.NET 8', 'C#', 'SQL Server', 'Web API', 'Clean Architecture'],
    githubUrl: 'https://github.com/Adesh7766/Ecommerce-Website.git',
    liveUrl: 'https://github.com/Adesh7766/Ecommerce-Website'
  },
  {
    title: 'Bug Tracker',
    description: 'A comprehensive bug tracking system built with ASP.NET MVC architecture. Features include user authentication using HttpSession, bug reporting, tracking, and management. Built with .NET 6, utilizing SQL Server Management Studio (SSMS) and Entity Framework Core.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technologies: ['ASP.NET MVC', '.NET 6', 'Entity Framework Core', 'SSMS', 'jQuery', 'Bootstrap'],
    githubUrl: 'https://github.com/Adesh7766/Bug-Tracker.git',
    liveUrl: 'https://github.com/Adesh7766/Bug-Tracker'
  },
  {
    title: 'Secure Login Authentication',
    description: 'A robust authentication system built with .NET 8. Features include secure password hashing for database storage, JWT token generation for authentication, and a clean layered architecture with separate BAL, DAL, and Service layers.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technologies: ['.NET 8', 'C#', 'JWT Authentication', 'Password Hashing', 'SQL Server', 'Clean Architecture'],
    githubUrl: 'https://github.com/Adesh7766/LoginAuthProject.git',
    liveUrl: 'https://github.com/Adesh7766/LoginAuthProject'
  }
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" gutterBottom className="gradient-text">
            My Projects
          </Typography>
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)'
              },
              gap: 4
            }}
          >
            {projects.map((project, index) => (
              <Box key={project.title} sx={{ height: '100%' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  style={{ height: '100%' }}
                >
                  <Card className="glass-effect" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Typography
                            key={tech}
                            variant="body2"
                            component="span"
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 2,
                              backgroundColor: 'primary.main',
                              color: 'white',
                              fontSize: '0.8rem',
                              fontWeight: 500,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects; 