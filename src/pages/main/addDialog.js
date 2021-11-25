import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Input from './input'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="text"
        onClick={handleClickOpen}
        startIcon={<AddBoxIcon />}
      ></Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          position="relative"
          color="primary"
          sx={{ top: 'auto', bottom: 0, maxWidth: '100%' }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {/* <Box
              sx={{ ml: 'auto', flex: 1 }}
              disply="flex"
              alignItems="flex-end"
            >
              <Box>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Save
                </Button>
              </Box>
            </Box> */}
          </Toolbar>
        </AppBar>
        <Input />
      </Dialog>
    </div>
  )
}
