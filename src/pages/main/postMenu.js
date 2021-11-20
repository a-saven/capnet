import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useMutation } from "@apollo/client";
import { gql } from '@apollo/client';
import { POSTS } from './feed';

const options = [
  'Edit',
  'Delete',
];

const ITEM_HEIGHT = 48;

const DELETE_POST = gql`
  mutation deletePost($id: ID) {
    deletePost(id: $id ) 
  }
`;

export default function LongMenu({ id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [deletePost, { loading, error }] = useMutation(
    DELETE_POST,
    {
      variables:  { id },
      refetchQueries: [{
        query: POSTS,
      }],
      onCompleted () {
        //clearInput()
      }
    }
  );

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    if(option === "Delete") {
      console.log('option', option)
      deletePost();
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        size="large">
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {loading && "Loadign"}
        {error && "Error"}
        {options.map(option => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
