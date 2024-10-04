import React from 'react';
import BasicButtons from './component/button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Button, AppBar, Toolbar, Card, CardContent, CardActions } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My MUI App</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to My Material-UI App
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
      
      {/* Card Component */}
      <Card variant="outlined" style={{ marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a sample card using Material-UI.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <BasicButtons></BasicButtons>
    </Container>
  </ThemeProvider>
  );
}

export default App;
