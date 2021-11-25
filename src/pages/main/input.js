import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SubmitPost from './submitPost'

const Input = () => {
  const [values, setValues] = useState({ text: '', title: '', tag: '' })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const clearInput = () => {
    setValues({ ...values, text: '', title: '', tag: '' })
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      justifyContent="center"
      height="90%"
    >
      <Box width={'100%'} p={1}>
        <Box width={'90%'} m={3}>
          <TextField
            id="title-input"
            value={values.title}
            onChange={handleChange('title')}
            placeholder="Title"
            fullWidth={true}
            variant="standard"
          />
        </Box>
        <Box width={'90%'} m={3}>
          <TextField
            multiline={true}
            id="text-input"
            value={values.text}
            onChange={handleChange('text')}
            placeholder="Text"
            fullWidth={true}
            variant="standard"
          />
        </Box>
        <Box width={'90%'} m={3}>
          <TextField
            id="tag-input"
            value={values.tag}
            onChange={handleChange('tag')}
            fullWidth={true}
            variant="standard"
            placeholder="Tags"
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <SubmitPost
            text={values.text}
            title={values.title}
            tag={values.tag}
            clearInput={clearInput}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Input
