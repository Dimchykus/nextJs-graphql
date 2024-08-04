import { CREATE_USER } from "@/lib/apollo/mutations";
import { useMutation } from "@apollo/client";

interface Props {}

interface UserFormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface UserForm extends HTMLFormElement {
  elements: UserFormElements;
}

const CreateUserForm: React.FC<Props> = () => {
  const [createUser, { error }] = useMutation(CREATE_USER);

  const handleSubmit = (e: React.FormEvent<UserForm>) => {
    e.preventDefault();

    createUser({
      variables: {
        firstName: e.currentTarget.elements.firstName.value,
        lastName: e.currentTarget.elements.lastName.value,
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
