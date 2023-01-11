const addIdeaBtn = document.getElementById('add-idea');
const titleInput = document.getElementById('title-input');
const descriptionInput = document.getElementById('description-input');
const ideasContainer = document.getElementById('ideas-container');

addIdeaBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  appendIdea(title, description);
  clearInputs();
});

ideasContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-idea')) {
    const ideaIDToDelete = parseInt(event.target.getAttribute('data-ideaid'));
    store.deleteIdea(ideaIDToDelete);
    event.target.parentElement.remove();
  }
});

function appendIdea(title, description) {
  const idea = {id: Date.now(), title, description};
  store.addIdea(idea);
  ideasContainer.innerHTML += createIdeaHTML(idea);
}

function clearInputs() {
  titleInput.value = '';
  descriptionInput.value = '';
}

function createIdeaHTML({id, title, description}) {
  return `<section class="idea">
      <h3>${title}</h3>
      <p>${description}</p>
      <button class="delete-idea" data-ideaid=${id}>Delete</button>
    </section>`;
}

function ideasStore() {
  let ideas = [];

  function getIdeas() {
    return ideas;
  }

  function addIdea(idea) {
    ideas.push(idea);
  }

  function deleteIdea(id) {
    ideas = ideas.filter(idea => idea.id !== id);
  }

  return { getIdeas, addIdea, deleteIdea };
}

const store = ideasStore();
