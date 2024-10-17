// todo_manager.ts

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export class TodoManager {
  private todos: Todo[] = [];
  private idCounter = 1;

  addTask(task: string): Todo {
    const todo: Todo = { id: this.idCounter++, task, completed: false };
    this.todos.push(todo);
    return todo;
  }

  completeTask(id: number): boolean {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
      return true;
    }
    return false;
  }

  getTasks(): Todo[] {
    return this.todos;
  }
}
