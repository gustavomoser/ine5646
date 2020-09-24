var users = [
  {
    nome: "user",
    user: "user",
    password: "abc123",
  },
];

const posts = [
  { title: "post 1", content: "content1" },
  { title: "post 1", content: "content1" },
  { title: "post 1", content: "content1" },
];

const login = document.getElementById("login");
login.addEventListener("click", clear);

const password = document.getElementById("pass");
password.addEventListener("click", clear);

function clear(event) {
  const target = event.target;
  target.value = "";
}

function validaLogin() {
  const l = document.getElementById("login");
  const p = document.getElementById("pass");

  const login = l.value;
  const pw = p.value;

  let logged = false;

  let index = undefined;
  for (let i = 0; i < users.length; i++) {
    if (users[i].user === login && users[i].password === pw) {
      index = i;
      logged = true;
      break;
    }
  }
  if (logged) {
    alert("sucesso! seja bem vindo");
    showContent(index);
  } else {
    alert("login/senha inválidos!");
  }
}

function showContent(index) {
  const nome = users[index].nome;
  const logincontent = document.getElementById("login-area");
  logincontent.innerHTML = "";
  const welcome = document.createElement("p");
  welcome.innerHTML = `Bem vindo, ${nome.bold()}!`;
  logincontent.appendChild(welcome);

  const page = document.getElementById("content-area");
  page.innerHTML = "";
  for (item of posts) {
    const h1 = document.createElement("h1");
    h1.innerHTML = item.title;
    const content = document.createElement("p");
    content.innerHTML = item.content;
    const div = document.createElement("div");
    div.setAttribute("id", "post");
    div.appendChild(h1);
    div.appendChild(content);
    page.appendChild(div);
  }
}
