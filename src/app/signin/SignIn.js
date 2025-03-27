// import React, { useState } from 'react';
// import { Button, Form, Container, Card, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // For routing after successful login

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Hardcoded credentials
//     const validEmail = 'eros.montin@gmail.com';
//     const validPassword = 'eros';

//     if (email === validEmail && password === validPassword) {
//       setError('');
//       alert('Login successful!'); // For debugging
//       navigate('/main/home'); // Redirect to main page
//     } else {
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       <Card style={{ width: '25rem' }} className="p-4 shadow">
//         <h3 className="text-center mb-4">Sign In</h3>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="w-100">
//             Sign In
//           </Button>
//         </Form>
//       </Card>
//     </Container>
//   );
// }

// export default SignIn;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#580F8B',
    },
    secondary: {
      main: '#6c757d',
    },
  },
});

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validEmail = 'eros.montin@gmail.com';
    const validPassword = 'eros';

    if (email === validEmail && password === validPassword) {
      setError('');
      alert('Login successful!'); // For debugging
      navigate('/main/home'); // Redirect to main page
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex-center page-root" style={{ paddingTop: 'calc(20vh - 20px)' }}>
        <div id="welcome">
          <div id="welcome-logo">
            <div
              style={{
                margin: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="/assets/camrie-logo-colored.png"
                className="img-fluid"
                style={{ margin: 'auto', height: '70pt' }}
                alt="Logo"
              />
            </div>
          </div>

          <div id="welcome-login">
            <Box component="form" onSubmit={handleSubmit} noValidate style={{ width: '87.5%' }}>
              <TextField
                margin="normal"
                className="col-md-12"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                size="small"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                size="small"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
              <FormControlLabel
                control={<Checkbox value="remember" size="small" color="primary" />}
                label={<Typography variant="subtitle2">Remember Me</Typography>}
                style={{ float: 'right', marginRight: '0' }}
                className="input-sm"
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mb: 2 }}
              >
                Forgot Password?
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" className="btn btn-link" variant="body2">
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>

      <footer className="footer">
        <Container>
          <p className="text-center">
            &copy; 2025 Copyright: Center for Biomedical Imaging. All rights reserved.
          </p>
        </Container>
      </footer>
    </ThemeProvider>
  );
}

