import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'

import PlaygroundSection from './PlaygroundSection'

const PgNotification = () => {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <PlaygroundSection sectionTitle="Notification">
            <Button color="secondary" onClick={() => setOpen(true)}>
                Show notification
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message="Notification"
            />
        </PlaygroundSection>
    )
}

export default PgNotification
