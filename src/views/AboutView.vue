<template>
  <div class="about">
    <div class="content">
      <h1>Welcome to Todo's App</h1>
      <p>
        This is a simple and efficient to-do application built with Vue 3. It allows you to manage your tasks easily,
        and your progress is saved even if you close your browser.
      </p>

      <h2>How It Works</h2>
      <ul>
        <li><strong>Create:</strong> Use the input field to add a new task. It will be saved with a unique ID.</li>
        <li><strong>Check Complete:</strong> Use the checkbox to mark a task as completed or not completed.</li>
        <li><strong>Edit:</strong> Click the pencil icon to edit a task. Click the check icon to save the changes.</li>
        <li><strong>Delete:</strong> Remove tasks by clicking the trash icon — your list updates instantly.</li>
        <li><strong>Saved Todos:</strong> Your tasks are saved automatically. Each time you come back the list is still
          there</li>
        <li><strong>Completion Message:</strong> Once all todos are marked as done, a celebratory message appears 🎉
        </li>
      </ul>

      <p>
        Use this app to boost your productivity. Everything is reactive — so changes happen live, instantly!
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  background-color: #fafafa;
}

.content {
  max-width: 700px;

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: #333;
  }

  h2 {
    margin-top: 24px;
    font-size: 1.5rem;
    color: #41b080;
  }

  ul {
    padding-left: 20px;
    margin-top: 12px;
    line-height: 1.8;
  }

  ul li {
    margin-bottom: 8px;
  }

  p {
    margin-top: 20px;
    font-size: 1rem;
    color: #555;
  }
}
</style>
