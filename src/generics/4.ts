type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T): User {
  const newUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...newUser, ...initialValues };
}
console.log(
  createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
  })
);
