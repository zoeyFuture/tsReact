const withUser = WrappedComponent => {
  const user = sessionStorage.getItem('user');
  return props => <WrappedComponent user={user} {...props} />;
}

const UserPage = props => (
  <div class="user-container">
    <p>My name is {props.user}</p>
  </div>
);

export default withUser(UserPage);