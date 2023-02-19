/**
 * DOM przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 */

// document.

/**
 * obiekt document
 */

/**
 * Tworzenie elementu
 */

const divElement = document.createElement("div");

divElement.classList.add("super-div");

// divElement.classList.contains('super-div'); // sprawdzanie czy klasa instenieje zwraca true/false

// divElement.classList.replace("super-div", "super-span");

// divElement.classList.remove('super-div')

divElement.innerHTML = `<h1 id="heading">Hello Pythonowcy
<input class="checkbox" type="checkbox" checked/>
<input class="checkbox" type="checkbox" />
<input class="checkbox" type="checkbox" />
<input class="checkbox" type="checkbox" checked/>
<button id="clickMe">Click Me</button> </h1>`;

// document.body.appendChild(divElement);

/**
 * Pobieranie elementów z dokumentu HTML
 */
// 1)
// document.querySelector("#clickMe").remove();
// 2)
// const button = document.getElementById("clickMe");

// button.style.backgroundColor = "yellow";

// const heading = document.getElementById("heading");

// const value = heading.innerText;

// console.log(value);
// 3)
// const checkboxes = document.querySelectorAll(".checkbox");

// checkboxes.forEach((checkbox) => {
//   if (checkbox.checked) {
//     console.log("ten checkbox jest zaznaczony");
//   }
// });

// console.log(checkbox);

// document.body.remove()

/**
      <tr>
          <td>Jack</td>
          <td>Doe</td>
          <td>13</td>
          <td><button role="button">&times;</button></td>
        </tr>
 */

/**
 * Wstawianie elementu
 *
 * appendChild
 *
 * innerHTML
 *
 */

/**
 * Usuwanie elementu
 */

/**
 * manipulowanie classami
 */

/**
 * Eventy, event listnery - interakcja z UI
 */

// const deleteButton = document.querySelector('#deleteRow')
// const deleteButton = document.getElementById("deleteRow");

// deleteButton.addEventListener("click", (event) => {
//   event.target.parentNode.parentNode.remove();
//   console.log(event);
//   console.log("test");
// });

// const usersStaticTable = document.getElementById("usersStaticTable");

// usersStaticTable.addEventListener("click", (event) => {
//   /**
//    * wersja ze sprawdzaniem klasy
//    * jezeli wcisnięty elemnt posiada klase deleteButton to usun "dziadka"
//    */
//   if (event.target.classList.contains("deleteButton")) {
//     event.target.parentNode.parentNode.remove();
//   }
//   /**
//    * wersja z tagName
//    */
//   // if (event.target.tagName === "BUTTON") {
//   //   event.target.parentNode.parentNode.remove();
//   // }
//   console.log(event.target);
// });

let users = [];

const dynamicUserForm = document.getElementById("dynamicUserForm");

dynamicUserForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;

  console.log(name, lastname, age);

  const newUser = {
    id: Math.random(),
    name: name,
    lastname: lastname,
    age: age,
  };

  let lsUsers = JSON.parse(localStorage.getItem("users"));

  if (lsUsers !== null) {
    lsUsers.push(newUser);
  } else {
    lsUsers = [newUser];
  }

  localStorage.setItem("users", JSON.stringify(lsUsers));

  users.push(newUser);

  /**
   * 1) stwórz tr-ki i użyj pola innerHtml w elemencie tbody
   */

  let htmlTableRows = "";

  for (let i = 0; i < users.length; i++) {
    htmlTableRows =
      htmlTableRows +
      `<tr>
    <td>${users[i].name}</td>
    <td>${users[i].lastname}</td>
    <td>${users[i].age}</td>
    <td><button class="deleteRow" id="${users[i].id}">Delete</button></td>
    </tr>`;
  }

  const tbody = document.getElementById("dynamic-users");

  tbody.innerHTML = htmlTableRows;

  event.target.reset();
});

const userDynamicTable = document.getElementById("dynamic-users");

userDynamicTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteRow")) {
    event.target.parentNode.parentNode.remove();

    const userId = event.target.id;

    console.log(userId);

    users = users.filter((user) => user.id !== Number(userId));

    localStorage.setItem("users", JSON.stringify(users));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let lsUsers = JSON.parse(localStorage.getItem("users"));

  if (lsUsers !== null) {
    users = lsUsers;

    let htmlTableRows = "";

    for (let i = 0; i < users.length; i++) {
      htmlTableRows =
        htmlTableRows +
        `<tr>
      <td>${users[i].name}</td>
      <td>${users[i].lastname}</td>
      <td>${users[i].age}</td>
      <td><button class="deleteRow" id="${users[i].id}">Delete</button></td>
      </tr>`;
    }

    const tbody = document.getElementById("dynamic-users");

    tbody.innerHTML = htmlTableRows;
  }
});
