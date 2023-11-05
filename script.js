const boutoncreatecat = document.getElementById("create-cat");
const conteneurCategorie = document.getElementById("conteneur-categories");

boutoncreatecat.addEventListener("click", function () {
  const newCat = document.createElement("section");
  newCat.className = "new-categorie";

  const inputNameCat = document.createElement("input");
  inputNameCat.type = "text";
  inputNameCat.placeholder = "Nom de la catégorie";

  const boutonValider = document.createElement("button");
  boutonValider.textContent = "Valider";

  boutonValider.addEventListener("click", function () {
    const titreCategorie = document.createElement("h1");
    titreCategorie.textContent = inputNameCat.value;
    newCat.appendChild(titreCategorie);
    conteneurCategorie.appendChild(newCat);
    inputNameCat.value = "";

    newCat.removeChild(inputNameCat);
    newCat.removeChild(boutonValider);

    const boutonAjouter = document.createElement("button");
    boutonAjouter.textContent = "Créer un event";

    const newForm = document.createElement("form");
    newForm.className = "formulaire";

    // Création du champ Nom
    const inputNom = document.createElement("input");
    inputNom.type = "text";
    inputNom.placeholder = "Name";
    inputNom.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
    // Texte Date de Début :
    const textStartDate = document.createElement("text");
    textStartDate.textContent = " Date de début : ";

    // Création du champ Date de début
    const inputStartDate = document.createElement("input");
    inputStartDate.type = "date";

    // Texte Date de Fin :
    const textEndDate = document.createElement("text");
    textEndDate.textContent = " Date de fin: ";

    // Création du champ Date de fin
    const inputEndDate = document.createElement("input");
    inputEndDate.type = "date";
    inputEndDate.placeholder = "Date de fin";

    // Création du commentaire
    const inputCommentaire = document.createElement("textarea");
    inputCommentaire.placeholder = "Commentaire";

    // Création du Bouton Remove
    const boutonRemove = document.createElement("button");
    boutonRemove.className = "remove";
    boutonRemove.textContent = "Remove";
    boutonRemove.addEventListener("click", function () {
      conteneurCategorie.removeChild(newForm);
    });

    newForm.appendChild(inputNom);
    newForm.appendChild(textStartDate);
    newForm.appendChild(inputStartDate);
    newForm.appendChild(textEndDate);
    newForm.appendChild(inputEndDate);
    newForm.appendChild(inputCommentaire);
    newForm.appendChild(boutonRemove);

    boutonAjouter.addEventListener("click", function () {
      conteneurCategorie.appendChild(newForm);
    });

    newCat.appendChild(boutonAjouter);
  });

  newCat.appendChild(inputNameCat);
  newCat.appendChild(boutonValider);
  conteneurCategorie.appendChild(newCat);
});
