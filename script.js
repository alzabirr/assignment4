// Core Logic for Job Application Tracker

document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const jobList = document.getElementById('job-list');
    const totalCountEl = document.getElementById('total-count');
    const interviewCountEl = document.getElementById('interview-count');
    const rejectedCountEl = document.getElementById('rejected-count');
    const availableJobsCountEl = document.getElementById('available-jobs-count');
    const noJobsContainer = document.getElementById('no-jobs-container');

    const allTab = document.getElementById('all-tab');
    const interviewTabBtn = document.getElementById('interview-tab-btn');
    const rejectedTabBtn = document.getElementById('rejected-tab-btn');

    let currentTab = 'all';

    // Helper: Update Dashboard Counters
    const updateDashboard = () => {
        const cards = document.querySelectorAll('.job-card');
        const interviewCount = document.querySelectorAll('.job-card[data-status="interview"]').length;
        const rejectedCount = document.querySelectorAll('.job-card[data-status="rejected"]').length;

        totalCountEl.textContent = cards.length;
        interviewCountEl.textContent = interviewCount;
        rejectedCountEl.textContent = rejectedCount;

        // Update main section count based on current tab
        let visibleCount = 0;
        cards.forEach(card => {
            if (currentTab === 'all') {
                visibleCount++;
            } else if (card.getAttribute('data-status') === currentTab) {
                visibleCount++;
            }
        });
        availableJobsCountEl.textContent = `${visibleCount} jobs`;

        // Toggle Empty State Visibility
        if (visibleCount === 0) {
            noJobsContainer.classList.remove('hidden');
        } else {
            noJobsContainer.classList.add('hidden');
        }
    };

    // Helper: Apply Filtering based on Tab
    const applyFilter = (tab) => {
        currentTab = tab;
        const cards = document.querySelectorAll('.job-card');

        cards.forEach(card => {
            const status = card.getAttribute('data-status');
            if (tab === 'all') {
                card.style.display = 'block';
            } else if (status === tab) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Update Tab Active Styles
        [allTab, interviewTabBtn, rejectedTabBtn].forEach(btn => {
            btn.classList.remove('btn-primary', 'text-white');
            btn.classList.add('text-black');
        });

        if (tab === 'all') {
            allTab.classList.add('btn-primary', 'text-white');
            allTab.classList.remove('text-black');
        } else if (tab === 'interview') {
            interviewTabBtn.classList.add('btn-primary', 'text-white');
            interviewTabBtn.classList.remove('text-black');
        } else if (tab === 'rejected') {
            rejectedTabBtn.classList.add('btn-primary', 'text-white');
            rejectedTabBtn.classList.remove('text-black');
        }

        updateDashboard();
    };

    // Event Delegation for Job Cards
    jobList.addEventListener('click', (e) => {
        const target = e.target;
        const card = target.closest('.job-card');
        if (!card) return;

        const statusIndicator = card.querySelector('.status-indicator');

        // Handle Delete
        if (target.classList.contains('delete-btn')) {
            card.remove();
            updateDashboard();
            return;
        }

        // Handle Interview Button
        if (target.classList.contains('interview-btn')) {
            const currentStatus = card.getAttribute('data-status');
            if (currentStatus === 'interview') {
                card.setAttribute('data-status', 'none');
                statusIndicator.textContent = 'Not Applied';
                statusIndicator.className = 'status-indicator btn btn-active mt-4 px';
            } else {
                card.setAttribute('data-status', 'interview');
                statusIndicator.textContent = 'Interview';
                statusIndicator.className = 'status-indicator btn btn-success mt-4 px text-white';
            }
            applyFilter(currentTab); // Re-apply filter if in a specific tab
            return;
        }

        // Handle Rejected Button
        if (target.classList.contains('rejected-btn')) {
            const currentStatus = card.getAttribute('data-status');
            if (currentStatus === 'rejected') {
                card.setAttribute('data-status', 'none');
                statusIndicator.textContent = 'Not Applied';
                statusIndicator.className = 'status-indicator btn btn-active mt-4 px';
            } else {
                card.setAttribute('data-status', 'rejected');
                statusIndicator.textContent = 'Rejected';
                statusIndicator.className = 'status-indicator btn btn-error mt-4 px text-white';
            }
            applyFilter(currentTab);
            return;
        }
    });

    // Tab Button Listeners
    allTab.addEventListener('click', () => applyFilter('all'));
    interviewTabBtn.addEventListener('click', () => applyFilter('interview'));
    rejectedTabBtn.addEventListener('click', () => applyFilter('rejected'));

    // Initial Dashboard Update
    updateDashboard();
});
