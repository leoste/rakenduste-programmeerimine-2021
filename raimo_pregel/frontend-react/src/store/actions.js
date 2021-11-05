export const TITLE_ADD = "TITLE_ADD"
export const TITLE_REMOVE = "TITLE_REMOVE"
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export const addTitle = title => ({
  type: TITLE_ADD,
  payload: title
})

export const removeTitle = id => ({
  type: TITLE_REMOVE,
  payload: id
})

// Lisada siis uus konstant selle jaoks ja muuta ka reduceris
export const updateTitles = array => ({
  type: "TITLES_UPDATE",
  payload: array
})

export const loginUser = data => ({
  type: USER_LOGIN,
  payload: data
})

export const logoutUser = () => ({
  type: USER_LOGOUT
})