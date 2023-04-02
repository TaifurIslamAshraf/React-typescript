type UsersProps = {
  name: string;
  age: number;
  isRegisterd: boolean;
};

const Users = ({ name, age, isRegisterd }: UsersProps) => {
  return (
    <div>
      <h2>User Managment</h2>
      <h4>Name: {name}</h4>
      <h4>age: {age}</h4>
      {isRegisterd ? <p>User is registerd</p> : <p>User is not registerd</p>}
    </div>
  );
};

export default Users;
