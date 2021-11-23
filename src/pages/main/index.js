import React from 'react'
import Feed from './feed'
import AppBar from './appBar'
import UserQuery from './userQuery'

export default function Main() {
  return (
    <UserQuery>
      <Feed />
      <AppBar />
    </UserQuery>
  )
}
