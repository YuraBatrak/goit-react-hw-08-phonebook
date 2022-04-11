const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getCurrentUser = state => state.auth.isRefreshingCurrentUser;

const authSelectors = { getIsLoggedIn, getUserName, getCurrentUser };

export default authSelectors;
