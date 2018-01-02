const usersFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_USERS_FILTER':
      return action.filter
    default:
      return state
  }
}

export default usersFilter
