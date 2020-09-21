import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './style.scss';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

export function HomePage() {
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const [modalStyle] = React.useState(getModalStyle);
  const [qrData, setQrData] = useState('');

  const [open, setOpen] = useState(false);
  return (
    <div id="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container maxWidth="sm">
        <h1 className="center"> QR APP </h1>
        <Button
          onClick={() => setOpen(true)}
          className="full-btn"
          variant="contained"
          color="primary"
        >
          Generate QR
        </Button>
        <div>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
              <FormControl style={{ width: '100%' }}>
                <TextField
                  id="outlined-basic"
                  label="QR Data"
                  variant="outlined"
                  onChange={e => setQrData(e.target.value)}
                />
                <FormHelperText id="my-helper-text">
                  (Object, integer, link, wtvr data you like)
                </FormHelperText>
                <Link
                  to={{
                    pathname: '/qr/generate',
                    state: qrData,
                  }}
                >
                  <Button
                    className="full-btn"
                    color="primary"
                    variant="contained"
                  >
                    {' '}
                    Generate!{' '}
                  </Button>
                </Link>
              </FormControl>
            </div>
          </Modal>
        </div>
        <Link to="/qr/scan">
          <Button className="full-btn" variant="contained" color="secondary">
            Scan QR
          </Button>
        </Link>
      </Container>
    </div>
  );
}
