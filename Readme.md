# kazi-quest

This presents my implementation of a simple Todo App in **VUE 3** and answers to the tehcnical questions asked in the coding test.

Checkout the [live example](https://vitejs.dev/config/) of this project.


## Technical Answers

1. Time spent on the coding test
* I spent 2 days on this in between other projects.
2. What to add if given more time
* I already added a scenario where the filter items are only visble if they asre actionable e.g **Completed filter** is only visble if **completed tasks** exist.
3. Most useful feature added to vue3
* I'm not sure whether to call it a feature but, it would have to be the introduction of the **setup()** hook for the new **Composition API**. A snippet of the same is shown below:

```js
import { ref } from 'vue'
import { useTodoListStore } from "@/stores/useTodoListStore";

export default {
  setup() {
    const todo = ref({ completed: false, item: '' });
    const store = useTodoListStore();
    const todoSubmit = () => {
      if (todo.value.item.trim().length === 0) {
        return;
      }
      store.addTodo(todo.value);
      todo.value = { completed: false, item: '' }
    };
  },
}
```

4. How to track a perfomance issue in production & how often it has been implemented.
* Apart from Pagespeed Insights, I would use Sentry to track perfomance upon deployment and over time.
5. My option on the overall test: Any difficulties / suggestions
* Still exploring **vue3**, the test was quite enjoyable and the UI for this one was quite appealing. I'm a fullstack dev and a self proclaimed designer of sorts so I'd probably just recommend a bit more flexibility with the style guide as well as with the preset features to accurately gauge the creativity and perfomance of each applicant. 


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
