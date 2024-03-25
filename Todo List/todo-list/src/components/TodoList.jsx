export default function Todolist({ userData, handleDelete }) {
  return (
    <div>
      <ul>
        {userData.map((element, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              {element}{" "}
              <button onClick={() => handleDelete(index)}>Delete</button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
