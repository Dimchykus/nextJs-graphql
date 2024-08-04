import { getClient } from "@/lib/apollo";
import { CREATE_USER } from "@/lib/apollo/mutations";

interface Props {}

const CreateUserForm: React.FC<Props> = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const data = await getClient().mutate({
      mutation: CREATE_USER,
      variables: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
      },
    });

    console.log("CREATE_USER", data);
  };

  return (
    <form action={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUserForm;
