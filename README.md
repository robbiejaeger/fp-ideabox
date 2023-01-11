# Functional Ideabox

An exercise to complete an Ideabox project using concepts from functional programming.

## Reflections

### Pure Functions

The HTML generator for an idea:

```js
function createIdeaHTML({id, title, description}) {
  return `<section class="idea">
      <h3>${title}</h3>
      <p>${description}</p>
      <button class="delete-idea" data-ideaid=${id}>Delete</button>
    </section>`;
}
```

### Higher Order Functions


### Closures

The idea "store" uses a closure to hold onto the ideas, and the ideas array con be modified only by the functions that are returned by that store's closure.

### Curried Functions


### Composition


### Additional Questions

1. How did you go about creating your data model? Where is it in your code?
2. How well were you able to separate your data model from the DOM logic? Where is that separation in the code?