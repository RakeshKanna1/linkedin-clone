# CareerConnect - Professional Networking Platform

A responsive, professional networking website frontend inspired by LinkedIn, designed as a placement portfolio assignment.

## Project Concept

- **Project Name**: CareerConnect
- **Tagline**: Build your network. Grow your career.
- **Goal**: Create an original frontend prototype detailing home feeds, professional profile dashboards, job catalogs, network size summaries, and messaging tabs.

## Key Features

- **Global Navigation System**: Top header navbar with highlight tracks, including collapsed tablet icons and bottom mobile menus.
- **Interactive Home Feed (`index.html`)**:
  - 3-column desktop layout (Profile card sidebar, central post feed, right trending topics card).
  - Create Post card: Input opens a modal form popup. Submitting appends a new post card to the top of the feed and flashes a temporary green notification.
  - 8 professional sample posts: Likes turn active and increment counters, comments expand and allow local appends, and repost triggers alerts.
- **Professional Profile (`profile.html`)**:
  - Renders cover placeholders, avatar shapes, contact details, experience timelines (with roles, companies, durations, and skills), education history, skills tags, and 3 projects (CareerBridge AI, E-commerce, and Food Delivery) complete with demo/GitHub links.
- **Jobs Board (`jobs.html`)**:
  - Showcases 12 mock job openings showing company, location, format, experience and skill tags.
  - Search fields filter jobs by title/company or location dynamically.
- **Network Page (`network.html`)**:
  - Connect buttons trigger a "Pending/Connected" state, incrementing connection statistics instantly.
- **Direct Messages (`messages.html`)**:
  - Split layout conversation threads. Supports message sending with automatic simulated chat replies after a 1.5-second delay.

## File Structure

```text
linkedin-clone/
├── index.html        # Home Feed with Left/Right sidebars and post modal
├── profile.html      # Professional Profile with experience, skills & projects
├── jobs.html         # Job listing board with search query filters
├── network.html      # Connection invitations and suggestions list
├── messages.html     # Direct messaging panels with chat threads
├── style.css         # Professional theme design tokens and columns media queries
├── script.js         # Countdown loop logic, list filters & form validations
└── README.md         # Project documentation
```

## Technologies Used

- **Markup Structure**: HTML5 Semantic Layouts
- **Style Rules**: CSS3 custom variables, media flex/grid columns
- **Functionality**: ES6 Javascript

## How to Run

1. Clone or download this project folder to your local machine.
2. Double-click the [index.html](file:///C:/Users/12k21/Desktop/Tap%20Projects/linkedin-clone/index.html) file to launch it directly inside any web browser.
3. Serve using a local server extension (like VS Code Live Server) to experience smooth active page anchors.

## GitHub Pages Deployment

To host this project online:
1. Initialize git inside the `linkedin-clone` directory: `git init`.
2. Commit files: `git add .` and `git commit -m "Initial commit"`.
3. Create a public repository on GitHub, link remote, and push to main.
4. Enable **GitHub Pages** under the settings inside the GitHub repository, select the `main` branch, and click save.
5. Deployment URL: `https://username.github.io/repository-name/index.html`

## AI Usage Disclosure

This project was built pair-programming with Antigravity, an advanced AI coding assistant by Google DeepMind. The assistant assisted in building responsive stylesheets, structuring post modal scripts, rendering corporate vector SVGs, and validating accessible semantic markers.
