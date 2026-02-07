import { useContext, useState } from "react";
import { AppContext } from "../context/ErrandContext";

export default function Profile() {
  const { user, setUser } = useContext(AppContext);
  const [edit, setEdit] = useState(user || {});

  if (!user) return <p>No profile found</p>;

  return (
    <div>
      <input value={edit.name} onChange={e => setEdit({ ...edit, name: e.target.value })} />
      <input value={edit.email} onChange={e => setEdit({ ...edit, email: e.target.value })} />
      <input value={edit.phone} onChange={e => setEdit({ ...edit, phone: e.target.value })} />

      <button onClick={() => setUser(edit)}>Update Profile</button>
    </div>
  );
}
