"use client";

import { Suspense, useState } from "react";
import UsersList from "./usersList";
import CreateUserForm from "./createUserForm";

const ClientSide = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h4>Client Side:</h4>
      <input
        type="text"
        placeholder="Search users"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList name={value} />
      </Suspense>

      <CreateUserForm />
    </div>
  );
};

export default ClientSide;
