const students = [];

const table = document.getElementById("studentTable");
// Creamos una variable para guardar el índice del estudiante que estamos editando (-1 significa que no estamos editando ninguno)
let editIndex = -1;

function renderStudents(){

    table.innerHTML = "";

    students.forEach((student, index) => {

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.career}</td>
            <td>
                <button type="button" onclick="editStudent(${index})">Editar</button>
            </td>
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

    if (editIndex === -1) {
        // Si es -1, agregamos un estudiante nuevo
        students.push(student);
    } else {
        // Si no es -1, reemplazamos los datos del estudiante en ese índice
        students[editIndex] = student;
        editIndex = -1; // Volvemos a modo normal
    }

    renderStudents();

    console.log(students);

    form.reset();

});

// Función para pasar los datos al formulario al presionar "Editar"
function editStudent(index) {
    document.getElementById("name").value = students[index].name;
    document.getElementById("career").value = students[index].career;
    editIndex = index;
}