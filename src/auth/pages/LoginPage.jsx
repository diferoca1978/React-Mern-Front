import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormsLayout } from '../../layout';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { GoogleLogo } from '../../helpers/GoogleLogo';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [showPassword, setShowPassword] = useState(false);

  const togglepasword = () => setShowPassword(!showPassword);

  return (
    <>
      <FormsLayout title="Login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                variant="standard"
                label="Email"
                type="email"
                fullWidth
                {...register('email')}
              />
            </Grid>

            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                variant="standard"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglepasword}>
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...register('password')}
              />

              <Grid container spacing={2} sx={{ mb: 2, mt: 2, padding: 0 }}>
                <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: 'primary.main',
                      fontSize: 16,
                      '&:hover': { bgcolor: 'primary.light' },
                    }}
                  >
                    <Typography sx={{ textTransform: 'capitalize' }}>
                      SingIn
                    </Typography>
                  </Button>
                </Grid>

                <Grid item xs={12} sm={6} sx={{ pb: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: 'primary.main',
                      fontSize: 16,
                      '&:hover': { bgcolor: 'primary.light' },
                    }}
                    startIcon={<GoogleLogo />}
                  >
                    <Typography sx={{ textTransform: 'capitalize' }}>
                      SingIn with Google
                    </Typography>
                  </Button>
                </Grid>

                <Grid container direction="row" justifyContent="end" sm={12}>
                  <Link
                    component={RouterLink}
                    color="inherit"
                    to="/auth/register"
                    sx={{
                      fontSize: 16,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'info.main',
                      },
                    }}
                  >
                    Do not have an account? Sing Up !!
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormsLayout>
    </>
  );
};
