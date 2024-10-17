// todo_manager_test.ts

import { TodoManager } from "./todo_manager.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Add a new task", () => {
  const manager = new TodoManager();
  const task = manager.addTask("Learn Deno");

  assertEquals(task.task, "Learn Deno");
  assertEquals(task.completed, false);
  assert(task.id > 0);
});

Deno.test("Complete a task", () => {
  const manager = new TodoManager();
  const task = manager.addTask("Write Tests");

  const result = manager.completeTask(task.id);

  assert(result);
  assertEquals(manager.getTasks()[0].completed, true);
});

Deno.test("Get all tasks", () => {
  const manager = new TodoManager();
  manager.addTask("Task 1");
  manager.addTask("Task 2");

  const tasks = manager.getTasks();
  assertEquals(tasks.length, 2);
});
