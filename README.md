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

I didn't create any higher-order functions from scratch, but I'm utilizing `filter` in the idea data store.

```js
function deleteIdea(id) {
  ideas = ideas.filter(idea => idea.id !== id);
}
```

### Closures

The idea "store" uses a closure to hold onto the ideas, and the ideas array con be modified only by the functions that are returned by that store's closure.

### Curried Functions

None that I know of.

### Composition

None that I know of.

### Additional Questions

1. How did you go about creating your data model? Where is it in your code?

The data model is centered around `ideas`, which is an array of `idea` objects. The collection of ideas is held within a closure. So the array of ideas cannot be manipulated directly. Instead, there are functions that are exposed via the closure that can edit/view the ideas array.

2. How well were you able to separate your data model from the DOM logic? Where is that separation in the code?

The ideas are stored and altered in a closure - so the manipulation of the data itself is separate from the DOM logic. However, the action to change the data are ultimately triggered from DOM logic.