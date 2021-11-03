import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { PropTypes } from 'prop-types';

function ErrorMessage(props) {
  const { errorMsg } = props;
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="error">
        {errorMsg}
      </Alert>
    </Stack>
  );
}

ErrorMessage.propTypes = {
  errorMsg: PropTypes.node.isRequired,
};

export default ErrorMessage;
