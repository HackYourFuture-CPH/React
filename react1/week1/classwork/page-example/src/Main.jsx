import { UserList } from "./UserList";

export default function Main () {
  return <main>
    <div className="sidebar">sidebar</div>
    <div className="main-content">
      <UserList />
    </div>
  </main>;
}