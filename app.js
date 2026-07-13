// LinkedIn Clone Application Logic - Custom Tailored for Rakesh Kanna

// Initial Application State with Rakesh's projects, real peer names, and data
const STATE = {
  currentUser: {
    name: 'Rakesh Kanna M',
    headline: 'Full Stack Engineer | Founder & Lead Developer at Rakexura | Next.js 15, React 19 & Supabase Expert',
    avatar: 'assets/avatar.jpg',
    banner: 'assets/banner.jpg',
    viewers: 247,
    impressions: 3514
  },
  posts: [
    {
      id: 'post-1',
      author: 'Rakesh Kanna M',
      headline: 'Full Stack Engineer | Founder & Lead Developer at Rakexura',
      avatar: 'assets/avatar.jpg',
      time: 'Just now',
      text: 'Proud to share the complete production rebuild of the Rakexura Game Marketplace! [Production Launch]\n\nI have successfully refactored the entire frontend from static HTML into a robust Next.js 15 App Router and React 19 stack, backed by Supabase Auth, PostgreSQL, and strict TypeScript.\n\nKey system upgrades:\n* Switched to Tailwind CSS v4 for ultra-fast utility styling\n* Integrated Framer Motion and Lenis for smooth scroll-driven experiences\n* Implemented Row Level Security (RLS) on Supabase for scoped customer profiles, cart, and orders\n* Connected custom SMTP via Resend API key for verification flows\n* Built private Storage buckets with owner/admin policies for payment proof checkouts\n\nIt is built with high performance and strict security at its core. Check out the local setup instructions on GitHub and let me know your thoughts!\n\n#nextjs #reactjs #supabase #webdevelopment #typescript #tailwindcss #postgresql',
      image: 'assets/post_image.jpg',
      likes: 42,
      likedByUser: false,
      reactionType: null,
      comments: []
    },
    {
      id: 'post-2',
      author: 'Dhanush Kumar',
      headline: 'Lead Developer @ CareerBridge AI | Student Preparation Platform',
      avatar: 'assets/sarah.jpg', // Reusing generated professional avatar
      time: '2h ago',
      text: 'Excited to reveal the premium scroll-driven homepage redesign for CareerBridge AI! [Placement Platform]\n\nCareerBridge is a placements preparation platform designed to help students master aptitude, coding, resumes, and mock interviews.\n\nWhat we\'ve changed in this release:\n1. Replaced heavy scroll hijacking with position: sticky and GSAP ScrollTrigger for organic scrolling.\n2. Server-rendered all static sections to reduce client-side hydration delays.\n3. Added realistic interactive student dashboards showing weekly preparation goals instead of generic statistics.\n4. Removed heavy Spline globes and dynamic client-side imports, leading to a 45% Lighthouse performance improvement.\n\nCheck out the redesign details! Let\'s build placement readiness today.\n\n#placementprep #edtech #uiux #webperf #nextjs #reactjs #gsap',
      image: 'assets/post_image2.jpg',
      likes: 128,
      likedByUser: false,
      reactionType: null,
      comments: [
        {
          id: 'comment-2-1',
          author: 'Arun',
          headline: 'Full Stack Developer | CareerBridge Prep',
          avatar: 'assets/john.jpg', // Reusing generated avatar
          time: '1h ago',
          text: 'This looks clean! The Lighthouse score improvements are massive. The sticky layout works perfectly on mobile too.'
        },
        {
          id: 'comment-2-2',
          author: 'Rakesh Kanna M',
          headline: 'Full Stack Engineer | Founder & Lead Developer at Rakexura',
          avatar: 'assets/avatar.jpg',
          time: '30m ago',
          text: 'Great work Dhanush! Removing that Spline canvas makes a huge difference in mobile responsiveness.'
        }
      ]
    },
    {
      id: 'post-3',
      author: 'Alice Smith',
      headline: 'Engineering Manager at Google | Tech Advisor',
      avatar: 'assets/alice.jpg',
      time: '5h ago',
      text: 'When reviewing full-stack portfolios, the difference between an average candidate and an exceptional one is "Production Readiness".\n\nAnyone can follow a tutorial and build a simple CRUD app. But can you explain:\n- Your database indexing and row-level security (RLS)?\n- How you handle state synchronization (Zustand, React Query)?\n- Your error reporting integration (Sentry, LogRocket)?\n- How you secure payment proofs and restrict media assets?\n\nIf you can detail these, you\'re already in the top 5% of engineers.\n\n#careeradvice #softwareengineering #fullstack #techhiring #webdev',
      image: 'assets/post_image3.jpg',
      likes: 312,
      likedByUser: false,
      reactionType: null,
      comments: [
        {
          id: 'comment-3-1',
          author: 'Bob Johnson',
          headline: 'Senior UI/UX Engineer',
          avatar: 'assets/bob.jpg',
          time: '4h ago',
          text: 'Spot on, Alice. The packaging and operations tell you so much more about a developer than their basic logic.'
        }
      ]
    }
  ],
  news: [
    { id: 1, title: 'Rakexura Store cutover plan online', time: '2h ago', readers: '1,248 readers' },
    { id: 2, title: 'Next.js 15 App Router benchmarks', time: '12h ago', readers: '5,921 readers' },
    { id: 3, title: 'Supabase RLS policies guide', time: '1d ago', readers: '8,410 readers' },
    { id: 4, title: 'Tailwind CSS v4 upgrades styling speed', time: '6h ago', readers: '4,109 readers' },
    { id: 5, title: 'Lighthouse scoring updates for 2026', time: '18h ago', readers: '2,512 readers' },
    // Expanded news
    { id: 6, title: 'Framer Motion vs GSAP for web animations', time: '2d ago', readers: '3,204 readers' },
    { id: 7, title: 'SMTP delivery best practices via Resend', time: '3d ago', readers: '1,450 readers' },
    { id: 8, title: 'Top EdTech preparation portals in India', time: '1d ago', readers: '6,874 readers' },
    { id: 9, title: 'React 19 Server Actions deep dive', time: '4h ago', readers: '2,980 readers' },
    { id: 10, title: 'Managing Vercel serverless timeouts', time: '4d ago', readers: '1,510 readers' }
  ],
  contacts: [
    {
      id: 'contact-dhanush',
      name: 'Dhanush Kumar',
      headline: 'Lead Developer @ CareerBridge AI',
      avatar: 'assets/sarah.jpg',
      status: 'online',
      messages: [
        { sender: 'them', text: 'Hey Rakesh, I noticed you pushed some new code to the Rakexura checkouts. Did you resolve the checkout proof bucket policies on Supabase?' },
        { sender: 'me', text: 'Hey Dhanush! Yes, I fixed the checkout proof bucket. I enabled authenticated write and admin-only read/delete policies.' }
      ]
    },
    {
      id: 'contact-arun',
      name: 'Arun',
      headline: 'Full Stack Developer | CareerBridge Prep',
      avatar: 'assets/john.jpg',
      status: 'online',
      messages: [
        { sender: 'them', text: 'Hey Rakesh, can you help me setup local env variables for Supabase? I keep getting validation errors in next.config.ts' },
        { sender: 'me', text: 'Hey Arun, sure! Make sure your keys are prefixed with NEXT_PUBLIC_ in your .env.local file.' }
      ]
    },
    {
      id: 'contact-alice',
      name: 'Alice Smith',
      headline: 'Engineering Manager at Google',
      avatar: 'assets/alice.jpg',
      status: 'online',
      messages: [
        { sender: 'them', text: 'Hi Rakesh, I saw your Next.js 15 rebuild of the Rakexura Marketplace. The implementation of Zustand and Swiper looks extremely solid!' },
        { sender: 'me', text: 'Hi Alice! Thank you so much. I focused heavily on security, performance, and responsive UI polish.' }
      ]
    },
    {
      id: 'contact-bob',
      name: 'Bob Johnson',
      headline: 'Senior UI/UX Engineer',
      avatar: 'assets/bob.jpg',
      status: 'offline',
      messages: [
        { sender: 'them', text: 'Hey Rakesh, did you test the Lenis smooth scroll on Safari? There is a slight bounce issue on mobile headers.' }
      ]
    }
  ],
  suggestions: [
    { id: 'sug-1', name: 'Sneha Nair', headline: 'Product Designer at DesignFlow', avatar: 'assets/sarah.jpg', mutual: 8 },
    { id: 'sug-2', name: 'Vijay Kumar', headline: 'Full Stack Developer @ WebLabs', avatar: 'assets/john.jpg', mutual: 4 },
    { id: 'sug-3', name: 'Rohan Das', headline: 'Data Analyst at AnalyticsHub', avatar: 'assets/bob.jpg', mutual: 11 },
    { id: 'sug-4', name: 'Priya Sharma', headline: 'HR Recruiter at SkillForge', avatar: 'assets/alice.jpg', mutual: 15 },
    { id: 'sug-5', name: 'Arjun Singh', headline: 'Tech Co-founder @ StartGrid', avatar: 'assets/sarah.jpg', mutual: 2 },
    { id: 'sug-6', name: 'Neha Joshi', headline: 'UI/UX Design Consultant', avatar: 'assets/alice.jpg', mutual: 9 }
  ],
  connectionsCount: 250,
  appliedJobs: [],
  notifications: [
    { id: 'noti-1', author: 'Dhanush Kumar', avatar: 'assets/sarah.jpg', text: '<strong>Dhanush Kumar</strong> liked your post about the Rakexura rebuild.', time: '2h ago', read: false, type: 'post' },
    { id: 'noti-2', author: 'Arun', avatar: 'assets/john.jpg', text: '<strong>Arun</strong> commented on your post: "Great work Dhanush! Removing that Spline..."', time: '1h ago', read: false, type: 'comment' },
    { id: 'noti-3', author: 'Alice Smith', avatar: 'assets/alice.jpg', text: '<strong>Alice Smith</strong> viewed your profile. She is hiring at Google!', time: '5h ago', read: false, type: 'mention' },
    { id: 'noti-4', author: 'LinkedIn Academy', avatar: 'assets/cb_logo.jpg', text: '<strong>CareerBridge AI</strong>: "Get ahead of your placements with expert guided paths in Aptitude, Coding & Interview Prep."', time: '1d ago', read: true, type: 'system' }
  ],
  jobs: [
    { id: 'job-1', title: 'Next.js & Supabase Developer', company: 'Rakexura', location: 'Chennai (Remote)', posted: 'Just now', type: 'Tech', logoLetter: 'R', easyApply: true },
    { id: 'job-2', title: 'Frontend Developer Intern', company: 'CodeCraft Solutions', location: 'Chennai', posted: '1 day ago', type: 'Tech', logoLetter: 'C', easyApply: true },
    { id: 'job-3', title: 'Software Engineer I', company: 'Google', location: 'Bengaluru', posted: '3 days ago', type: 'Tech', logoLetter: 'G', easyApply: false },
    { id: 'job-4', title: 'React Full Stack Developer', company: 'TechNova', location: 'Hyderabad', posted: '2 days ago', type: 'Tech', logoLetter: 'T', easyApply: true },
    { id: 'job-5', title: 'UI/UX Product Designer', company: 'DesignFlow', location: 'Mumbai', posted: '4 days ago', type: 'Design', logoLetter: 'D', easyApply: true }
  ],
  activeChats: [],
  searchQuery: '',
  sortBy: 'top',
  isNewsExpanded: false
};

// Auto Responses for Interactive Chats
const AUTO_RESPONSES = {
  'Dhanush Kumar': [
    "Awesome. We should check the RLS policy for reviews as well. I'll push my PR for the CareerBridge scroll homepage tomorrow.",
    "That makes total sense. Have you tested it with Swiper container loading on mobile? It felt a bit heavy earlier.",
    "Let's jump on a quick Meet call tomorrow to review the database migrations. We need to sync our Supabase schemas."
  ],
  'Arun': [
    "Ah! I had missed the prefix. It works perfectly now. Thanks for the tip!",
    "Are we planning to use Sentry for error tracking on this branch? I saw some configs in package.json.",
    "Great. I will push my updates for the Aptitude curriculum questions card today."
  ],
  'Alice Smith': [
    "We are expanding our core team at Google. If you are open to new opportunities, let's chat about a role here!",
    "The operational details like Sentry and Resend integration really set your projects apart. Keep pushing quality code!",
    "How does the page handle Vercel serverless timeouts during the checkout validation? That is a common Next.js bottleneck."
  ],
  'Bob Johnson': [
    "Perfect! I will push the design updates for the checkout overlay on Swiper.",
    "Thanks! The CSS looks much cleaner now. The glassmorphism transitions are extremely smooth.",
    "Let's test the layout on 320px mobile screens. We need to make sure the game grid does not overflow."
  ]
};

// ==========================================================
// DOM ELEMENTS & INITIALIZATION
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initUserData();
  renderFeed();
  renderNews();
  renderConversations();
  setupEventListeners();
  handleRouting(); // Initialize hash-based SPA routing
});

// Theme Initialization
function initTheme() {
  const savedTheme = localStorage.getItem('linkedin-theme') || 'light-theme';
  document.body.className = savedTheme;
  updateThemeButton();
}

function updateThemeButton() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  
  if (document.body.classList.contains('dark-theme')) {
    themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

// User Data Sync across UI elements
function initUserData() {
  // Set User Avatars
  const avatarElements = [
    document.getElementById('nav-me-avatar'),
    document.getElementById('dropdown-me-avatar'),
    document.getElementById('user-profile-avatar'),
    document.getElementById('share-box-avatar'),
    document.getElementById('modal-user-avatar'),
    document.getElementById('messaging-bar-avatar'),
    document.getElementById('ad-avatar-me'),
    document.getElementById('profile-left-avatar'),
    document.getElementById('profile-main-avatar-img'),
    document.getElementById('ad-avatar-me-network'),
    document.getElementById('ad-avatar-me-noti')
  ];
  
  avatarElements.forEach(el => {
    if (el) {
      el.style.backgroundImage = `url('${STATE.currentUser.avatar}')`;
    }
  });
  
  // Profile banners
  const banners = [
    document.getElementById('user-profile-banner'),
    document.getElementById('profile-main-cover-banner')
  ];
  banners.forEach(el => {
    if (el) {
      el.style.backgroundImage = `url('${STATE.currentUser.banner}')`;
    }
  });
  
  // Set Text Values
  const displayName = document.getElementById('user-display-name');
  const cardName = document.getElementById('user-card-name');
  const modalName = document.getElementById('modal-user-name');
  
  if (displayName) displayName.textContent = STATE.currentUser.name;
  if (cardName) cardName.textContent = STATE.currentUser.name;
  if (modalName) modalName.textContent = STATE.currentUser.name;
  
  const displayHeadline = document.getElementById('user-display-headline');
  const cardHeadline = document.getElementById('user-card-headline');
  
  if (displayHeadline) displayHeadline.textContent = STATE.currentUser.headline;
  if (cardHeadline) cardHeadline.textContent = STATE.currentUser.headline;
  
  // Statistics counts
  const viewersCount = document.getElementById('profile-viewers-count');
  const impressionsCount = document.getElementById('post-impressions-count');
  
  if (viewersCount) viewersCount.textContent = STATE.currentUser.viewers;
  if (impressionsCount) impressionsCount.textContent = STATE.currentUser.impressions;
}

// ==========================================================
// RENDER FUNCTIONS
// ==========================================================

// Render News Feed sidebar
function renderNews() {
  const newsList = document.getElementById('linkedin-news-list');
  if (!newsList) return;
  
  newsList.innerHTML = '';
  
  const displayCount = STATE.isNewsExpanded ? STATE.news.length : 5;
  
  for (let i = 0; i < displayCount; i++) {
    const item = STATE.news[i];
    const li = document.createElement('li');
    li.className = 'news-item';
    li.innerHTML = `
      <a href="#">
        <span class="news-dot">•</span>
        <div class="news-content">
          <span class="news-headline">${item.title}</span>
          <span class="news-subtext">${item.time} • ${item.readers}</span>
        </div>
      </a>
    `;
    newsList.appendChild(li);
  }
  
  const expandBtn = document.getElementById('news-expand-btn');
  const newsBox = expandBtn?.closest('.news-box');
  
  if (expandBtn) {
    expandBtn.querySelector('span').textContent = STATE.isNewsExpanded ? 'Show less' : 'Show more';
    if (STATE.isNewsExpanded) {
      newsBox?.classList.add('expanded');
    } else {
      newsBox?.classList.remove('expanded');
    }
  }
}

// Render Messaging drawer conversations
function renderConversations(filterQuery = '') {
  const container = document.getElementById('conversations-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const query = filterQuery.toLowerCase().trim();
  const filteredContacts = STATE.contacts.filter(contact => 
    contact.name.toLowerCase().includes(query)
  );
  
  if (filteredContacts.length === 0) {
    container.innerHTML = `
      <div style="padding: 16px; text-align: center; color: var(--text-secondary); font-size: 13px;">
        No connections found
      </div>
    `;
    return;
  }
  
  filteredContacts.forEach(contact => {
    const lastMsg = contact.messages[contact.messages.length - 1];
    const snippet = lastMsg ? (lastMsg.sender === 'me' ? `You: ${lastMsg.text}` : lastMsg.text) : 'No messages yet';
    const isUnread = contact.messages.length > 0 && lastMsg.sender === 'them' && !STATE.activeChats.includes(contact.id);
    
    const div = document.createElement('div');
    div.className = `conversation-item ${isUnread ? 'unread' : ''} ${STATE.activeChats.includes(contact.id) ? 'active-chat' : ''}`;
    div.dataset.id = contact.id;
    div.innerHTML = `
      <div class="conversation-avatar-container">
        <div class="conversation-avatar" style="background-image: url('${contact.avatar}')"></div>
        <span class="status-dot ${contact.status === 'online' ? 'online' : ''}"></span>
      </div>
      <div class="conversation-info">
        <div class="conversation-header">
          <span class="conversation-name">${contact.name}</span>
          <span class="conversation-time-lbl">${lastMsg ? 'Just now' : '3:45 PM'}</span>
        </div>
        <p class="conversation-snippet">${snippet}</p>
      </div>
    `;
    
    div.addEventListener('click', () => {
      openChatWindow(contact.id);
      renderConversations(filterQuery); // Maintain filter query state
    });
    container.appendChild(div);
  });
}

function getMiniReactionHtml(rType) {
  const bgColors = {
    like: '#0a66c2',
    celebrate: '#057642',
    love: '#df3b3b',
    support: '#783ecf'
  };
  const svgs = {
    like: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:8px; height:8px; color:#ffffff;"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`,
    celebrate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:8px; height:8px; color:#ffffff;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    love: `<svg viewBox="0 0 24 24" fill="currentColor" style="width:8px; height:8px; color:#ffffff;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    support: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:8px; height:8px; color:#ffffff;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
  };
  
  return `
    <span class="reaction-mini-badge" style="background-color: ${bgColors[rType] || '#0a66c2'}; display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid var(--bg-card); margin-left: -4px;">
      ${svgs[rType] || ''}
    </span>
  `;
}

function renderFeed(isImmediate = false) {
  const container = document.getElementById('main-feed-posts');
  if (!container) return;

  if (isImmediate) {
    renderFeedImmediate();
    return;
  }

  // Render shimmering skeleton cards
  container.innerHTML = `
    <div class="feed-post linkedin-card shimmer-card">
      <div class="shimmer-header">
        <div class="shimmer-avatar shimmer-effect"></div>
        <div class="shimmer-header-lines">
          <div class="shimmer-line shimmer-effect" style="width: 40%; height: 12px; margin-bottom: 6px;"></div>
          <div class="shimmer-line shimmer-effect" style="width: 70%; height: 9px;"></div>
        </div>
      </div>
      <div class="shimmer-body">
        <div class="shimmer-line shimmer-effect" style="width: 95%; height: 9px; margin-bottom: 8px;"></div>
        <div class="shimmer-line shimmer-effect" style="width: 90%; height: 9px; margin-bottom: 8px;"></div>
        <div class="shimmer-line shimmer-effect" style="width: 60%; height: 9px;"></div>
      </div>
    </div>
    <div class="feed-post linkedin-card shimmer-card">
      <div class="shimmer-header">
        <div class="shimmer-avatar shimmer-effect"></div>
        <div class="shimmer-header-lines">
          <div class="shimmer-line shimmer-effect" style="width: 30%; height: 12px; margin-bottom: 6px;"></div>
          <div class="shimmer-line shimmer-effect" style="width: 50%; height: 9px;"></div>
        </div>
      </div>
      <div class="shimmer-body">
        <div class="shimmer-line shimmer-effect" style="width: 85%; height: 9px; margin-bottom: 8px;"></div>
        <div class="shimmer-line shimmer-effect" style="width: 40%; height: 9px;"></div>
      </div>
    </div>
  `;

  setTimeout(() => {
    renderFeedImmediate();
  }, 350);

  function renderFeedImmediate() {
    // Sort posts array copy
    let postsToRender = [...STATE.posts];
    
    if (STATE.sortBy === 'recent') {
      postsToRender = postsToRender.reverse();
    }
    
    // Filter by search query
    if (STATE.searchQuery.trim() !== '') {
      const query = STATE.searchQuery.toLowerCase();
      postsToRender = postsToRender.filter(post => 
        post.author.toLowerCase().includes(query) || 
        post.text.toLowerCase().includes(query) || 
        post.headline.toLowerCase().includes(query)
      );
    }
    
    if (postsToRender.length === 0) {
      container.innerHTML = `
        <div class="linkedin-card" style="padding: 32px; text-align: center;">
          <h3 style="font-weight: 500; font-size: 16px; margin-bottom: 8px;">No results found</h3>
          <p style="color: var(--text-secondary); font-size: 14px;">Try checking your spelling or adjusting your keywords.</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = '';
    
    postsToRender.forEach(post => {
      const isLiked = post.likedByUser;
      const postCard = document.createElement('article');
      postCard.className = 'feed-post linkedin-card';
      postCard.id = post.id;
      
      // Check if attachment exists
      const attachmentHtml = post.image 
        ? `<div class="feed-post__attachment">
             <img src="${post.image}" alt="Post image visual">
           </div>`
        : '';
        
      // Reactions Summary
      let totalReactions = post.likes;
      let reactionsSummaryHtml = '';
      if (totalReactions > 0) {
        reactionsSummaryHtml = `
          <div class="reactions-icons-container" style="display: flex; align-items: center;">
            ${getMiniReactionHtml('like')}
            ${getMiniReactionHtml('celebrate')}
            ${getMiniReactionHtml('love')}
            <span class="reactions-list-text" style="margin-left: 6px; font-size: 12px; color: var(--text-secondary);">${totalReactions} reactions</span>
          </div>
        `;
      }
      
      // Comments Count Summary
      const commentsCountText = post.comments.length > 0 
        ? `<button class="comments-count-btn">${post.comments.length} comment${post.comments.length > 1 ? 's' : ''}</button>` 
        : '0 comments';
        
      // Render comments list
      let commentsListHtml = '';
      post.comments.forEach(comment => {
        commentsListHtml += `
          <div class="comment-item">
            <div class="comment-avatar" style="background-image: url('${comment.avatar}')"></div>
            <div class="comment-bubble">
              <div class="comment-header">
                <div>
                  <h4 class="comment-author-name">${comment.author}</h4>
                  <p class="comment-author-headline">${comment.headline}</p>
                </div>
                <span class="comment-time">${comment.time}</span>
              </div>
              <p class="comment-text">${comment.text}</p>
            </div>
          </div>
        `;
      });
      
      // Dynamic Active Reaction class and text
      let likeBtnClass = 'post-action-btn';
      let likeBtnContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M19.46 11l-3.91-3.91a1.45 1.45 0 00-2 0l-.12.12c-.52.52-.73 1.25-.56 1.95L13.6 11H5.5A1.5 1.5 0 004 12.5v7A1.5 1.5 0 005.5 21h7.82a3 3 0 002.12-.88l5-5a1.49 1.49 0 00-1-2.62h-1l.73-3.08a1.53 1.53 0 00-.71-1.42zM12 19H6v-6h6v6z"/>
        </svg>
        <span>Like</span>
      `;
      
      if (isLiked) {
        const rType = post.reactionType || 'like';
        likeBtnClass += ` active-${rType}`;
        let label = 'Like';
        if (rType === 'celebrate') label = 'Celebrate';
        if (rType === 'love') label = 'Love';
        if (rType === 'support') label = 'Support';
        
        const svgs = {
          like: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--like-blue);"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`,
          celebrate: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--celebrate-green);"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
          love: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--love-red);"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`,
          support: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color:var(--support-purple);"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
        };
        const iconHtml = svgs[rType] || svgs.like;
        
        likeBtnContent = `
          <span class="active-reaction-icon-wrap" style="display: inline-flex; align-items: center; justify-content: center; height:20px; width:20px; margin-right: 6px;">
            ${iconHtml}
          </span>
          <span>${label}</span>
        `;
      }
      
      postCard.innerHTML = `
        <div class="feed-post__header">
          <div class="feed-post__author-info">
            <div class="feed-post__author-avatar" style="background-image: url('${post.avatar}')"></div>
            <div class="feed-post__author-details">
              <a href="#" class="feed-post__author-name">${post.author}</a>
              <span class="feed-post__author-headline">${post.headline}</span>
              <div class="feed-post__metadata">
                <span>${post.time}</span>
                <span>•</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1.25a5.75 5.75 0 013.9 1.54l-1.3 1.3a3.83 3.83 0 00-2.6-.84 3.9 3.9 0 000 7.8 3.83 3.83 0 002.6-.84l1.3 1.3a5.75 5.75 0 01-7.8-7.8 5.75 5.75 0 013.9-1.54z"/>
                </svg>
              </div>
            </div>
          </div>
          <button class="feed-post__options-btn" aria-label="Post Options">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
            </svg>
          </button>
        </div>
        
        <div class="feed-post__body">
          <p class="feed-post__text">${post.text}</p>
        </div>
        
        ${attachmentHtml}
        
        <div class="feed-post__reactions-bar">
          ${reactionsSummaryHtml}
          <div class="comments-count-container">
            ${commentsCountText}
          </div>
        </div>
        
        <div class="feed-post__actions">
          <!-- Reaction hover popover -->
          <div class="reaction-popover">
            <button class="popover-reaction-btn popover-btn-styled like" data-reaction="like" title="Like">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            </button>
            <button class="popover-reaction-btn popover-btn-styled celebrate" data-reaction="celebrate" title="Celebrate">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </button>
            <button class="popover-reaction-btn popover-btn-styled love" data-reaction="love" title="Love">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </button>
            <button class="popover-reaction-btn popover-btn-styled support" data-reaction="support" title="Support">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
          </div>
          
          <button class="${likeBtnClass}" id="like-btn-${post.id}">
            ${likeBtnContent}
          </button>
          <button class="post-action-btn comment-trigger-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M16 2H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V7a5 5 0 00-5-5zm-3 12H7v-2h6zm4-4H7V8h10z"/>
            </svg>
            <span>Comment</span>
          </button>
          <button class="post-action-btn share-trigger-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 12a1 1 0 00-1-1h-4V7a1 1 0 00-2 0v4H8a1 1 0 000 2h4v4a1 1 0 002 0v-4h4a1 1 0 001-1z"/>
            </svg>
            <span>Share</span>
          </button>
        </div>
        
        <!-- Comments Section -->
        <div class="feed-post__comments-section hidden" id="comments-section-${post.id}">
          <div class="comment-input-row">
            <div class="comment-input-avatar" style="background-image: url('${STATE.currentUser.avatar}')"></div>
            <div class="comment-input-box-wrapper">
              <textarea placeholder="Add a comment..." class="comment-textarea" id="comment-textarea-${post.id}"></textarea>
              <button class="comment-submit-btn" id="comment-submit-${post.id}">Post</button>
            </div>
          </div>
          <div class="comments-list-container">
            ${commentsListHtml}
          </div>
        </div>
      `;
      
      // Bind event listeners for actions on this specific post
      
      // 1. Reactions triggers (popover items)
      postCard.querySelectorAll('.popover-reaction-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const rType = btn.getAttribute('data-reaction');
          handlePostReaction(post.id, rType);
        });
      });
      
      // 2. Simple Like toggle (clicking the main button toggles 'like' or 'unlike')
      postCard.querySelector(`#like-btn-${post.id}`).addEventListener('click', (e) => {
        // Prevent click if hovering sub-elements
        if (e.target.closest('.reaction-popover')) return;
        
        if (post.likedByUser) {
          handlePostReaction(post.id, post.reactionType); // Toggles off
        } else {
          handlePostReaction(post.id, 'like');
        }
      });
      
      // 3. Comments section toggle
      const commentsSection = postCard.querySelector(`#comments-section-${post.id}`);
      postCard.querySelector('.comment-trigger-btn').addEventListener('click', () => {
        commentsSection.classList.toggle('hidden');
      });
      
      // Also clicking the comments count text toggles it
      const countBtn = postCard.querySelector('.comments-count-btn');
      if (countBtn) {
        countBtn.addEventListener('click', () => {
          commentsSection.classList.toggle('hidden');
        });
      }
      
      // 4. Textarea submit show/hide logic
      const cTextarea = postCard.querySelector(`#comment-textarea-${post.id}`);
      const cSubmit = postCard.querySelector(`#comment-submit-${post.id}`);
      
      cTextarea.addEventListener('input', () => {
        if (cTextarea.value.trim() !== '') {
          cSubmit.classList.add('visible');
        } else {
          cSubmit.classList.remove('visible');
        }
      });
      
      // 5. Submit comment action
      cSubmit.addEventListener('click', () => {
        const commentText = cTextarea.value.trim();
        if (commentText === '') return;
        
        const newComment = {
          id: `comment-${post.id}-${Date.now()}`,
          author: STATE.currentUser.name,
          headline: STATE.currentUser.headline,
          avatar: STATE.currentUser.avatar,
          time: 'Just now',
          text: commentText
        };
        
        post.comments.push(newComment);
        cTextarea.value = '';
        cSubmit.classList.remove('visible');
        
        renderFeed(true); // render immediately
        document.getElementById(`comments-section-${post.id}`).classList.remove('hidden');
      });
      
      // 6. Share trigger alert
      postCard.querySelector('.share-trigger-btn').addEventListener('click', () => {
        alert('Post link copied to clipboard!');
      });
      
      container.appendChild(postCard);
    });
  }
}

// Handler for custom post reactions
function handlePostReaction(postId, reactionType) {
  const post = STATE.posts.find(p => p.id === postId);
  if (!post) return;
  
  if (reactionType === null) {
    if (post.likedByUser) {
      post.likes--;
      post.likedByUser = false;
      post.reactionType = null;
    }
  } else {
    if (!post.likedByUser) {
      post.likes++;
    }
    post.likedByUser = true;
    post.reactionType = reactionType;
  }
  
  renderFeed();
}

// ==========================================================
// CHAT POPUPS CONTROLLER
// ==========================================================
function openChatWindow(contactId) {
  const contact = STATE.contacts.find(c => c.id === contactId);
  if (!contact) return;
  
  if (STATE.activeChats.includes(contactId)) {
    const existingWindow = document.getElementById(`chat-window-${contactId}`);
    if (existingWindow) {
      existingWindow.querySelector('.chat-window__input').focus();
    }
    return;
  }
  
  if (STATE.activeChats.length >= 3) {
    const oldestId = STATE.activeChats.shift();
    removeChatWindowDOM(oldestId);
  }
  
  STATE.activeChats.push(contactId);
  createChatWindowDOM(contact);
}

function closeChatWindow(contactId) {
  STATE.activeChats = STATE.activeChats.filter(id => id !== contactId);
  removeChatWindowDOM(contactId);
}

function removeChatWindowDOM(contactId) {
  const chatDOM = document.getElementById(`chat-window-${contactId}`);
  if (chatDOM) {
    chatDOM.classList.add('closing');
    setTimeout(() => chatDOM.remove(), 200);
  }
}

function createChatWindowDOM(contact) {
  const container = document.getElementById('active-chats-container');
  if (!container) return;
  
  const chatWindow = document.createElement('div');
  chatWindow.className = 'chat-window';
  chatWindow.id = `chat-window-${contact.id}`;
  
  let messagesHtml = '';
  contact.messages.forEach(msg => {
    messagesHtml += `
      <div class="chat-message ${msg.sender === 'me' ? 'sent' : 'received'}">
        ${msg.text}
      </div>
    `;
  });
  
  chatWindow.innerHTML = `
    <div class="chat-window__header" id="chat-header-${contact.id}">
      <div class="chat-window__header-left">
        <div class="chat-window__avatar" style="background-image: url('${contact.avatar}')"></div>
        <div class="chat-window__title-container">
          <span class="chat-window__title">${contact.name}</span>
          <span class="chat-window__status">${contact.status === 'online' ? 'Active now' : 'Offline'}</span>
        </div>
      </div>
      <div class="chat-window__header-right">
        <button class="header-icon-btn close-chat-btn" aria-label="Close Chat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M12 4.41L10.59 3 8 5.59 5.41 3 4 4.41 6.59 7 4 9.59 5.41 11 8 8.41 10.59 11 12 9.59 9.41 7 12 4.41z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="chat-window__body" id="chat-body-${contact.id}">
      ${messagesHtml}
      <div class="typing-indicator hidden" id="typing-${contact.id}">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
    
    <div class="chat-window__footer">
      <div class="chat-input-row">
        <textarea class="chat-window__input" placeholder="Write a message..." id="chat-input-${contact.id}"></textarea>
        <button class="chat-send-btn" id="chat-send-${contact.id}">Send</button>
      </div>
      <div class="chat-actions-row">
        <div class="chat-action-left-icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="cursor:pointer;"><path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM4 12V4h8v8H4zm6.5-6h-3v1h3V6zm0 2h-3v1h3V8zm0 2h-3v1h3v-1z"/></svg>
        </div>
      </div>
    </div>
  `;
  
  chatWindow.querySelector('.close-chat-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    closeChatWindow(contact.id);
  });
  
  const inputEl = chatWindow.querySelector(`#chat-input-${contact.id}`);
  const sendBtn = chatWindow.querySelector(`#chat-send-${contact.id}`);
  const bodyEl = chatWindow.querySelector(`#chat-body-${contact.id}`);
  
  const sendMessage = () => {
    const text = inputEl.value.trim();
    if (text === '') return;
    
    contact.messages.push({ sender: 'me', text: text });
    
    const sentMsgDiv = document.createElement('div');
    sentMsgDiv.className = 'chat-message sent';
    sentMsgDiv.textContent = text;
    bodyEl.insertBefore(sentMsgDiv, chatWindow.querySelector(`#typing-${contact.id}`));
    
    inputEl.value = '';
    scrollToBottom(bodyEl);
    renderConversations();
    triggerAutoReply(contact, bodyEl);
  };
  
  sendBtn.addEventListener('click', sendMessage);
  
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  
  container.appendChild(chatWindow);
  scrollToBottom(bodyEl);
  inputEl.focus();
}

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight;
}

function triggerAutoReply(contact, bodyEl) {
  const typingIndicator = bodyEl.querySelector(`#typing-${contact.id}`);
  if (!typingIndicator) return;
  
  setTimeout(() => {
    typingIndicator.classList.remove('hidden');
    scrollToBottom(bodyEl);
  }, 800);
  
  setTimeout(() => {
    typingIndicator.classList.add('hidden');
    
    const replies = AUTO_RESPONSES[contact.name] || ["Interesting! Tell me more.", "Got it, let's connect later!"];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    contact.messages.push({ sender: 'them', text: randomReply });
    
    const receivedMsgDiv = document.createElement('div');
    receivedMsgDiv.className = 'chat-message received';
    receivedMsgDiv.textContent = randomReply;
    
    bodyEl.insertBefore(receivedMsgDiv, typingIndicator);
    scrollToBottom(bodyEl);
    
    const messagesBadge = document.getElementById('messages-badge');
    if (messagesBadge) {
      let count = parseInt(messagesBadge.textContent) || 0;
      messagesBadge.textContent = count + 1;
      messagesBadge.classList.remove('hidden');
    }
    
    renderConversations();
  }, 2200);
}

// ==========================================================
// EVENT LISTENERS SETUP
// ==========================================================
function setupEventListeners() {
  
  // 1. Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('light-theme')) {
        document.body.className = 'dark-theme';
        localStorage.setItem('linkedin-theme', 'dark-theme');
      } else {
        document.body.className = 'light-theme';
        localStorage.setItem('linkedin-theme', 'light-theme');
      }
      updateThemeButton();
    });
  }
  
  // 2. Profile Dropdown Toggle
  const profileTrigger = document.getElementById('profile-dropdown-trigger');
  const profileDropdown = document.getElementById('profile-dropdown');
  
  if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = profileTrigger.getAttribute('aria-expanded') === 'true';
      profileTrigger.setAttribute('aria-expanded', !isExpanded);
      profileDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!profileDropdown.contains(e.target) && e.target !== profileTrigger) {
        profileTrigger.setAttribute('aria-expanded', 'false');
        profileDropdown.classList.remove('active');
      }
    });
  }
  
  // 3. Messaging Drawer Toggle and Search
  const msgTrigger = document.getElementById('messaging-bar-trigger');
  const msgBar = document.getElementById('messaging-bar');
  if (msgTrigger && msgBar) {
    msgTrigger.addEventListener('click', () => {
      msgBar.classList.toggle('collapsed');
      msgBar.classList.toggle('expanded');
      
      if (msgBar.classList.contains('expanded')) {
        const messagesBadge = document.getElementById('messages-badge');
        if (messagesBadge) {
          messagesBadge.textContent = '0';
          messagesBadge.classList.add('hidden');
        }
      }
    });
  }
  
  const messagingSearch = document.getElementById('messaging-search-input');
  if (messagingSearch) {
    messagingSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      renderConversations(q);
    });
  }
  
  // 4. Create Post Modal Toggle
  const startPostBtn = document.getElementById('start-post-btn');
  const postModal = document.getElementById('post-modal');
  const closePostModal = document.getElementById('close-post-modal');
  const postTextInput = document.getElementById('post-text-input');
  const submitPostBtn = document.getElementById('submit-post-btn');
  
  if (startPostBtn && postModal) {
    startPostBtn.addEventListener('click', () => {
      postModal.classList.remove('hidden');
      postModal.setAttribute('aria-hidden', 'false');
      postTextInput.focus();
    });
  }
  
  const closeModal = () => {
    postModal.classList.add('hidden');
    postModal.setAttribute('aria-hidden', 'true');
    postTextInput.value = '';
    submitPostBtn.disabled = true;
    clearAttachmentPreview();
  };
  
  if (closePostModal) {
    closePostModal.addEventListener('click', closeModal);
  }
  
  if (postModal) {
    postModal.addEventListener('click', (e) => {
      if (e.target === postModal) {
        closeModal();
      }
    });
  }
  
  if (postTextInput && submitPostBtn) {
    postTextInput.addEventListener('input', () => {
      const hasText = postTextInput.value.trim() !== '';
      const hasImage = !document.getElementById('post-attachment-preview').classList.contains('hidden');
      submitPostBtn.disabled = !(hasText || hasImage);
    });
  }
  
  const submitPostAction = () => {
    const text = postTextInput.value.trim();
    const previewImg = document.getElementById('attachment-preview-img');
    const hasImage = !document.getElementById('post-attachment-preview').classList.contains('hidden');
    
    if (text === '' && !hasImage) return;
    
    const newPost = {
      id: `post-${Date.now()}`,
      author: STATE.currentUser.name,
      headline: STATE.currentUser.headline,
      avatar: STATE.currentUser.avatar,
      time: 'Just now',
      text: text,
      image: hasImage ? previewImg.src : null,
      likes: 0,
      likedByUser: false,
      reactionType: null,
      comments: []
    };
    
    STATE.posts.unshift(newPost);
    renderFeed();
    closeModal();
  };
  
  if (submitPostBtn) {
    submitPostBtn.addEventListener('click', submitPostAction);
  }
  
  // 5. Image Attachment inside Modal
  const imageUploadInput = document.getElementById('modal-image-upload');
  const attachmentPreview = document.getElementById('post-attachment-preview');
  const previewImg = document.getElementById('attachment-preview-img');
  const removeAttachmentBtn = document.getElementById('remove-attachment');
  
  if (imageUploadInput && attachmentPreview && previewImg) {
    imageUploadInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          previewImg.src = event.target.result;
          attachmentPreview.classList.remove('hidden');
          submitPostBtn.disabled = false;
        };
        reader.readAsDataURL(file);
      }
    });
  }
  
  const clearAttachmentPreview = () => {
    if (attachmentPreview && previewImg && imageUploadInput) {
      previewImg.src = '';
      attachmentPreview.classList.add('hidden');
      imageUploadInput.value = '';
    }
  };
  
  if (removeAttachmentBtn) {
    removeAttachmentBtn.addEventListener('click', () => {
      clearAttachmentPreview();
      const hasText = postTextInput.value.trim() !== '';
      submitPostBtn.disabled = !hasText;
    });
  }
  
  // 6. AI Writer Feature inside Modal (customized for Rakesh's tech profile)
  const aiRewriteBtn = document.getElementById('ai-rewrite-btn');
  if (aiRewriteBtn && postTextInput) {
    aiRewriteBtn.addEventListener('click', () => {
      const originalText = postTextInput.value.trim();
      if (originalText === '') {
        postTextInput.value = "I am excited to share a deep-dive architecture breakdown of the Rakexura Game Marketplace rebuild. Using Next.js 15 App Router, React 19, and Supabase RLS, we managed to cut down database load times while maintaining strict security pipelines. #fullstack #nextjs #supabase";
      } else {
        postTextInput.value = `Refined: "${originalText}" \n\nI would love to get your thoughts on this production architecture and how you manage state synchronization in Next.js 15 apps! Let's connect and discuss. #softwareengineering #webdev`;
      }
      submitPostBtn.disabled = false;
      postTextInput.focus();
    });
  }
  
  // 7. News Show More
  const newsExpandBtn = document.getElementById('news-expand-btn');
  if (newsExpandBtn) {
    newsExpandBtn.addEventListener('click', () => {
      STATE.isNewsExpanded = !STATE.isNewsExpanded;
      renderNews();
    });
  }
  
  // 8. Global Search Suggestions & Filtering
  const searchInput = document.getElementById('global-search-input');
  const searchContainer = document.getElementById('search-container');
  const suggestionsDropdown = document.getElementById('search-suggestions-dropdown');
  
  if (searchInput && suggestionsDropdown) {
    searchInput.addEventListener('focus', () => {
      searchContainer.classList.add('focused');
      showSearchSuggestions(searchInput.value);
    });
    
    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        searchContainer.classList.remove('focused');
        suggestionsDropdown.classList.remove('active');
      }, 200);
    });
    
    searchInput.addEventListener('input', () => {
      STATE.searchQuery = searchInput.value;
      showSearchSuggestions(searchInput.value);
      renderFeed();
    });
  }
  
  const showSearchSuggestions = (val) => {
    if (!suggestionsDropdown) return;
    
    if (val.trim() === '') {
      suggestionsDropdown.innerHTML = '';
      STATE.contacts.forEach(contact => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
          <div class="suggestion-avatar" style="background-image: url('${contact.avatar}')"></div>
          <div class="suggestion-info">
            <span class="suggestion-name">${contact.name}</span>
            <span class="suggestion-desc">${contact.headline}</span>
          </div>
        `;
        item.addEventListener('mousedown', () => {
          searchInput.value = contact.name;
          STATE.searchQuery = contact.name;
          renderFeed();
        });
        suggestionsDropdown.appendChild(item);
      });
      suggestionsDropdown.classList.add('active');
    } else {
      const matches = STATE.contacts.filter(c => c.name.toLowerCase().includes(val.toLowerCase()));
      suggestionsDropdown.innerHTML = '';
      
      if (matches.length > 0) {
        matches.forEach(contact => {
          const item = document.createElement('div');
          item.className = 'suggestion-item';
          item.innerHTML = `
            <div class="suggestion-avatar" style="background-image: url('${contact.avatar}')"></div>
            <div class="suggestion-info">
              <span class="suggestion-name">${contact.name}</span>
              <span class="suggestion-desc">${contact.headline}</span>
            </div>
          `;
          item.addEventListener('mousedown', () => {
            searchInput.value = contact.name;
            STATE.searchQuery = contact.name;
            renderFeed();
          });
          suggestionsDropdown.appendChild(item);
        });
        suggestionsDropdown.classList.add('active');
      } else {
        suggestionsDropdown.classList.remove('active');
      }
    }
  };
  
  // 9. Feed Sorting Actions
  const sortTrigger = document.getElementById('feed-sort-trigger');
  const sortMenu = document.getElementById('feed-sort-menu');
  
  if (sortTrigger && sortMenu) {
    sortTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      sortMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
      sortMenu.classList.remove('active');
    });
    
    const sortItems = sortMenu.querySelectorAll('.sort-menu-item');
    sortItems.forEach(item => {
      item.addEventListener('click', () => {
        sortItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        const sortBy = item.dataset.sort;
        STATE.sortBy = sortBy;
        sortTrigger.querySelector('.selected-sort').textContent = item.textContent;
        
        renderFeed();
      });
    });
  }
}

// ==========================================================
// SPA ROUTER & NAVIGATION
// ==========================================================
window.addEventListener('hashchange', handleRouting);

function handleRouting() {
  const hash = window.location.hash || '#feed';
  
  // Hide all grids
  const grids = ['feed-grid', 'network-grid', 'jobs-grid', 'messaging-grid', 'notifications-grid', 'profile-grid'];
  grids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('linkedin-section-transition');
    }
  });
  
  // Show active grid
  let activeGridId = 'feed-grid';
  if (hash === '#network') activeGridId = 'network-grid';
  else if (hash === '#jobs') activeGridId = 'jobs-grid';
  else if (hash === '#messaging') activeGridId = 'messaging-grid';
  else if (hash === '#notifications') activeGridId = 'notifications-grid';
  else if (hash === '#profile') activeGridId = 'profile-grid';
  
  const activeGrid = document.getElementById(activeGridId);
  if (activeGrid) {
    activeGrid.classList.remove('hidden');
    // Force CSS reflow to restart animation on navigation
    void activeGrid.offsetWidth;
    activeGrid.classList.add('linkedin-section-transition');
  }
  
  // Update active navigation highlights
  const navIds = {
    '#feed': 'nav-home',
    '#network': 'nav-network',
    '#jobs': 'nav-jobs',
    '#messaging': 'nav-messaging',
    '#notifications': 'nav-notifications'
  };
  
  // Clear active classes
  Object.values(navIds).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  
  // Set active class
  const activeNavId = navIds[hash];
  if (activeNavId) {
    const el = document.getElementById(activeNavId);
    if (el) el.classList.add('active');
  }
  
  // Run page-specific initializers
  if (hash === '#network') initNetworkView();
  else if (hash === '#jobs') initJobsView();
  else if (hash === '#messaging') initMessagingView();
  else if (hash === '#notifications') initNotificationsView();
  
  // Close profile dropdown
  const profileTrigger = document.getElementById('profile-dropdown-trigger');
  const profileDropdown = document.getElementById('profile-dropdown');
  if (profileTrigger && profileDropdown) {
    profileTrigger.setAttribute('aria-expanded', 'false');
    profileDropdown.classList.remove('active');
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Elegant Toast Alert
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '24px';
  toast.style.left = '24px';
  toast.style.backgroundColor = 'var(--bg-card)';
  toast.style.color = 'var(--text-primary)';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '8px';
  toast.style.border = '1px solid var(--border-color)';
  toast.style.boxShadow = 'var(--shadow-lg)';
  toast.style.zIndex = '10000';
  toast.style.fontSize = '14px';
  toast.style.fontWeight = '500';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '8px';
  toast.style.transition = 'opacity 0.3s ease-out';
  toast.innerHTML = `
    <span style="color: var(--accent-color); font-weight: bold;">✓</span>
    <span>${msg}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ==========================================================
// MY NETWORK VIEW CONTROLLER
// ==========================================================
function initNetworkView() {
  const countEl = document.getElementById('net-connections-count');
  if (countEl) countEl.textContent = STATE.connectionsCount;
  
  const grid = document.getElementById('network-suggestions-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  STATE.suggestions.forEach(sug => {
    const isPending = sug.pending === true;
    const card = document.createElement('div');
    card.className = 'suggestion-card';
    card.id = `sug-card-${sug.id}`;
    card.innerHTML = `
      <button class="suggestion-card__close" onclick="removeSuggestion('${sug.id}')">✕</button>
      <div class="suggestion-card__banner" style="background-color: #a0b4b7;"></div>
      <div class="suggestion-card__avatar" style="background-image: url('${sug.avatar}')"></div>
      <h4 class="suggestion-card__name">${sug.name}</h4>
      <p class="suggestion-card__headline">${sug.headline}</p>
      <span class="suggestion-card__mutual">${sug.mutual} mutual connections</span>
      <button class="suggestion-card__btn ${isPending ? 'pending' : ''}" id="sug-btn-${sug.id}">
        ${isPending ? 'Pending' : 'Connect'}
      </button>
    `;
    
    const connectBtn = card.querySelector(`#sug-btn-${sug.id}`);
    connectBtn.addEventListener('click', () => {
      if (sug.pending) {
        sug.pending = false;
        STATE.connectionsCount--;
        connectBtn.classList.remove('pending');
        connectBtn.textContent = 'Connect';
      } else {
        sug.pending = true;
        STATE.connectionsCount++;
        connectBtn.classList.add('pending');
        connectBtn.textContent = 'Pending';
        showToast(`Invitation sent to ${sug.name}`);
      }
      const netCount = document.getElementById('net-connections-count');
      if (netCount) netCount.textContent = STATE.connectionsCount;
    });
    
    grid.appendChild(card);
  });
}

function removeSuggestion(id) {
  const card = document.getElementById(`sug-card-${id}`);
  if (card) {
    card.classList.add('removed');
    setTimeout(() => {
      card.remove();
      STATE.suggestions = STATE.suggestions.filter(s => s.id !== id);
    }, 250);
  }
}

function handleInvitation(id, accept) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('fade-out');
    setTimeout(() => {
      el.remove();
      if (accept) {
        STATE.connectionsCount++;
        const countEl = document.getElementById('net-connections-count');
        if (countEl) countEl.textContent = STATE.connectionsCount;
        showToast("Invitation accepted!");
      } else {
        showToast("Invitation dismissed.");
      }
    }, 300);
  }
}

// Bind connections helpers globally
window.removeSuggestion = removeSuggestion;
window.handleInvitation = handleInvitation;

// ==========================================================
// JOBS VIEW CONTROLLER
// ==========================================================
function initJobsView() {
  renderJobsList(STATE.jobs);
  
  const titleSearch = document.getElementById('jobs-title-search');
  const locSearch = document.getElementById('jobs-location-search');
  const searchTrigger = document.getElementById('job-search-trigger');
  
  if (searchTrigger) {
    searchTrigger.onclick = () => {
      const qTitle = titleSearch ? titleSearch.value.toLowerCase().trim() : '';
      const qLoc = locSearch ? locSearch.value.toLowerCase().trim() : '';
      
      const filtered = STATE.jobs.filter(job => {
        const matchesTitle = job.title.toLowerCase().includes(qTitle) || job.company.toLowerCase().includes(qTitle);
        const matchesLoc = job.location.toLowerCase().includes(qLoc);
        return matchesTitle && matchesLoc;
      });
      
      const header = document.getElementById('jobs-results-header');
      if (header) {
        if (qTitle || qLoc) {
          header.textContent = `Search results (${filtered.length})`;
        } else {
          header.textContent = 'Recommended for you';
        }
      }
      
      renderJobsList(filtered);
    };
  }
}

function renderJobsList(jobs) {
  const container = document.getElementById('jobs-list-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const appliedBadge = document.getElementById('applied-jobs-badge');
  if (appliedBadge) appliedBadge.textContent = STATE.appliedJobs.length;
  
  if (jobs.length === 0) {
    container.innerHTML = `
      <div style="padding: 32px; text-align: center; color: var(--text-secondary);">
        <h4>No jobs found matching your criteria</h4>
        <p style="font-size: 13px; margin-top: 4px;">Try searching for Next.js, Rakexura, Frontend, or Chennai.</p>
      </div>
    `;
    return;
  }
  
  jobs.forEach(job => {
    const isApplied = STATE.appliedJobs.includes(job.id);
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <div class="job-logo">${job.logoLetter}</div>
      <div class="job-info">
        <h4 class="job-title">${job.title}</h4>
        <p class="job-company">${job.company}</p>
        <p class="job-loc">${job.location}</p>
        <div class="job-meta-row">
          ${job.easyApply ? '<span class="easy-apply-tag">✦ Easy Apply</span>' : ''}
          <span class="job-posted-time">${job.posted}</span>
        </div>
      </div>
      ${isApplied 
        ? `<div class="applied-tag-status">
             <span style="color: var(--accent-color); font-size: 16px; margin-right: 4px;">✓</span> Applied
           </div>`
        : `<button class="apply-button-action" id="apply-btn-${job.id}">
             ${job.easyApply ? 'Easy Apply' : 'Apply'}
           </button>`
      }
    `;
    
    if (!isApplied) {
      const applyBtn = card.querySelector(`#apply-btn-${job.id}`);
      applyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (job.easyApply) {
          openEasyApplyModal(job);
        } else {
          window.open('https://careers.google.com/', '_blank');
        }
      });
    }
    
    container.appendChild(card);
  });
}

function openEasyApplyModal(job) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'apply-modal-overlay';
  modalOverlay.innerHTML = `
    <div class="apply-modal">
      <div class="apply-modal__header">
        <h3 class="apply-modal__title">Easy Apply to ${job.company}</h3>
        <button class="apply-modal__close-btn" id="close-apply-modal">✕</button>
      </div>
      <div class="apply-modal__body">
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Applying for <strong>${job.title}</strong></p>
        <div class="apply-modal__form-group">
          <label>Full Name</label>
          <input type="text" id="apply-fullname" value="${STATE.currentUser.name}">
        </div>
        <div class="apply-modal__form-group">
          <label>Email address</label>
          <input type="email" id="apply-email" value="12k21rakeshkannam@gmail.com">
        </div>
        <div class="apply-modal__form-group">
          <label>Phone number</label>
          <input type="text" id="apply-phone" value="+91 8317416695">
        </div>
        <div class="apply-modal__form-group">
          <label>Resume (PDF/Word)</label>
          <input type="file" accept=".pdf,.doc,.docx" id="apply-resume">
        </div>
      </div>
      <div class="apply-modal__footer">
        <button class="apply-cancel-btn" id="cancel-apply-modal">Cancel</button>
        <button class="apply-submit-btn" id="submit-apply-modal">Submit application</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modalOverlay);
  
  const closeModal = () => modalOverlay.remove();
  
  modalOverlay.querySelector('#close-apply-modal').onclick = closeModal;
  modalOverlay.querySelector('#cancel-apply-modal').onclick = closeModal;
  
  modalOverlay.querySelector('#submit-apply-modal').onclick = () => {
    STATE.appliedJobs.push(job.id);
    showToast(`Application successfully sent to ${job.company}!`);
    closeModal();
    renderJobsList(STATE.jobs);
  };
}

// ==========================================================
// MESSAGING TAB CONTROLLER
// ==========================================================
let currentFullContactId = 'contact-dhanush';

function initMessagingView() {
  renderConversationsList();
  renderFullChatPanel();
}

function renderConversationsList() {
  const listEl = document.getElementById('full-conversations-list');
  if (!listEl) return;
  
  listEl.innerHTML = '';
  
  STATE.contacts.forEach(contact => {
    const lastMsg = contact.messages[contact.messages.length - 1];
    const snippet = lastMsg ? (lastMsg.sender === 'me' ? `You: ${lastMsg.text}` : lastMsg.text) : 'No messages yet';
    const isActive = contact.id === currentFullContactId;
    
    const div = document.createElement('div');
    div.className = `conversation-item ${isActive ? 'active' : ''}`;
    div.innerHTML = `
      <div class="conversation-avatar-container">
        <div class="conversation-avatar" style="background-image: url('${contact.avatar}')"></div>
        <span class="status-dot ${contact.status === 'online' ? 'online' : ''}"></span>
      </div>
      <div class="conversation-info">
        <div class="conversation-header">
          <span class="conversation-name" style="font-weight: 600;">${contact.name}</span>
          <span class="conversation-time-lbl">3:45 PM</span>
        </div>
        <p class="conversation-snippet">${snippet}</p>
      </div>
    `;
    
    div.onclick = () => {
      currentFullContactId = contact.id;
      renderConversationsList();
      renderFullChatPanel();
    };
    
    listEl.appendChild(div);
  });
}

function renderFullChatPanel() {
  const headerEl = document.getElementById('full-chat-header-details');
  const bodyEl = document.getElementById('full-chat-messages-body');
  const controlsEl = document.getElementById('full-chat-footer-controls');
  
  if (!headerEl || !bodyEl || !controlsEl) return;
  
  const contact = STATE.contacts.find(c => c.id === currentFullContactId);
  if (!contact) return;
  
  headerEl.innerHTML = `
    <div class="full-chat-avatar" style="background-image: url('${contact.avatar}')"></div>
    <div>
      <h4 class="full-chat-name">${contact.name}</h4>
      <p class="full-chat-headline">${contact.headline}</p>
    </div>
  `;
  
  let messagesHtml = '';
  contact.messages.forEach(msg => {
    messagesHtml += `
      <div class="full-chat-message ${msg.sender === 'me' ? 'sent' : 'received'}">
        ${msg.text}
      </div>
    `;
  });
  messagesHtml += `
    <div class="typing-indicator hidden" id="full-typing-${contact.id}">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  bodyEl.innerHTML = messagesHtml;
  scrollToBottom(bodyEl);
  
  controlsEl.innerHTML = `
    <div class="full-chat-input-row">
      <textarea id="full-chat-input-text" placeholder="Write a message..."></textarea>
      <button class="full-chat-send-btn" id="full-chat-send-btn-action">Send</button>
    </div>
  `;
  
  const inputEl = controlsEl.querySelector('#full-chat-input-text');
  const sendBtn = controlsEl.querySelector('#full-chat-send-btn-action');
  
  const sendMessageFull = () => {
    const text = inputEl.value.trim();
    if (text === '') return;
    
    contact.messages.push({ sender: 'me', text: text });
    
    const sentDiv = document.createElement('div');
    sentDiv.className = 'full-chat-message sent';
    sentDiv.textContent = text;
    bodyEl.insertBefore(sentDiv, bodyEl.querySelector(`#full-typing-${contact.id}`));
    
    inputEl.value = '';
    scrollToBottom(bodyEl);
    
    renderConversationsList();
    renderConversations();
    
    triggerAutoReplyFull(contact, bodyEl);
  };
  
  sendBtn.onclick = sendMessageFull;
  inputEl.onkeydown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessageFull();
    }
  };
}

function triggerAutoReplyFull(contact, bodyEl) {
  const typingIndicator = bodyEl.querySelector(`#full-typing-${contact.id}`);
  if (!typingIndicator) return;
  
  setTimeout(() => {
    typingIndicator.classList.remove('hidden');
    scrollToBottom(bodyEl);
  }, 800);
  
  setTimeout(() => {
    typingIndicator.classList.add('hidden');
    
    const replies = AUTO_RESPONSES[contact.name] || ["Interesting! Tell me more.", "Got it, let's connect later!"];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    contact.messages.push({ sender: 'them', text: randomReply });
    
    const receivedDiv = document.createElement('div');
    receivedDiv.className = 'full-chat-message received';
    receivedDiv.textContent = randomReply;
    
    bodyEl.insertBefore(receivedDiv, typingIndicator);
    scrollToBottom(bodyEl);
    
    renderConversationsList();
    renderConversations();
  }, 2200);
}

// ==========================================================
// NOTIFICATIONS CONTROLLER
// ==========================================================
function initNotificationsView() {
  renderNotificationsList('all');
  
  const btnAll = document.getElementById('noti-filter-all');
  const btnPosts = document.getElementById('noti-filter-posts');
  const btnMentions = document.getElementById('noti-filter-mentions');
  
  const resetActive = () => {
    [btnAll, btnPosts, btnMentions].forEach(b => { if (b) b.classList.remove('active'); });
  };
  
  if (btnAll) {
    btnAll.onclick = () => { resetActive(); btnAll.classList.add('active'); renderNotificationsList('all'); };
  }
  if (btnPosts) {
    btnPosts.onclick = () => { resetActive(); btnPosts.classList.add('active'); renderNotificationsList('posts'); };
  }
  if (btnMentions) {
    btnMentions.onclick = () => { resetActive(); btnMentions.classList.add('active'); renderNotificationsList('mentions'); };
  }
}

function renderNotificationsList(filter) {
  const container = document.getElementById('notifications-list-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  let list = STATE.notifications;
  if (filter === 'posts') {
    list = list.filter(n => n.type === 'post' || n.type === 'comment');
  } else if (filter === 'mentions') {
    list = list.filter(n => n.type === 'mention');
  }
  
  if (list.length === 0) {
    container.innerHTML = `
      <div style="padding: 32px; text-align: center; color: var(--text-secondary);">
        <h4>No notifications yet</h4>
        <p style="font-size: 12px; margin-top: 4px;">Notifications about your posts or profile visits will show up here.</p>
      </div>
    `;
    return;
  }
  
  list.forEach(noti => {
    const item = document.createElement('div');
    item.className = 'noti-card-item';
    item.innerHTML = `
      <div class="noti-card-avatar" style="background-image: url('${noti.avatar}')"></div>
      <div class="noti-card-content">
        <p class="noti-card-text">${noti.text}</p>
        <span class="noti-card-time">${noti.time}</span>
      </div>
    `;
    
    item.onclick = () => {
      noti.read = true;
      showToast("Notification marked as read");
      
      const badge = document.getElementById('notifications-badge');
      if (badge) {
        let unread = STATE.notifications.filter(n => !n.read).length;
        badge.textContent = unread;
        if (unread === 0) badge.classList.add('hidden');
      }
    };
    
    container.appendChild(item);
  });
}
