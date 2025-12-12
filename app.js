import { jobs, userProfile } from './data.js';

const app = document.getElementById('app');

// State
let state = {
    view: 'feed', // feed, detail, profile
    selectedJobId: null
};

// Icons (SVG strings)
const icons = {
    home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"/></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg>`,
    back: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"/></svg>`
};

// Router
function navigate(view, param = null) {
    state.view = view;
    state.selectedJobId = param;
    render();
    window.scrollTo(0, 0);
}

// Components
function Navbar() {
    return `
        <nav class="nav-bottom">
            <div class="nav-item ${state.view === 'feed' ? 'active' : ''}" onclick="window.navigate('feed')">
                <div class="nav-icon">${icons.home}</div>
                <span>Sprints</span>
            </div>
            <div class="nav-item ${state.view === 'profile' ? 'active' : ''}" onclick="window.navigate('profile')">
                <div class="nav-icon">${icons.user}</div>
                <span>Profile</span>
            </div>
        </nav>
    `;
}

function JobCard(job) {
    const isUrgent = job.urgency.includes('Today') || job.urgency.includes('24h');
    return `
        <div class="card" onclick="window.navigate('detail', ${job.id})">
            <div class="flex justify-between items-center" style="margin-bottom: 8px;">
                <span class="badge ${isUrgent ? 'badge-urgent' : 'badge-skill'}">${job.urgency}</span>
                <span class="text-bold text-action">${job.currency}${job.price}</span>
            </div>
            <h3 class="text-medium" style="margin-bottom: 4px;">${job.title}</h3>
            <p class="text-secondary text-sm">${job.client}</p>
        </div>
    `;
}

function FeedView() {
    return `
        <div class="container" style="padding-bottom: 80px;">
            <div class="flex justify-between items-center" style="margin-bottom: 24px;">
                <h1 class="text-xl text-bold">Find a Sprint</h1>
                <div style="width: 32px; height: 32px; border-radius: 50%; background: #eee; overflow: hidden;">
                    <img src="${userProfile.avatar}" alt="Profile" style="width: 100%; height: 100%;">
                </div>
            </div>
            
            <div style="margin-bottom: 24px;">
                <input type="text" placeholder="Search for tasks..." 
                    style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: var(--radius-full); outline: none;">
            </div>

            <div id="job-list">
                ${jobs.map(job => JobCard(job)).join('')}
            </div>
        </div>
        ${Navbar()}
    `;
}

function DetailView() {
    const job = jobs.find(j => j.id === state.selectedJobId);
    if (!job) return navigate('feed');

    return `
        <div class="container" style="padding-bottom: 80px;">
            <div class="flex items-center" style="margin-bottom: 24px; cursor: pointer;" onclick="window.navigate('feed')">
                <div class="nav-icon" style="width: 24px; margin-right: 8px;">${icons.back}</div>
                <span class="text-medium">Back</span>
            </div>

            <span class="badge badge-urgent" style="margin-bottom: 12px;">${job.urgency}</span>
            <h1 class="text-xl text-bold" style="margin-bottom: 8px;">${job.title}</h1>
            <p class="text-secondary" style="margin-bottom: 24px;">${job.client}</p>

            <div class="card" style="background: #FAFAFA; border: none;">
                <p class="text-secondary" style="margin-bottom: 4px;">Budget</p>
                <p class="text-xl text-bold text-action">${job.currency}${job.price}</p>
            </div>

            <h3 class="text-medium" style="margin-bottom: 8px;">Description</h3>
            <p class="text-secondary" style="margin-bottom: 24px; line-height: 1.6;">${job.description}</p>

            <h3 class="text-medium" style="margin-bottom: 8px;">Skills Required</h3>
            <div class="flex" style="flex-wrap: wrap; gap: 8px; margin-bottom: 32px;">
                ${job.skills.map(skill => `<span class="badge badge-skill">${skill}</span>`).join('')}
            </div>

            <button class="btn btn-primary" onclick="alert('Application Sent! (Mock)')">Apply for Sprint</button>
        </div>
    `;
}

function ProfileView() {
    return `
        <div class="container" style="padding-bottom: 80px;">
            <div class="flex flex-col items-center" style="margin-bottom: 32px; margin-top: 24px;">
                <div style="width: 80px; height: 80px; border-radius: 50%; background: #eee; overflow: hidden; margin-bottom: 16px;">
                    <img src="${userProfile.avatar}" alt="Profile" style="width: 100%; height: 100%;">
                </div>
                <h2 class="text-lg text-bold">${userProfile.name}</h2>
                <p class="text-secondary">${userProfile.university}</p>
            </div>

            <div class="card" style="background: var(--color-action); color: white; text-align: center;">
                <p style="opacity: 0.9; margin-bottom: 4px;">Total Earnings</p>
                <h1 class="text-xl" style="font-size: 32px; font-weight: 700;">${userProfile.currency}${userProfile.earnings}</h1>
            </div>

            <h3 class="text-medium" style="margin-bottom: 16px;">Sprint History</h3>
            <div class="flex flex-col gap-md">
                ${userProfile.history.map(item => `
                    <div class="flex justify-between items-center" style="padding: 12px; background: white; border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                        <div>
                            <p class="text-medium text-sm">${item.title}</p>
                            <p class="text-secondary" style="font-size: 12px;">${item.date}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-bold text-success">+${userProfile.currency}${item.price}</p>
                            <span class="badge" style="background: #E8F5E9; color: #27AE60; font-size: 10px;">${item.status}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        ${Navbar()}
    `;
}

// Render Function
function render() {
    let content = '';
    switch (state.view) {
        case 'feed':
            content = FeedView();
            break;
        case 'detail':
            content = DetailView();
            break;
        case 'profile':
            content = ProfileView();
            break;
    }
    app.innerHTML = content;
}

// Global exposure for inline onclicks
window.navigate = navigate;

// Initial Render
render();