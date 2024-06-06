/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';

export const FormsLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.light', padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 4,
          border: 1,
          borderColor: 'blues.main',
          width: { md: 450 },
        }}
      >
        <Typography variant="h5">{title}</Typography>

        {children}
      </Grid>
    </Grid>
  );
};
