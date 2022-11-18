/*eslint-disable no-undef*/
const todoList = require("../todo");
const { arr, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing the todo list", () => {
  beforeAll(() => {
    add({
      title: "Play cricket",
      completed: true,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  add({
    title: "Finish wd level 4",
    completed: false,
    dueDate: new Date().toLocaleDateString("en-CA"),
  });
  let length = arr.length;
  test("Checks for creation of the todo", () => {
    expect(arr.length).toBe(2);
  });
  test("Checks marking a todo as completed.", () => {
    markAsComplete(1);
    expect(arr[1].completed).toBe(true);
  });

  let listofoverdue = overdue();
  test("Checks retrieval of overdue items.", () => {
    expect(
      listofoverdue.every((todo) => {
        return todo.dueDate < new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  let listofduetoday = dueToday();
  test("Checks retrieval of due today items.", () => {
    expect(
      listofduetoday.every((todo) => {
        return todo.dueDate === new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  let listofduelater = dueLater();
  test("Checks retrieval of due later items.", () => {
    expect(
      listofduelater.every((todo) => {
        return todo.dueDate > new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
});
