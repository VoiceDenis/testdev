import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{props.value}</Button>
      <Button variant="contained">{props.value}</Button>
      <Button variant="outlined">{props.value}</Button>
    </Stack>
  );
}