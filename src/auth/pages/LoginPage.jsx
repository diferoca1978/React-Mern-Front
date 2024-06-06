import { Button } from '@mui/material';

export const LoginPage = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'secondary.main',
          color: 'error.dark',
          '&:hover': { bgcolor: 'secondary.light' },
        }}
      >
        Login page
      </Button>
    </>
  );
};
