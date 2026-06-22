import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";
import { useState } from "react";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

const GET_USER_ID = gql`
  query GetUserByID($id: ID!) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
    }
  }
`;

function App() {
  const {
    data: getUsersData,
    error: getUsersError,
    loading: getUsersLoading,
  } = useQuery(GET_USERS);
  const { data: getUserByIdData, loading: getUserByIdLoading } = useQuery(
    GET_USER_ID,
    {
      variables: { id: "2" },
    },
  );

  const [createUser] = useMutation(CREATE_USER);
  const [newUser, setNewUser] = useState({
    name: "",
    age: 0,
    isMarried: false,
  });
  const handleSubmit = async () => {
    const user = await createUser({
      variables: { ...newUser, age: Number(newUser.age) },
    });
    console.log(user);
  };

  if (getUsersLoading) return <h1>Loading...</h1>;

  if (getUsersError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Name.."
        onChange={(e) =>
          setNewUser((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Age.."
        onChange={(e) =>
          setNewUser((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <button onClick={handleSubmit}>Create User</button>
      <h1>Chosen User:</h1>
      <div>
        {getUserByIdLoading ? (
          <p>Loading user...</p>
        ) : (
          <>
            {getUserByIdData.getUserById.name} -
            {getUserByIdData.getUserById.age}
          </>
        )}
      </div>
      <div>
        <h1>Users</h1>
        {getUsersData.getUsers.map((user) => (
          <div>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>Is this user married : {user.isMarried ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
