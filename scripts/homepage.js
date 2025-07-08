const courses = [
    { name: "WDD 131", completed: true, credits: 3 },
    { name: "WDD 130", completed: true, credits: 3 },
    { name: "CSE 210", completed: true, credits: 3 },
    { name: "CSE 110", completed: true, credits: 3}
    { name: "WDD 231", completed: false, credits: 3 },
    { name: "CSE 121", completed: true, credits: 4 }
];

function displayCourses() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.textContent = `${course.name} - ${course.completed ? 'Completed' : 'Not Completed'}`;
        courseDiv.style.color = course.completed ? 'green' : 'red';
        courseList.appendChild(courseDiv);
    });
}

displayCourses();
