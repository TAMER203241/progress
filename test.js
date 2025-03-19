const lessonsData = [
    {
        id: 1,
        title: "Write / Read",
        description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
        duration: "45 minutes",
        type: "video",
        completed: true,
        content: "This comprehensive introduction covers the fundamental building blocks of web development..."
    },
    {
        id: 2,
        title: "If / If else",
        description: "Deep dive into closures, promises, and async/await patterns.",
        duration: "60 minutes",
        type: "reading",
        completed: true,
        content: "Understanding advanced JavaScript concepts is crucial for modern web development..."
    },
    {
        id: 3,
        title: " Do While / While do ",
        description: "Master the art of creating websites that work on any device.",
        duration: "30 minutes",
        type: "interactive",
        completed: false,
        content: "Learn how to create responsive layouts that adapt to different screen sizes..."
    },
    {
        id: 4,
        title: "For",
        description: "Techniques to make your websites faster and more efficient.",
        duration: "50 minutes",
        type: "video",
        completed: false,
        content: "Discover strategies to optimize your website's loading speed and performance..."
    },
    {
        id: 5,
        title: " Function ",
        description: "Learn about Flexbox, Grid, and modern CSS features.",
        duration: "40 minutes",
        type: "reading",
        completed: false,
        content: "Explore the power of modern CSS layout techniques and features..."
    },
    {
        id: 6,
        title: "Procidur",
        description: "Make your websites accessible to everyone.",
        duration: "35 minutes",
        type: "interactive",
        completed: false,
        content: "Understanding web accessibility guidelines and implementation strategies..."
    }
];

function renderLessons() {
    const container = document.getElementById('lessonContainer');
    container.innerHTML = lessonsData.map(lesson => `
        <div class="lesson-card bg-white rounded-lg p-6 cursor-pointer shadow-sm" onclick="openLesson(${lesson.id})">
            <div class="flex items-start justify-between mb-4">
                <div class="w-8 h-8 flex items-center justify-center rounded-full ${lesson.completed ? 'bg-green-100' : 'bg-gray-100'}">
                    <i class="ri-${getTypeIcon(lesson.type)} ${lesson.completed ? 'text-green-600' : 'text-gray-600'}"></i>
                </div>
                <span class="text-sm text-gray-500">${lesson.duration}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">${lesson.title}</h3>
            <p class="text-gray-600 text-sm mb-4">${lesson.description}</p>
            <div class="flex items-center gap-2">
                <div class="w-6 h-6 flex items-center justify-center rounded-full ${lesson.completed ? 'bg-green-100' : 'bg-gray-100'}">
                    <i class="ri-${lesson.completed ? 'check-line text-green-600' : 'time-line text-gray-600'}"></i>
                </div>
                <span class="text-sm ${lesson.completed ? 'text-green-600' : 'text-gray-600'}">${lesson.completed ? 'Completed' : 'In Progress'}</span>
            </div>
        </div>
    `).join('');
}

function getTypeIcon(type) {
    switch(type) {
        case 'video': return 'video-line';
        case 'reading': return 'book-open-line';
        case 'interactive': return 'game-line';
        default: return 'file-line';
    }
}

function openLesson(id) {
    const lesson = lessonsData.find(l => l.id === id);
    const modal = document.getElementById('lessonModal');
    const checkbox = document.getElementById('completionCheckbox');
    
    document.getElementById('modalTitle').textContent = lesson.title;
    document.getElementById('modalContent').innerHTML = lesson.content;
    checkbox.checked = lesson.completed;
    
    checkbox.onchange = (e) => {
        lesson.completed = e.target.checked;
        renderLessons();
    };
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('lessonModal').style.display = 'none';
}

renderLessons();
