export const disableUser = (id) => ({
  type: 'DISABLE_USER',
  id
})

export const setUsersFilter = (filter) => ({
  type: 'SET_USERS_FILTER',
  filter
})

export const initUsers = (users) => ({
  type: 'INIT_USERS',
  users
})
