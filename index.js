const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const rootElement = document.querySelector("#root");

    const h1 = document.createElement("h1")
    
    h1.innerText = "FREELANCERS"

    rootElement.appendChild(h1)
    
    const p = document.createElement("p");
    p.innerText = "Here is the list of users:";
    root.appendChild(p);

    const ul = document.createElement("ul");
    root.appendChild(ul);
    let li = "";
  for (user of users){
    li = document.createElement("li");
    li.innerText = '${users.name}, ${users.age}, ${users.occupation}';
    ul.appendChild(li);
  }
}

//call the main function
main();

