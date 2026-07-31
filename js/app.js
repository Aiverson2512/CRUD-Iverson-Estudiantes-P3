const students = [];

const table =
document.getElementById("studentTable");

function renderStudents(){

    table.innerHTML = "";

    students.forEach(student => {

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.career}</td>
        </tr>
        `;

    });

}

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const student = {

        name: document.getElementById("name").value,

        career: document.getElementById("career").value

    };

    students.push(student);

    renderStudents();

    console.log(students);

    form.reset();

});