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
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: 'primary.light',
          padding: 3,
          borderRadius: 4,
          border: 2,
          borderColor: 'secondary.main',
          width: { md: 550 },
        }}
      >
        <Typography variant="h5">{title}</Typography>

        {children}
      </Grid>
    </Grid>
  );
};
