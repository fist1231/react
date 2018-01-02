export const disableUser = (id) => ({
  type: 'DISABLE_USER',
  id
})

export const setUsersFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const updateUsers = (users) => ({
  type: 'UPDATE_USERS',
  users
})
