const users = [
  {
    id: 0,
    name: "Benjamin",
    age: 32,
  },
  {
    id: 1,
    name: "Peter",
    age: 43,
  },
];

export function UserList () {
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map(user => <UserListItem user={user} key={user.id}/>)}
      </ul>
    </>
  );
}

function UserListItem ({ user }) {
  return <li>{user.name}</li>;
}