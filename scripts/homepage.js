const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p>${course.description}</p>
            <p>Credits: ${course.credits}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
        courseList.appendChild(courseCard);
    });
}

// Function to set the current year and last modified date
function setFooterInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
}

// Initial function calls
displayCourses();
setFooterInfo();
