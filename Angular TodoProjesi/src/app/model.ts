import { TodoItem } from './todoItem';
export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Todo Uygulaması';
    this.items = [
      { id: 1, description: 'Kahvaltı', action: true },
      { id: 2, description: 'Spor', action: true },
      { id: 3, description: 'Alışveriş', action: false },
    ];
  }
}
