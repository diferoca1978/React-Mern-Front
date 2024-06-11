import { useState } from 'react';
import { useMemo } from 'react';
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addHours, differenceInSeconds } from 'date-fns';
import { Save } from '@mui/icons-material';
import '../../index.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'primary.main',
  borderRadius: '8px',
  border: '2px solid #1d75aa',
  boxShadow: 24,
  p: 4,
};

export const CalendarModal = () => {
  const [open, setOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleClose = () => {
    console.log('Closing');
    setOpen(false);
  };

  const [formValues, setFormValues] = useState({
    title: '',
    task: '',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onChangeDate = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const isValidTitle = useMemo(() => {
    if (!formSubmitted) return '';

    return formValues.title.length > 0 ? '' : 'true';
  }, [formValues.title, formSubmitted]);

  const onChangeValues = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Wrong dates',
        icon: 'error',
        confirmButtonText: 'Return',
        confirmButtonColor: '#d62828',
      });

      return;
    }

    if (formValues.title.length <= 0) return;

    console.log(formValues);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h1">
              New Event
            </Typography>
            <Divider />
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container>
                <Grid item sx={{ my: 1, ml: 1 }}>
                  <Typography>Start Date</Typography>
                  <DatePicker
                    dateFormat="dd/MM/yyyy h:mm aa"
                    showTimeSelect
                    selected={formValues.start}
                    onChange={(event) => {
                      onChangeDate(event, 'start');
                    }}
                    className="datepicker"
                  />
                </Grid>

                <Grid item sx={{ my: 1, ml: 1 }}>
                  <Typography>End Date</Typography>
                  <DatePicker
                    minDate={formValues.start}
                    dateFormat="dd/MM/yyyy h:mm aa"
                    showTimeSelect
                    selected={formValues.end}
                    onChange={(event) => {
                      onChangeDate(event, 'end');
                    }}
                    className="datepicker"
                  />
                </Grid>

                <Grid item sx={{ my: 1, ml: 1 }}>
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                      display: 'flex',
                      color: 'inherit',
                    }}
                  >
                    Title
                  </Typography>
                  <TextField
                    variant="outlined"
                    name="title"
                    value={formValues.title}
                    onChange={onChangeValues}
                    sx={{ width: 320 }}
                    error={isValidTitle ? 'true' : ''}
                    helperText={isValidTitle && 'Title is required'}
                  ></TextField>
                </Grid>

                <Grid item sx={{ my: 1, ml: 1 }}>
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                      display: 'flex',
                      color: 'inherit',
                    }}
                  >
                    Task description
                  </Typography>
                  <TextField
                    variant="outlined"
                    name="task"
                    value={formValues.task}
                    onChange={onChangeValues}
                    multiline
                    maxRows={5}
                    sx={{ width: 320 }}
                  ></TextField>
                </Grid>

                <Grid item sx={{ my: 1, ml: 1 }}>
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
                    <Typography
                      sx={{
                        textTransform: 'capitalize',
                        display: 'flex',
                        color: 'secondary.main',
                      }}
                    >
                      <Save
                        fontSize="small"
                        sx={{ mr: 2, color: 'secondary.main' }}
                      />{' '}
                      Save
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
