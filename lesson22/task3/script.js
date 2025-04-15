let students = [
    { name: "Маша", grade: 5 },
    { name: "Петя", grade: 3 },
    { name: "Саша", grade: 4 }
];

let goodStudents = 0;

function isGoodStudent(grade) {
    return grade >= 4
}

for (let i = 0; i < students.length; i++) {
    if (isGoodStudent(student[i].grade)) {
        console.log(`${students[i].name}: хорошист`);
        goodStudents = goodStudents + 1;
    } else {
        console.log(`${students[i].name}: не хорошист`);
    }
}

console.log(`Хороших студентов: ${goodStdents}`));