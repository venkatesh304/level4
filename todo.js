const todoList = () => {
  arr = [];
  const add = (todoItem) => {
    arr.push(todoItem);
  };
  const markAsComplete = (index) => {
    arr[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return arr.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const dueToday = () => {
    return arr.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const dueLater = () => {
    return arr.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n")
      .trim();
  };

  return {
    arr,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
