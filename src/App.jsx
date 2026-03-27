import { useState } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
*, *::before, *::after {box-sizing: border-box; margin: 0; padding: 0; }

:root {
    --bg: #0d0f14;
    --surface: #161920;
    --border: #ffffff12;
    --accent: #5dffa0;
    --text: #e8eaf0;
    --muted: #7a7f8e;
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
}

html { scroll-behavior: smooth; }

body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    }
    
/* NAV */
nav {
position: fixed; top: 0; left: 0; right: 0;
display: flex; align-items: center; justify-content: space-between;
padding: 1.2rem 6%;
background: #0d0f14cc;
backdrop-filter: blur(12px);
border-bottom: 1px solid var(--border);
z-index: 100;
}
.logo { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; }
.logo span { color: var(--accent); }
nav ul { list-style: none; display: flex; gap: rem; }
nav ul a { color: var(--muted); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
nav ul a:hover { color: var(--accent); }

/* SECTIONS */
section { padding: 100px 6%; max-width: 1000px; margin: 0 auto; }
.divider { border-top: 1px solid var(--border); }

.section-label {
    font-size: 0.78rem; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 0.6rem;
}
h2 {
    font-family: var(--font-head); font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 800; letter-spacing: -1px; margin-bottom: 3rem;
}

/* HERO */
#hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding-top: 120px; }
.badge {
    display: inline-block; background: #5dffa018; color: var(--accent);
    border: 1px solid #5dffa030; border-radius: 100px;
    padding: 0.3rem 0.9rem; font-size: 0.78rem; letter-spacing: 0.08em;
    text-transform: uppercase; margin-bottom: 1.6rem; width: fit-content;
}
h1 {
    font-family: var(--font-head); font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 800; line-height: 1.1; letter-spacing: -2px; margin-bottom: 1.4rem;
}
h1 em { color: var(--accent); font-style: normal; }
.hero-sub { font-size: 1.1rem; color: var(--muted); max-width: 500px; margin-bottom: 2.4rem; }
.btn-row { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn {
    display: inline-block; padding: 0.75rem 1.6rem; border-radius: 8px;
    font-family: var(--font-body); font-weight: 500; font-size: 0.95rem;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.15s; border: none;
}
.btn:hover { opacity: 0.85; transform: translateY(-2px); }
.btn-primary { background: var(--accent); color: #0d0f14; }
.btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--border); }

/* ABOUT */
.about-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.4rem; }
.about-grid p { color: var(--muted); margin-bottom: 1rem; }
.skills-list { display: flex; flex-wrap: wrap; gap: 0.6rem; list-style: none; }
.skills-list li {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 6px; padding: 0.35rem 0.9rem; font-size: 0.85rem; color: var(--text);
}

/* PROJECTS */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.4rem; }
.card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 12px; padding: 1.6rem;
    transition: border-color 0.2s, trahsform 0.2s;
}
.card:hover { border-color: var(--accent); transform: translateY(-4px); }
.card-tag { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 0.8rem; }
.card h3 { font-family: var(--font-head); font-size: 1.15rem; font-weight: 700; margin-bottom: 0.6rem; }
.card p { color: var(--muted); font-size: 0.9rem; margin-bottom: 1.2rem; }
.card-links { display: flex; gap: 0.8rem; }
.card-links a {
    font-size: 0.82rem; font-weight: 500; color: var(--text); text-decoration: none;
    border-bottom: 1px solid var(--border); padding-bottom: 1px; transition: color 0.2s, border-color 0.2s;
}
.card-links a:hover { color: var(--accent); border-color: var(--accent); }

/* CONTACT */
.contact-box {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 2.4rem; max-width: 520px;
}
.contact-box > p { color: var(--muted); margin-bottom: 1.6rem; }
.field { margin-bottom: 1rem; }
.field { display: block; font-size: 0.82rem; color: var(--muted); margin-bottom: 0.4rem; }
.field input, .field textarea {
    width: 100%; background: var(--bg); border: 1px solid var(--border);
    border-radius: 8px; color: var(--text); font-family: var(--font-body);
    font-size: 0.95rem; padding: 0.7rem 1rem; outline: none;
    transition: border-color 0.2s; resize: vertical;
}
    .field input:focus, .field textarea:focus { border-color: var(--accent); }
    .form-msg { font-size: 0.85rem; min-height:1.2rem; margin-top: 0.6rem; }
    .form-msg.success { color: var(--accent); }
    .form-msg.error { color: #ff6b6b; }

/* FOOTER */
footer {
    text-align: center; padding: 2rem 6%;
    color: var(--muted); font-size: 0.82rem;
    border-top: 1px solid var(--border);
}

/* RESPONSIVE */
@media (max-width: 640px) {
    .about-grid { grid-template-columns: 1fr; }
    nav ul { gap: 1.2rem; }
}
`;

const SKILLS = [
  "JavaScript", "React", "Node.js", "Express",
  "SQL", "Websockets", "Git", "Rest APIs", "Vite", "HTML & CSS",
];

const PROJECTS = [
  {
    tag: "Full Stack . Real-Time",
    title: "ChatHub (Nexus)",
    desc: "A real-time chat application built with React, Node.js, Express, and Websockets. It features user authentication, multiple chat rooms, and a sleek, responsive design.",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live Demo", href: "#" }],
  },
  {
    tag: "Front-End * JavaScript",
    title: "Todo List App",
    desc: "A simple and intuitive todo list application built with JavaScript, HTML, and CSS. It allows users to add, edit, and delete tasks, helping them stay organized and productive.",
    links: [
      { label: "GitHub", href: "#" }],
  },
  {
    tag: "SQL * HTML",
    title: "Library Database",
    desc: "A library database application that allows users to manage books, authors, and borrowers. Built with Node.js, Express, and SQL for the backend, and React for the frontend.",
    links: [
      { label: "GitHub", href: "#" }],
  },
  {
    tag: "React * Responsive",
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects and skills. Built with React and styled with CSS, it features smooth scrolling, responsive design, and a clean, modern aesthetic.",
    links: [
      { label: "GitHub", href: "#" }],
  },
];

function Nav() {
  return (
    <nav>
      <div className="logo">S<span>.</span></div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="badge"> Available for opportunities</div>
      <h1>Hi, I'm <em>Shaquille</em>.<br />I build cool things for the web.</h1>
      <p className="hero-sub">
        I'm a passionate full-stack developer with experience in building dynamic and responsive web applications. I specialize in turning ideas into reality using code. I am always eager to learn new technologies and improve my skills.
      </p>
      <div className="btn-row">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-ghost">Contact Me</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="divider">
      <p className="section-label">About Me</p>
      <h2>Passionate Developer & Lifelong Learner</h2>
      <div className="about-grid">
        <div>
          <p> I'm a software developer with a strong foundation in JavaScript and a passion for building web applications. I have experience working with both front-end and back-end technologies, allowing me to create full-stack solutions that are efficient, scalable, and user-friendly.</p>
          <p> When I am not coding, I stay current by exploring emerging technologies, contributing to open-source projects, and continuously improving my skills through learning and experimentation.</p>
        </div>
        <div>
          <p className="section-label" style={{ marginBottom: "0.6rem" }}>Skills & Technologies</p>
          <ul className="skills-list">
            {SKILLS.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="divider">
      <p className="section-label">My Work</p>
      <h2>Some Things I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className="card" key={project.title}>
            <p className="card-tag">{project.tag}</p>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="card-links">
              {project.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

  const handleSubmit = (e) => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setStatus({ msg: "Please fill in all fields.", type: "error" });
      return;
    }
    if (!email.includes("@")) {
      setStatus({ msg: "Please enter a valid email address.", type: "error" });
      return;
    }
    setStatus({ msg: `Thanks, ${name}! I'll get back to you soon.`, type: "success" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="divider">
      <p className="section-label">Get In Touch</p>
      <h2>Contact Me</h2>
      <div className="contact-box">
        <p>I'm currently open to new opportunities and collaborations. Whether you have a question, want to work together, or just want to say hi, feel free to reach out!</p>
        <div className="field">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" />
        </div>
        <div className="field">
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="What's going on?" />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Send Message</button>
        {status.msg && <p className={`form-msg ${status.type}`}>{status.msg}</p>}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer><p>Built by Shaquille Williams &mdash; &copy; 2026</p></footer>
  );
}

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}