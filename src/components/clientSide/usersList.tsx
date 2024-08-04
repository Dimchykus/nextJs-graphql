import { GET_USERS } from "@/lib/apollo/queries.ts";
import { DataStructure, GetUsers } from "@/types";
import { useSuspenseQuery } from "@apollo/client";

interface Props {
  name: string;
}

const UsersList: React.FC<Props> = ({ name }) => {
  const {
    data: { getAllUsers },
  }: DataStructure<GetUsers> = useSuspenseQuery(GET_USERS, {
    variables: { name },
  });

  return (
    <ul>
      {getAllUsers.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
