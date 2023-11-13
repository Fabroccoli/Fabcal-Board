const containerTask = document.getElementById("container-task");

let TaskData = [];

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

    this.validateButton = document.createElement("button");
    this.validateButton.textContent = "Valider";
  }

  createInputElement() {
    const container = document.createElement("form");
    container.className = "formulaire";
    container.appendChild(this.nameInput);
    container.appendChild(this.date_begin);
    container.appendChild(this.date_end);
    container.appendChild(this.commentInput);
    container.appendChild(this.validateButton);
    return container;
  }
  ClickValidateButton() {
    this.validateButton.addEventListener("click", () => {
      event.preventDefault();
      const taskComplete = {
        name: this.nameInput.value,
        dateBegin: this.date_begin.value,
        dateEnd: this.date_end.value,
        comment: this.commentInput.value,
      };
      TaskData.push(taskComplete);
      console.log(TaskData);
    });
  }
}

const task = new Task();

task.ClickValidateButton();
containerTask.appendChild(task.createInputElement());
