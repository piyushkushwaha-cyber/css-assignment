const form = document.getElementById("userForm");


const outputDiv = document.createElement("div");
outputDiv.id = "output";
outputDiv.style.marginTop = "30px";
document.querySelector(".card").appendChild(outputDiv);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  const phone = document.getElementById("telephone").value.trim();
  const country = document.getElementById("country").value;
  const address = document.getElementById("address").value.trim();

  const genderEl = document.querySelector('input[name="gender"]:checked');
  const techStack = document.getElementById("techStack").value;
  if (
    name === "" ||
    email === "" ||
    age === "" ||
    phone === "" ||
    country === "" ||
    !genderEl ||
    techStack === ""||
    address === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  
  outputDiv.innerHTML = `
    <h3>Submitted Data</h3>
    <table border="1" cellpadding="8" cellspacing="0" width="100%">
      <tr><th align="left">Name</th><td>${name}</td></tr>
      <tr><th align="left">Email</th><td>${email}</td></tr>
      <tr><th align="left">Age</th><td>${age}</td></tr>
      <tr><th align="left">Phone</th><td>${phone}</td></tr>
      <tr><th align="left">Country</th><td>${country}</td></tr>
      <tr><th align="left">Gender</th><td>${genderEl.value}</td></tr>
      <tr><th align="left">Tech Stack</th><td>${techStack}</td></tr>
      <tr><th align="left">Address</th><td>${address}</td></tr>
    </table>
  `;
});


form.addEventListener("reset", function () {
  outputDiv.innerHTML = "";
});
