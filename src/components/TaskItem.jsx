function TaskItem({ a, item, onDelete, onToggle }) {
  return (
    <div>
      <table className="tabel-data">
        <tbody>
          <tr id="tr">
            <td>{item.task}</td>
            <td>{item.taskAssignedTo}</td>
            <td>
              <button onClick={() => onToggle(a)}>
                {/* {item.completed ? "Mark as Pending" : "Mark as Completed"} */}
                {item.completed ? (
                  <span style={{ backgroundColor: "green" }}>
                    Mark as Pending
                  </span>
                ) : (
                  <span
                    style={{
                      backgroundColor: "rgb(191, 191, 25)",
                      color: "rgb(222, 12, 71)",
                    }}
                  >
                    Mark as Completed
                  </span>
                )}
              </button>
            </td>
            <td>
              <button onClick={() => onDelete(a)} id="delete">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TaskItem;
