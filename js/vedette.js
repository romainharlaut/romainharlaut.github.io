document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  const projectsArray = Array.from(projects);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const shuffled = shuffle(projectsArray);

  projectsArray.forEach((project) => (project.style.display = "none"));

  shuffled.slice(0, 3).forEach((project) => (project.style.display = "block"));
});
