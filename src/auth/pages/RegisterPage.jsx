import { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FormsLayout } from '../../layout';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const RegisterPage = () => {
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
      <FormsLayout title="Register">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} sx={{ pb: 2 }}>
              <TextField
                variant="standard"
                label="Name"
                type="text"
                fullWidth
                {...register('name')}
              />
            </Grid>

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
                <Grid item xs={12} sx={{ pb: 2 }}>
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
                      SingUp
                    </Typography>
                  </Button>
                </Grid>

                <Grid container direction="row" justifyContent="end" sm={12}>
                  <Link
                    component={NavLink}
                    color="inherit"
                    to="/auth/login"
                    sx={{
                      fontSize: 16,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'info.main',
                      },
                    }}
                  >
                    Do you have an account? Sing In !!
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
