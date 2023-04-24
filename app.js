function isLoggedInOrSubscribed(loggedIn, subscribed) {
  return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
}
console.log(isLoggedInOrSubscribed('LOGGED_IN', 'SUBSCRIBED'));
