import * as React from 'react'
import { Menu, MenuItem, IconButton } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'

export default function SortMenu({ handleSortParam }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSetSortParam = (param) => {
    handleSortParam(param)
    handleClose()
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        <SortIcon color="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={() => handleSetSortParam('tagAZ')}># A-Z</MenuItem>
        <MenuItem onClick={() => handleSetSortParam('tagZA')}># Z-A</MenuItem>
        <MenuItem onClick={() => handleSetSortParam('dateAZ')}>Latest</MenuItem>
        <MenuItem onClick={() => handleSetSortParam('dateZA')}>Newest</MenuItem>
      </Menu>
    </div>
  )
}
