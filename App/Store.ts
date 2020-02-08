import { TodoStore } from "./stores/TodoStore";

// this is our root store for mobx and will combine all stores for each of our components
export const createStore = () => {const todoItems = ["hello"];
    const store = {
      TodoStore: new TodoStore()
    };
  
    return store;
  };

export type TStore = ReturnType<typeof createStore>
