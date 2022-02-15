import { useState } from 'react'
import React from 'react'
import Feed from './feed'
import AppBar from './appBar'
import UserQuery from './userQuery'

export default function Main() {
  const [searchText, setSearchText] = useState('')
  const [sortParam, setSortParam] = useState('')

  const handleSearchText = (text) => {
    setSearchText(text)
  }

  const handleSortParams = (param) => {
    setSortParam(param)
  }
  return (
    <UserQuery>
      <Feed searchText={searchText} sortParam={sortParam} />
      <AppBar
        handleSearchText={handleSearchText}
        handleSortParams={handleSortParams}
      />
    </UserQuery>
  )
}
