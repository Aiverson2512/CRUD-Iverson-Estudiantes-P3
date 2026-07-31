const students = [];

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const student = {

        name: document.getElementById("name").value,

        career: document.getElementById("career").value

    };

    students.push(student);

    console.log(students);

    form.reset();

});