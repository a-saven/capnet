import { useState } from 'react'
import React from 'react'
import Feed from './feed'
import AppBar from './appBar'
import UserQuery from './userQuery'

export default function Main() {
  const [searchText, setSearchText] = useState(null)

  const handleSearchText = (text) => {
    setSearchText(text)
  }

  return (
    <UserQuery>
      <Feed searchText={searchText} />
      <AppBar handleSearchText={handleSearchText}/>
    </UserQuery>
  )
}
