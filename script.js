// ==========================================
// CareerConnect Mock Database & Utilities
// ==========================================

const MOCK_USERS = [
  { name: "Amit Patel", title: "Software Engineer Lead at TechNova", location: "Bengaluru" },
  { name: "Sneha Nair", title: "Product Designer at DesignFlow", location: "Mumbai" },
  { name: "Rohan Das", title: "Data Analyst at AnalyticsHub", location: "Delhi" },
  { name: "Priya Sharma", title: "HR Recruiter at SkillForge", location: "Hyderabad" },
  { name: "Vijay Kumar", title: "Full Stack Developer at WebLabs", location: "Pune" },
  { name: "Neha Joshi", title: "UI/UX Consultant", location: "Chennai" },
  { name: "Arjun Singh", title: "Tech Co-founder at StartGrid", location: "Bengaluru" },
  { name: "Divya Rao", title: "Marketing Manager at BrandGrow", location: "Mumbai" }
];

// Vector SVG Image Generator for Career cards
function getProfessionalSVG(type, index) {
  let bgColor = '#eef3f8';
  let iconColor = '#0a66c2';
  let bannerText = 'JOBS';

  if (type === 'Tech') {
    bgColor = '#eef3f8';
    iconColor = '#0a66c2';
    bannerText = 'TECH';
  } else if (type === 'Office') {
    bgColor = '#ecfdf5';
    iconColor = '#057642';
    bannerText = 'OFFICE';
  } else if (type === 'Design') {
    bgColor = '#fff1f2';
    iconColor = '#be123c';
    bannerText = 'DESIGN';
  } else if (type === 'Team') {
    bgColor = '#f5f3ff';
    iconColor = '#6d28d9';
    bannerText = 'TEAM';
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" width="100%" height="100%">` +
              `<rect width="100%" height="100%" fill="${bgColor}"/>` +
              `<circle cx="240" cy="75" r="90" fill="${iconColor}" opacity="0.06"/>` +
              `<text x="40" y="85" font-family="-apple-system, sans-serif" font-weight="900" font-size="28" fill="${iconColor}">${bannerText}</text>` +
              `<line x1="40" y1="100" x2="160" y2="100" stroke="${iconColor}" stroke-width="4" stroke-linecap="round"/>` +
              `<text x="260" y="140" font-family="sans-serif" font-weight="bold" font-size="10" fill="#94a3b8" text-anchor="middle">#${index}</text>` +
              `</svg>`;
              
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// ==========================================
// Navigation & Notifications Setup
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('linkedin-clone/')) {
    initFeedPage();
  } else if (path.endsWith('profile.html')) {
    initProfilePage();
  } else if (path.endsWith('jobs.html')) {
    initJobsPage();
  } else if (path.endsWith('network.html')) {
    initNetworkPage();
  } else if (path.endsWith('messages.html')) {
    initMessagesPage();
  }
});

function setupNavbar() {
  const notiBtn = document.getElementById('nav-noti-btn');
  const notiDropdown = document.getElementById('noti-dropdown');

  if (notiBtn && notiDropdown) {
    notiBtn.addEventListener('click', (e) => {
      e.preventDefault();
      notiDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!notiBtn.contains(e.target) && !notiDropdown.contains(e.target)) {
        notiDropdown.classList.remove('active');
      }
    });
  }
}

// ==========================================
// 2. Home Feed Scripting (index.html)
// ==========================================
function initFeedPage() {
  const feedContainer = document.querySelector('.feed-posts-list');
  const openModalBtn = document.getElementById('open-post-modal');
  const closeModalBtn = document.getElementById('close-post-modal');
  const postModal = document.getElementById('post-modal');
  const postForm = document.getElementById('modal-post-form');
  const modalText = document.getElementById('modal-post-text');

  if (!feedContainer) return;

  // A. Modal Toggles
  const openModal = () => {
    if (postModal) {
      postModal.classList.add('active');
      if (modalText) {
        modalText.focus();
        updateCharCount();
      }
    }
  };

  if (openModalBtn && closeModalBtn && postModal) {
    openModalBtn.addEventListener('click', openModal);

    // Bind other trigger buttons
    document.querySelectorAll('.create-trigger-photo, .create-trigger-article, .create-trigger-achievement').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    closeModalBtn.addEventListener('click', () => {
      postModal.classList.remove('active');
    });

    postModal.addEventListener('click', (e) => {
      if (e.target === postModal) postModal.classList.remove('active');
    });
  }

  // Character count tracking
  const charDisplay = document.getElementById('char-count-display');
  const updateCharCount = () => {
    if (modalText && charDisplay) {
      const len = modalText.value.length;
      charDisplay.textContent = `${len} / 500 characters`;
      if (len > 500) {
        charDisplay.style.color = 'var(--danger)';
      } else {
        charDisplay.style.color = 'var(--text-muted)';
      }
    }
  };

  if (modalText) {
    modalText.addEventListener('input', updateCharCount);
  }

  // B. Generate 8 professional posts
  const postTexts = [
    "Thrilled to share that I have completed the Full Stack Java bootcamp! Special thanks to my instructors at SkillTap Academy for their constant mock tests and placement sessions. Ready for my next role! [Active]",
    "Productivity tip: Split your major tasks into 25-minute Pomodoro blocks. It keeps distractions away and makes you realize how much you can finish in a single day! ⏱️",
    "Had an amazing weekend hackathon build. Our team developed a local food basket utility in pure Javascript, allowing persistent checkout states. Hard work pays off!",
    "Great design is simple, minimal, and places the user first. Focus on clear typography and clean gradients rather than cluttered interface features.",
    "A major milestone: SkillTap Academy has crossed 10,000 freshers trained with an active 95% placement success rate! Proud to support this career ecosystem.",
    "Cracking tech interviews is all about fundamentals. Master clean coding, database join operations, and practice explaining your code logic step-by-step.",
    "Excited to lead the frontend design for Ignitia 2026 college fest landing page! Stay tuned for the active live registration countdown triggers.",
    "Had a great team brainstorming session today regarding our upcoming data modeling pipeline. Collaborative engineering yields the best results."
  ];

  const samplePosts = [];
  for (let i = 0; i < 8; i++) {
    const author = MOCK_USERS[i % MOCK_USERS.length];
    samplePosts.push({
      authorName: author.name,
      authorHeadline: author.title,
      time: `${i + 1}d ago`,
      text: postTexts[i],
      likes: Math.floor(Math.random() * 80) + 12,
      comments: [
        { name: "Rohan Das", text: "Congratulations on the milestone! Well deserved." },
        { name: "Priya Sharma", text: "This is a great advice, thanks for sharing." }
      ],
      attachmentType: i % 2 === 0 ? 'Tech' : 'Office'
    });
  }

  function renderPostCard(post, index, prePend = false) {
    const card = document.createElement('article');
    card.className = 'cc-card feed-post-card';
    
    card.innerHTML = `
      <!-- Author header info -->
      <div class="post-author-row">
        <div class="post-author-avatar" style="width: 44px; height: 44px; border-radius: 50%; background-color: var(--accent-light); display: flex; align-items: center; justify-content: center; font-weight: bold; color: var(--accent); border: 1px solid var(--border);">
          ${post.authorName.charAt(0)}
        </div>
        <div class="post-author-info">
          <span class="post-author-name">${post.authorName}</span>
          <span class="post-author-headline">${post.authorHeadline}</span>
          <span class="post-time">${post.time}</span>
        </div>
      </div>

      <!-- Text body -->
      <p class="post-body-text">${post.text}</p>

      <!-- Attachment Banner -->
      <div class="post-attachment-container">
        <img src="${getProfessionalSVG(post.attachmentType || 'Tech', index)}" alt="Professional card graphics" class="post-attachment-img">
      </div>

      <!-- Stats row -->
      <div class="post-stats-row">
        <span class="likes-info"><span>Like</span> <span class="likes-count">${post.likes}</span> likes</span>
        <span class="comments-info"><span class="comments-count">${post.comments.length}</span> comments</span>
      </div>

      <!-- Actions bar -->
      <div class="post-footer-actions">
        <button class="post-action-btn like-btn">
          <span class="post-action-icon"></span> Like
        </button>
        <button class="post-action-btn comment-trigger-btn">
          <span class="post-action-icon"></span> Comment
        </button>
        <button class="post-action-btn repost-btn">
          <span class="post-action-icon"></span> Repost
        </button>
        <button class="post-action-btn send-btn">
          <span class="post-action-icon"></span> Send
        </button>
      </div>

      <!-- Comments list drawers -->
      <div class="post-comments-section">
        <div class="comment-input-row">
          <div class="comment-avatar" style="width:28px; height:28px; border-radius:50%; background-color:var(--accent); display:flex; align-items:center; justify-content:center; color:#ffffff; font-size:0.75rem; font-weight:bold;">
            R
          </div>
          <input type="text" placeholder="Write a comment..." class="comment-input">
          <button class="btn btn-primary btn-sm submit-comment-btn" style="padding:0.25rem 0.75rem;">Post</button>
        </div>
        <div class="comments-list">
          ${post.comments.map(c => `
            <div class="comment-item">
              <div class="comment-avatar" style="width:24px; height:24px; border-radius:50%; background-color:var(--border); display:flex; align-items:center; justify-content:center; font-size:0.65rem; font-weight:bold;">
                ${c.name.charAt(0)}
              </div>
              <div class="comment-bubble">
                <div class="commenter-name">${c.name}</div>
                <p>${c.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Bind events
    const likeBtn = card.querySelector('.like-btn');
    const likesCount = card.querySelector('.likes-count');
    let isLiked = false;

    likeBtn.addEventListener('click', () => {
      isLiked = !isLiked;
      likeBtn.classList.toggle('liked');
      if (isLiked) {
        likesCount.textContent = parseInt(likesCount.textContent) + 1;
      } else {
        likesCount.textContent = parseInt(likesCount.textContent) - 1;
      }
    });

    const commentTrigger = card.querySelector('.comment-trigger-btn');
    const commentSection = card.querySelector('.post-comments-section');

    commentTrigger.addEventListener('click', () => {
      commentSection.classList.toggle('active');
    });

    // Add local comment
    const submitCommentBtn = card.querySelector('.submit-comment-btn');
    const commentInput = card.querySelector('.comment-input');
    const commentsList = card.querySelector('.comments-list');
    const commentsCount = card.querySelector('.comments-count');

    submitCommentBtn.addEventListener('click', () => {
      const txt = commentInput.value.trim();
      if (!txt) return;

      const cItem = document.createElement('div');
      cItem.className = 'comment-item';
      cItem.innerHTML = `
        <div class="comment-avatar" style="width:24px; height:24px; border-radius:50%; background-color:var(--accent); display:flex; align-items:center; justify-content:center; color:#ffffff; font-size:0.65rem; font-weight:bold;">
          R
        </div>
        <div class="comment-bubble">
          <div class="commenter-name">Rakesh Kanna</div>
          <p>${txt}</p>
        </div>
      `;
      commentsList.appendChild(cItem);
      commentsCount.textContent = parseInt(commentsCount.textContent) + 1;
      commentInput.value = '';
    });

    // Repost alert
    card.querySelector('.repost-btn').addEventListener('click', () => {
      alert("You reposted this article to your connection feed! [Shared]");
    });

    card.querySelector('.send-btn').addEventListener('click', () => {
      alert("Link copied to clipboard. Send to friends!");
    });

    if (prePend) {
      feedContainer.insertBefore(card, feedContainer.firstChild);
    } else {
      feedContainer.appendChild(card);
    }
  }

  samplePosts.forEach((post, index) => renderPostCard(post, index));

  // C. Form submissions
  if (postForm) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const txt = modalText.value.trim();
      if (!txt) return;

      const newPost = {
        authorName: "Rakesh Kanna",
        authorHeadline: "Frontend Developer Student | SkillTap Academy",
        time: "Just now",
        text: txt,
        likes: 0,
        comments: [],
        attachmentType: 'Tech'
      };

      renderPostCard(newPost, 100, true);
      modalText.value = '';
      postModal.classList.remove('active');

      // Flash success bubble alert
      const alertBox = document.createElement('div');
      alertBox.style.position = 'fixed';
      alertBox.style.bottom = '20px';
      alertBox.style.right = '20px';
      alertBox.style.backgroundColor = 'var(--success)';
      alertBox.style.color = '#ffffff';
      alertBox.style.padding = '0.75rem 1.5rem';
      alertBox.style.borderRadius = 'var(--radius-md)';
      alertBox.style.boxShadow = 'var(--shadow-md)';
      alertBox.style.zIndex = '3000';
      alertBox.textContent = 'Post published successfully!';
      
      document.body.appendChild(alertBox);
      setTimeout(() => {
        alertBox.remove();
      }, 3000);
    });
  }
}

// ==========================================
// 3. Professional Profile Scripting (profile.html)
// ==========================================
function initProfilePage() {
  const editBtn = document.querySelector('.profile-edit-btn');
  const headlineEl = document.querySelector('.profile-header-headline');

  if (editBtn && headlineEl) {
    editBtn.addEventListener('click', () => {
      const newHeadline = prompt("Edit your professional headline:", headlineEl.textContent);
      if (newHeadline !== null && newHeadline.trim()) {
        headlineEl.textContent = newHeadline;
      }
    });
  }

  const contactBtn = document.querySelector('.profile-contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      alert("Contact Info:\nEmail: rakesh.kanna@example.com\nPhone: +91 98765 43210\nCollege: SkillTap Academy Engineering");
    });
  }
}

// ==========================================
// 4. Job Listings Search Scripting (jobs.html)
// ==========================================
const JOBS_DATA = [
  { id: 1, title: "Frontend Developer", company: "TechNova", location: "Bengaluru", type: "Full-time", experience: "Fresher", posted: "2 days ago", skills: ["HTML", "CSS", "JavaScript"] },
  { id: 2, title: "Java Full Stack Engineer", company: "SkillForge", location: "Hyderabad", type: "Full-time", experience: "Fresher", posted: "3 days ago", skills: ["Java", "Spring Boot", "SQL"] },
  { id: 3, title: "UI/UX Designer", company: "DesignFlow", location: "Mumbai", type: "Contract", experience: "1-2 Years", posted: "1 week ago", skills: ["Figma", "Wireframing", "UI Design"] },
  { id: 4, title: "Python Data Analyst", company: "AnalyticsHub", location: "Delhi", type: "Full-time", experience: "Fresher", posted: "4 days ago", skills: ["Python", "Pandas", "SQL"] },
  { id: 5, title: "Web Developer Intern", company: "WebLabs", location: "Bengaluru", type: "Internship", experience: "Fresher", posted: "5 days ago", skills: ["HTML", "CSS", "Javascript"] },
  { id: 6, title: "Data Scientist", company: "CloudCore", location: "Pune", type: "Full-time", experience: "2-4 Years", posted: "2 weeks ago", skills: ["Python", "Machine Learning", "Tableau"] },
  { id: 7, title: "React Developer", company: "AppInnovate", location: "Bengaluru", type: "Full-time", experience: "1-2 Years", posted: "1 day ago", skills: ["React", "Javascript", "Redux"] },
  { id: 8, title: "Software Engineer Trainee", company: "SysInfra", location: "Chennai", type: "Full-time", experience: "Fresher", posted: "6 days ago", skills: ["Java", "C++", "SQL"] },
  { id: 9, title: "Product Analyst", company: "ScaleUp Labs", location: "Hyderabad", type: "Full-time", experience: "Fresher", posted: "2 days ago", skills: ["Excel", "SQL", "Product Strategy"] },
  { id: 10, title: "Backend Engineer", company: "DataShield", location: "Delhi", type: "Contract", experience: "2-4 Years", posted: "1 week ago", skills: ["Node.js", "Express", "MongoDB"] },
  { id: 11, title: "Full Stack Developer", company: "PixelCraft", location: "Mumbai", type: "Internship", experience: "Fresher", posted: "3 days ago", skills: ["HTML", "CSS", "Javascript", "Node.js"] },
  { id: 12, title: "Cloud Associate", company: "VaporCloud", location: "Pune", type: "Full-time", experience: "Fresher", posted: "4 days ago", skills: ["AWS", "Linux", "Python"] }
];

function initJobsPage() {
  const container = document.querySelector('.jobs-list-container');
  const searchTitle = document.getElementById('search-job-title');
  const searchLoc = document.getElementById('search-job-location');

  if (!container) return;

  function renderJobs(filterTitle = '', filterLoc = '') {
    container.innerHTML = '';

    const filtered = JOBS_DATA.filter(job => {
      const matchTitle = job.title.toLowerCase().includes(filterTitle) || job.company.toLowerCase().includes(filterTitle);
      const matchLoc = job.location.toLowerCase().includes(filterLoc);
      return matchTitle && matchLoc;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="cc-card" style="padding:3rem; text-align:center; color:var(--text-secondary);"><p>No job listings match your search keywords.</p></div>`;
      return;
    }

    filtered.forEach(job => {
      const card = document.createElement('article');
      card.className = 'cc-card job-item-card';

      card.innerHTML = `
        <div class="job-item-left">
          <div class="job-logo-placeholder">
            ${job.company.charAt(0)}
          </div>
          <div class="job-item-details">
            <h3>${job.title}</h3>
            <div class="job-company-row">${job.company}</div>
            <div class="job-meta-row">
              <span>Pin ${job.location}</span>
              <span>Job ${job.type}</span>
              <span>Exp ${job.experience}</span>
            </div>
            <div class="job-skills-row">
              ${job.skills.map(s => `<span class="job-skill-tag">${s}</span>`).join('')}
            </div>
          </div>
        </div>
        
        <div class="job-item-right">
          <span class="job-posted-time">${job.posted}</span>
          <button class="btn btn-primary btn-sm apply-job-btn">Apply Now</button>
        </div>
      `;

      card.querySelector('.apply-job-btn').addEventListener('click', () => {
        alert(`Application sent successfully to ${job.company} for the ${job.title} role! [Applied]`);
      });

      container.appendChild(card);
    });
  }

  if (searchTitle) {
    searchTitle.addEventListener('input', () => {
      renderJobs(searchTitle.value.toLowerCase(), searchLoc.value.toLowerCase());
    });
  }

  if (searchLoc) {
    searchLoc.addEventListener('input', () => {
      renderJobs(searchTitle.value.toLowerCase(), searchLoc.value.toLowerCase());
    });
  }

  renderJobs(); // initial render
}

// ==========================================
// 5. Network connections suggestions (network.html)
// ==========================================
function initNetworkPage() {
  const grid = document.querySelector('.network-grid');
  const countBadge = document.getElementById('network-count');

  if (!grid) return;

  grid.innerHTML = '';
  
  // Suggested connections list
  const suggestions = [
    { name: "Rohit Sharma", headline: "Lead Java Developer | TechNova", type: "Design" },
    { name: "Aditi Rao", headline: "Product Manager | AnalyticsHub", type: "Tech" },
    { name: "Karan Johar", headline: "Software Intern | WebLabs", type: "Team" },
    { name: "Pooja Hegde", headline: "UX UI Designer | DesignFlow", type: "Office" },
    { name: "Siddharth Malhotra", headline: "Recruiter | SkillForge", type: "Design" },
    { name: "Shraddha Kapoor", headline: "Data Analyst | CloudCore", type: "Tech" }
  ];

  suggestions.forEach((person, index) => {
    const card = document.createElement('div');
    card.className = 'connection-card';

    card.innerHTML = `
      <div class="connection-cover"></div>
      <div class="connection-avatar-wrapper">
        <div class="connection-avatar" style="width:48px; height:48px; border-radius:50%; background-color:var(--border); display:flex; align-items:center; justify-content:center; border:2px solid #ffffff; font-weight:bold; color:var(--accent);">
          ${person.name.charAt(0)}
        </div>
      </div>
      <div class="connection-info-box">
        <span class="connection-name">${person.name}</span>
        <span class="connection-headline">${person.headline}</span>
        <button class="btn btn-outline btn-connect">Connect</button>
      </div>
    `;

    const connectBtn = card.querySelector('.btn-connect');
    let isConnected = false;

    connectBtn.addEventListener('click', () => {
      isConnected = !isConnected;
      if (isConnected) {
        connectBtn.textContent = 'Pending';
        connectBtn.classList.remove('btn-outline');
        connectBtn.classList.add('btn-secondary');
        if (countBadge) countBadge.textContent = parseInt(countBadge.textContent) + 1;
      } else {
        connectBtn.textContent = 'Connect';
        connectBtn.classList.remove('btn-secondary');
        connectBtn.classList.add('btn-outline');
        if (countBadge) countBadge.textContent = parseInt(countBadge.textContent) - 1;
      }
    });

    grid.appendChild(card);
  });
}

// ==========================================
// 6. Messaging panel script (messages.html)
// ==========================================
function initMessagesPage() {
  const msgList = document.querySelector('.msg-convo-list');
  const chatMessages = document.querySelector('.chat-messages');
  const chatInput = document.querySelector('.chat-input');
  const sendBtn = document.querySelector('.chat-send-btn');

  if (!msgList || !chatMessages || !chatInput || !sendBtn) return;

  msgList.innerHTML = '';

  MOCK_USERS.forEach((user, idx) => {
    const item = document.createElement('div');
    item.className = 'convo-item' + (idx === 0 ? ' active' : '');
    item.innerHTML = `
      <div class="convo-avatar" style="width:36px; height:36px; border-radius:50%; background-color:var(--accent-light); display:flex; align-items:center; justify-content:center; font-weight:bold; color:var(--accent);">
        ${user.name.charAt(0)}
      </div>
      <div class="convo-info">
        <h4>${user.name}</h4>
        <p>${user.title}</p>
      </div>
    `;

    item.addEventListener('click', () => {
      msgList.querySelectorAll('.convo-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Update Header
      const headerAvatar = document.querySelector('.chat-header-avatar');
      const headerName = document.querySelector('.chat-header-info h4');
      const headerTitle = document.querySelector('.chat-header-info p');
      
      if (headerName) headerName.textContent = user.name;
      if (headerTitle) headerTitle.textContent = user.title;

      chatMessages.innerHTML = `
        <div class="chat-bubble received">Hello! I saw your recent post regarding the Full Stack Java bootcamp completion. Congratulations!</div>
        <div class="chat-bubble sent">Thank you so much! Really excited to start applying for developer roles.</div>
        <div class="chat-bubble received">That's great. We actually have an opening at our company for freshers. Let me share the job listing link with you.</div>
      `;
      scrollToBottom();
    });

    msgList.appendChild(item);
  });

  // Load initial chat header name
  const firstConvo = MOCK_USERS[0];
  const headerName = document.querySelector('.chat-header-info h4');
  const headerTitle = document.querySelector('.chat-header-info p');
  if (headerName) headerName.textContent = firstConvo.name;
  if (headerTitle) headerTitle.textContent = firstConvo.title;

  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble sent';
    bubble.textContent = text;
    chatMessages.appendChild(bubble);
    chatInput.value = '';
    scrollToBottom();

    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'chat-bubble received';
      
      const replies = [
        "Sounds good! Let me check with our manager.",
        "Could you share your updated resume via email?",
        "Awesome, see you at the placement drive tomorrow.",
        "Have a great day ahead!"
      ];
      reply.textContent = replies[Math.floor(Math.random() * replies.length)];
      chatMessages.appendChild(reply);
      scrollToBottom();
    }, 1500);
  }

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  scrollToBottom();
}
