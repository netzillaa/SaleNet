import React from 'react'
import { Alert, Stack } from '@mui/material';

function AlertoError() {
    return (
        <Stack>
            <Alert severity="error">Wrong email or password!</Alert>
        </Stack>
    )
}

export default AlertoError;