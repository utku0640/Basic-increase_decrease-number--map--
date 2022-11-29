import { useState } from "react";
import data from "./data";
import "./index.css";

function App() {
  const [users, setUsers] = useState(data);

  const handleIncrease = (userSalary) => {
    setUsers(
      users.map((user) =>
        user.id === userSalary ? { ...user, salary: user.salary + 1 } : user
      )
    );
  };

  const handleDecrease = (userSalary) => {
    setUsers(
      users
        .map((user) =>
          user.id === userSalary ? { ...user, salary: user.salary - 1 } : user
        )
        .filter((user) => user.salary !== 0)
    );
  };

  return users.map((user) => {
    return (
      <div className="container">
        <div className="container2">
          <h1>{user.name}</h1>
          <p>Age:{user.age}</p>
          <h3>Salary:{user.salary}</h3>

          <button
            className="btn btn-increase"
            onClick={() => handleIncrease(user.id)}
          >
            +
          </button>

          <button
            className="btn btn-decrease"
            onClick={() => handleDecrease(user.id)}
          >
            -
          </button>
        </div>
      </div>
    );
  });
}

export default App;
