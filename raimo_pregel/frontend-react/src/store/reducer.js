import { TITLE_ADD, TITLE_REMOVE, USER_LOGIN, USER_LOGOUT } from "./actions";

const titleReducer = (state, action) => {
  switch(action.type){
    case TITLE_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    case TITLE_REMOVE:
      return {
        ...state,
        data: state.data.filter(title => title.id !== action.payload)
      }
    // Kodutööna uue listi vastu võtmine maybe
    case "TITLES_UPDATE": 
        return {
          ...state,
          data: action.payload
        }
    default:
      return state
  }
}

const authReducer = (state, action) => {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      }
    case USER_LOGOUT:
      return {
        ...state,
        token: null,
        user: null
      }
    default:
      return state
  }
}

export { titleReducer, authReducer }