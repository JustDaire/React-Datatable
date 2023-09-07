import { useEffect, useState } from 'react';

export function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: 'Todo ' + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

export function filterTodos(todos, tab) {
  console.log(
    '[ARTIFICIALLY SLOW] Filtering ' +
      todos.length +
      ' todos for "' +
      tab +
      '" tab.'
  );
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter((todo) => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else if (tab === 'completed') {
      return todo.completed;
    }
  });
}

export function getCustomers(limit, page) {
  const [state, setState] = useState({
    data: [],
    limit: limit,
    activePage: page,
  });
  // let startTime = performance.now();
  // while (performance.now() - startTime < 500) {
  //   // Do nothing for 500 ms to emulate extremely slow code
  // }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`)
      .then((response) => response.json())
      .then((json) => {
        console.log('json', json);
        setState((prev) => ({
          ...prev,
          data: json,
        }));
      });
  }, [state.limit]);
  // console.log('filtered', state);
  return limit;
}
