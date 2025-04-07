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
import axios from 'axios';
import { SIGNIN } from '../../Variables'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {email: data.get('email'), password: data.get('password')};
    let result;
    try {
      result = await axios.post(SIGNIN, payload)
      if (result.data.error) {
        alert(result.data.error);
        return;
      } else if (result?.data?.access_token) {
        alert("Login successful!")
        navigate('/main/home'); 
        return;
      }
      alert(`Could not log in. Information: ${JSON.stringify(result.data)}`)
    } catch (e) {
      alert(`Error ${e}\n ${JSON.stringify(result)}`)
      console.error(`Error: ${e}`)
    }
    console.log(result);
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

/*
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

Signin.propTypes = {
    signInCallback: PropTypes.func.isRequired, // Ensure the prop type is correct
};

export default function Signin({ signInCallback }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // // Call the signInCallback function passed as a prop with email and password
        // signInCallback({ email, password });
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


*/