var hobbies = [];
var doubts = [];

function addHobbie() {
  const hobbie = document.getElementById("new-hobbie");
  if (!!hobbie.value.trim()) {
    var newHobbie = {
      nome: hobbie.value,
    };
    hobbies.push(newHobbie);
    hobbie.value = "";
    listarHobbies();
  }
}

function listarHobbies() {
  var list = document.getElementById("list-of-hobbies");

  list.innerHTML = "";

  for (var i = 0; i < hobbies.length; i++) {
    var hobbie = hobbies[i];
    var hob = document.createElement("h3");
    hob.innerHTML = hobbie.nome;
    var item = document.createElement("li");
    item.appendChild(hob);
    list.appendChild(item);
  }
}

function addDoubt() {
  const doubt = document.getElementById("new-doubt");
  if (!!doubt.value.trim()) {
    var newDoubt = {
      nome: doubt.value,
    };
    doubts.push(newDoubt);
    doubt.value = "";
    listDoubts();
  }
}

function listDoubts() {
  var list = document.getElementById("list-of-doubts");

  list.innerHTML = "";

  for (var i = 0; i < doubts.length; i++) {
    var doubt = doubts[i];
    var dbt = document.createElement("h3");
    dbt.innerHTML = doubt.nome;
    var item = document.createElement("li");
    item.appendChild(dbt);
    list.appendChild(item);
  }
}

listarHobbies();
listDoubts();
