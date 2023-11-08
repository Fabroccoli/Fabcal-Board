const containerTask = document.getElementById("container-task");

class Task {
  constructor() {
    this.nameInput = document.createElement("input");
    this.nameInput.type = "text";
    this.nameInput.placeholder = "Nom";

    this.date_begin = document.createElement("input");
    this.date_begin.type = "date";

    this.date_end = document.createElement("input");
    this.date_end.type = "date";

    this.commentInput = document.createElement("textarea");
    this.commentInput.placeholder = "Commentaire";
  }

  createInputElement() {
    const container = document.createElement("form");
    container.className = "formulaire";
    container.appendChild(this.nameInput);
    container.appendChild(this.date_begin);
    container.appendChild(this.date_end);
    container.appendChild(this.commentInput);
    return container;
  }
}

const task = new Task();

containerTask.appendChild(task.createInputElement());
