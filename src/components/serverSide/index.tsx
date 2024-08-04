import useServerQuery from "@/hooks/useServerQuery";
import { GET_USERS } from "@/lib/apollo/queries.ts";
import { GetUsers } from "@/types";
import CreateUserForm from "./createUserForm";

const ServerSide = async () => {
  const users = await useServerQuery<GetUsers>(GET_USERS);

  return (
    <div>
      <h4>Server Side:</h4>
      <ul>
        {users.data.getAllUsers.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
      <CreateUserForm />
    </div>
  );
};

export default ServerSide;
