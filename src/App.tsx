import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type IconName =
  | "arrow"
  | "arrowLeft"
  | "book"
  | "briefcase"
  | "camera"
  | "check"
  | "clock"
  | "code"
  | "design"
  | "eye"
  | "eyeOff"
  | "heart"
  | "marketing"
  | "menu"
  | "play"
  | "search"
  | "software"
  | "star"
  | "users"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    arrowLeft: <><path d="M19 12H5M11 6l-6 6 6 6" /></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5z" /><path d="M4 7.5v12M8 8h8" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    camera: <><path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11h18V7a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
    design: <><path d="M12 3 4 7v6c0 5 3.4 7.7 8 8 4.6-.3 8-3 8-8V7z" /><path d="m8.5 12 2.2 2.2L16 9" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" /><circle cx="12" cy="12" r="2.5" /></>,
    eyeOff: <><path d="m3 3 18 18M10.6 6.2A10.4 10.4 0 0 1 12 6c6.5 0 10 6 10 6s-.7 1.3-2.1 2.8M6.6 6.7C3.6 8.5 2 12 2 12s3.5 6 10 6a10 10 0 0 0 4-.8M9.9 9.9a3 3 0 0 0 4.2 4.2" /></>,
    heart: <path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8z" />,
    marketing: <><path d="m3 11 18-7-7 18-2-8z" /><path d="m12 14 9-10" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    play: <path d="m9 7 8 5-8 5z" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    star: <path d="m12 2.8 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9z" />,
    users: <><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="/" aria-label="ByteSpace home">
      <span className="logo-mark"><span /></span>
      <strong>ByteSpace</strong>
    </a>
  );
}

function Button({
  children,
  variant = "lime",
  href = "#courses",
}: {
  children: React.ReactNode;
  variant?: "lime" | "outline" | "blue";
  href?: string;
}) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
      <Icon name="arrow" size={18} />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container nav-inner">
        <Logo light />
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#courses" onClick={() => setOpen(false)}>Courses</a>
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
          <a href="#creators" onClick={() => setOpen(false)}>Become a Creator</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <div className="mobile-nav-actions">
            <a href="/signin">Sign In</a>
            <Button href="/signup">Get Started</Button>
          </div>
        </div>
        <div className="nav-actions">
          <a href="/signin">Sign In</a>
          <Button href="/signup">Get Started</Button>
        </div>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
    </nav>
  );
}

const avatarUrls = [
  "/avatars/avatar-1.svg",
  "/avatars/avatar-2.svg",
  "/avatars/avatar-3.svg",
  "/avatars/avatar-4.svg",
];

function AvatarStack({ count = 3 }: { count?: number }) {
  return (
    <div className="avatar-stack" aria-label={`${count} student avatars`}>
      {avatarUrls.slice(0, count).map((url, index) => (
        <img key={url} src={url} alt="" loading="lazy" style={{ zIndex: count - index }} />
      ))}
    </div>
  );
}

function FloatingStatCard({ type }: { type: "progress" | "students" | "course" }) {
  if (type === "progress") {
    return (
      <div className="floating-card progress-card">
        <div className="floating-icon"><Icon name="play" size={16} /></div>
        <div><span>Learning Progress</span><strong>55%</strong><div className="progress"><i /></div></div>
      </div>
    );
  }
  if (type === "course") {
    return (
      <div className="floating-card mini-course">
        <div className="mini-thumb"><Icon name="design" size={22} /></div>
        <div><small>POPULAR COURSE</small><strong>UI/UX Design</strong><span>12 lessons · 8h 30m</span></div>
      </div>
    );
  }
  return (
    <div className="floating-card students-card">
      <span>Happy Students</span>
      <div><AvatarStack count={4} /><strong>10K+</strong></div>
    </div>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <Navbar />
      <div className="hero-grid" />
      <div className="shape hero-circle" />
      <div className="shape hero-triangle" />
      <div className="scribble scribble-one">∿∿∿</div>
      <div className="spark spark-one">✦</div>
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow light"><span /> Build skills. Shape your future.</div>
          <h1>Get Access to Hundreds <em>Courses</em> Available</h1>
          <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
          <form className="search-bar" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="hero-search">Search courses</label>
            <Icon name="search" size={21} />
            <input id="hero-search" type="search" placeholder="Course, topic, creator" />
            <button type="submit">Search <Icon name="arrow" size={17} /></button>
          </form>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <div className="photo-backdrop" />
            <img
              src="https://images.unsplash.com/photo-1649767428212-7590dbf20116?auto=format&fit=crop&w=900&q=90"
              alt="A creative student smiling while holding a laptop"
            />
          </div>
          <FloatingStatCard type="course" />
          <FloatingStatCard type="progress" />
          <FloatingStatCard type="students" />
          <div className="orbit-dots">••••••</div>
        </div>
      </div>
    </header>
  );
}

function TrustLogos() {
  return (
    <section className="trust-bar" aria-label="Trusted learning partners">
      <div className="container trust-inner">
        <span className="trust-label">Trusted by learners from</span>
        {["Nexa", "VERTEX", "LUMOS", "Capsule", "QUANTUM"].map((name, index) => (
          <div className={`trust-logo logo-${index}`} key={name}><i />{name}</div>
        ))}
      </div>
    </section>
  );
}

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking", "+ More"];

function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="filters" role="tablist" aria-label="Course categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          className={active === category ? "active" : ""}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const courses = [
  {
    title: "Learn Figma from Basic to Advanced",
    creator: "Maya Richardson",
    category: "UI/UX Design",
    level: "Beginner",
    price: "$24.00",
    students: "2.4K",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Build Digital Assets That People Love",
    creator: "Darren Cole",
    category: "Graphic Design",
    level: "Intermediate",
    price: "$32.00",
    students: "1.8K",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "The Power of Big Data & Analytics",
    creator: "Nina Matthews",
    category: "Data Science",
    level: "Advanced",
    price: "$48.00",
    students: "3.1K",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Balancing Productivity & Creativity",
    creator: "Avery Wilson",
    category: "Productivity",
    level: "Beginner",
    price: "$19.00",
    students: "4.2K",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Mastering Money Management",
    creator: "Sofia Grant",
    category: "Business",
    level: "Intermediate",
    price: "$29.00",
    students: "2.7K",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "From Idea to Startup Success",
    creator: "Marcus Chen",
    category: "Entrepreneurship",
    level: "All Levels",
    price: "$36.00",
    students: "3.6K",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85",
  },
];

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="course-card reveal">
      <div className="course-image">
        <img src={course.image} alt={`${course.title} course preview`} loading="lazy" />
        <div className="image-badges"><span>{course.category}</span><span><Icon name="clock" size={13} /> 8h 30m</span></div>
        <button
          className={`heart-button ${saved ? "saved" : ""}`}
          type="button"
          aria-label={saved ? `Remove ${course.title} from saved courses` : `Save ${course.title}`}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
        >
          <Icon name="heart" size={18} />
        </button>
      </div>
      <div className="course-body">
        <div className="course-rating"><span><Icon name="star" size={15} /> {course.rating}</span><span>{course.level}</span></div>
        <h3>{course.title}</h3>
        <p>by <strong>{course.creator}</strong></p>
        <div className="course-footer">
          <div className="students"><AvatarStack /><span>{course.students} students</span></div>
          <strong className="price">{course.price}</strong>
        </div>
      </div>
    </article>
  );
}

function CourseGrid({ items }: { items: typeof courses }) {
  if (items.length === 0) {
    return (
      <div className="empty-course-state">
        <strong>No courses found in this category yet.</strong>
        <span>Try another category to explore the available courses.</span>
      </div>
    );
  }

  return <div className="course-grid">{items.map((course) => <CourseCard key={course.title} course={course} />)}</div>;
}

function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text: string; centered?: boolean }) {
  return (
    <div className={`section-heading reveal ${centered ? "centered" : ""}`}>
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const visibleCourses =
    activeCategory === "Featured" || activeCategory === "+ More"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <SectionHeading
          eyebrow="Courses for every curiosity"
          title="Discover Your Passion, Build Your Skills"
          text="Explore practical courses across design, technology, business, and creative skills."
          centered
        />
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <CourseGrid items={visibleCourses} />
        <div className="center-action">
          <Button variant="outline" href="#courses">Explore All Courses</Button>
        </div>
      </div>
    </section>
  );
}

const learningCategories: { title: string; icon: IconName; detail: string }[] = [
  { title: "Design", icon: "design", detail: "1,240+ Courses" },
  { title: "Development", icon: "code", detail: "860+ Courses" },
  { title: "IT & Software", icon: "software", detail: "740+ Courses" },
  { title: "Business", icon: "briefcase", detail: "980+ Courses" },
  { title: "Marketing", icon: "marketing", detail: "520+ Courses" },
  { title: "Photography", icon: "camera", detail: "340+ Courses" },
];

function LearningCategories() {
  return (
    <section id="categories" className="section category-section">
      <div className="container">
        <SectionHeading
          eyebrow="Find your direction"
          title="Explore Diverse Learning Paths at Bytespace"
          text="From creative arts to future-ready technology, discover learning paths designed to turn your curiosity into real-world capability."
          centered
        />
        <div className="category-grid">
          {learningCategories.map((category) => (
            <a className="category-card reveal" href="#courses" key={category.title}>
              <div className="category-icon"><Icon name={category.icon} size={28} /></div>
              <div><h3>{category.title}</h3><span>{category.detail}</span></div>
              <Icon name="arrow" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountStat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const run = (now: number) => {
        const progress = Math.min((now - started) / 1000, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <div className="stat" ref={ref}><strong>{count}{suffix}</strong><span>{label}</span></div>;
}

function GrowthSection() {
  return (
    <section id="about" className="section growth-section">
      <div className="container split-layout">
        <div className="growth-copy reveal">
          <div className="eyebrow"><span /> Learning that moves you forward</div>
          <h2>Your Path to Professional Growth Starts Here!</h2>
          <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <div className="stats">
            <CountStat value={12} suffix="K" label="Students" />
            <CountStat value={70} suffix="+" label="Courses" />
            <CountStat value={16} label="Creators" />
          </div>
          <Button>Start Learning</Button>
        </div>
        <div className="growth-visual reveal">
          <div className="visual-blob lime-blob" />
          <div className="portrait-card">
            <img src="https://images.unsplash.com/photo-1672818989862-9e183f21a2a9?auto=format&fit=crop&w=900&q=90" alt="Creative professional learning on a laptop" loading="lazy" />
          </div>
          <FloatingStatCard type="course" />
          <FloatingStatCard type="progress" />
          <div className="scribble dark-scribble">∿∿∿</div>
        </div>
      </div>
    </section>
  );
}

function CreatorManagement() {
  const checklist = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];
  return (
    <section id="creators" className="section creator-section">
      <div className="container split-layout creator-layout">
        <div className="creator-visual reveal">
          <div className="creator-photo">
            <img src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?auto=format&fit=crop&w=850&q=90" alt="Female course creator holding a tablet" loading="lazy" />
          </div>
          <div className="analytics-card revenue-card"><span>Total Revenue</span><strong>$120.29</strong><small>+12.5% this month</small></div>
          <div className="analytics-card ytd-card"><span>Year to Date</span><strong>$1,200.38</strong><div className="chart-bars"><i /><i /><i /><i /><i /><i /></div></div>
          <FloatingStatCard type="students" />
        </div>
        <div className="creator-copy reveal">
          <div className="eyebrow"><span /> Teach. Inspire. Earn.</div>
          <h2>Create &amp; Manage Courses Easily.</h2>
          <p>ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul>
            {checklist.map((item) => <li key={item}><span><Icon name="check" size={16} /></span>{item}</li>)}
          </ul>
          <Button variant="blue" href="#join">Become a Creator</Button>
        </div>
      </div>
    </section>
  );
}

function CreatorCTA() {
  return (
    <section id="join" className="creator-cta">
      <div className="hero-grid" />
      <div className="cta-circle" />
      <div className="cta-triangle" />
      <div className="scribble cta-scribble">∿∿∿</div>
      <div className="container cta-content reveal">
        <div className="eyebrow light"><span /> Make an impact</div>
        <h2>Unlock Your Potential as a Creator with ByteSpace</h2>
        <p>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community of local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
        <Button href="/signup">Join as Creator</Button>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", quote: "ByteSpace made learning feel exciting again. The courses are beautifully structured, easy to follow, and I could apply what I learned to my work immediately.", image: avatarUrls[0] },
  { name: "James L.", role: "Lifelong Learner", quote: "I have tried a lot of learning platforms, but the quality of instructors and practical projects here really stand apart. There is always something new to explore.", image: avatarUrls[1] },
  { name: "Alex B.", role: "Inspired Creator", quote: "Publishing my first course was remarkably simple. ByteSpace gave me the tools and community to turn years of experience into something truly useful.", image: avatarUrls[2] },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <article className="testimonial-card reveal">
      <div className="quote-mark">“</div>
      <div className="stars">{[1, 2, 3, 4, 5].map((item) => <Icon name="star" size={15} key={item} />)}</div>
      <blockquote>{testimonial.quote}</blockquote>
      <div className="testimonial-author">
        <img src={testimonial.image} alt="" loading="lazy" />
        <div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
      </div>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="testimonials-heading">
          <SectionHeading eyebrow="Stories from our community" title="Discover What Our Community Is Saying" text="" />
          <p className="reveal">Real experiences from learners and creators building brighter futures with ByteSpace.</p>
        </div>
        <div className="testimonial-grid">{testimonials.map((item) => <TestimonialCard testimonial={item} key={item.name} />)}</div>
      </div>
    </section>
  );
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Logo />
          <h2>Keep learning. Keep growing.</h2>
          <p>Join our newsletter for new courses, creator stories, and fresh ideas delivered to your inbox.</p>
          <form className="newsletter" onSubmit={handleNewsletterSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe <Icon name="arrow" size={16} /></button>
          </form>
          {subscribed && <small className="newsletter-success" role="status">Thanks — your email has been added to the demo signup flow.</small>}
          {!subscribed && <small>By subscribing, you agree to our Privacy Policy and consent to receive updates.</small>}
        </div>
        <div className="footer-links">
          <div><h3>Featured Courses</h3>{["Business", "IT", "Development", "Marketing", "Photography", "Finance", "Sport"].map((link) => <a href="#courses" key={link}>{link}</a>)}</div>
          <div><h3>Featured Categories</h3>{["Design", "Productivity", "Data Science", "Creative Arts", "Lifestyle", "Music"].map((link) => <a href="#categories" key={link}>{link}</a>)}</div>
          <div><h3>ByteSpace</h3>{["Become a Creator", "Affiliate Program", "Contact", "Help", "About"].map((link) => <a href={link === "Become a Creator" ? "#creators" : "#about"} key={link}>{link}</a>)}</div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 ByteSpace. All rights reserved.</span><div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a><a href="#cookies">Cookies</a></div></div>
    </footer>
  );
}

type AuthVariant = "signin" | "signup" | "forgot";

function FloatingAuthCard({ variant }: { variant: "course" | "progress" | "community" }) {
  if (variant === "course") {
    return (
      <div className="auth-float-card auth-course-card">
        <div className="auth-course-icon"><Icon name="design" size={21} /></div>
        <div><small>COURSE IN PROGRESS</small><strong>Product Design</strong><span>Lesson 8 of 12</span></div>
        <div className="auth-play"><Icon name="play" size={14} /></div>
      </div>
    );
  }

  if (variant === "progress") {
    return (
      <div className="auth-float-card auth-progress-card">
        <div className="auth-progress-top"><span>Weekly Progress</span><strong>82%</strong></div>
        <div className="auth-progress-track"><i /></div>
        <small>You're doing great. Keep going!</small>
      </div>
    );
  }

  return (
    <div className="auth-float-card auth-community-card">
      <AvatarStack count={4} />
      <div><strong>10,000+</strong><span>active learners</span></div>
      <div className="auth-online-dot" />
    </div>
  );
}

function AuthBrandPanel({ variant }: { variant: AuthVariant }) {
  const isSignIn = variant === "signin";
  const isForgot = variant === "forgot";
  return (
    <aside className="auth-brand-panel">
      <div className="auth-grid-pattern" />
      <div className="auth-glow auth-glow-one" />
      <div className="auth-glow auth-glow-two" />
      <div className="auth-brand-top"><Logo light /></div>
      <div className="auth-brand-content">
        <div className="eyebrow light"><span /> Your space to grow</div>
        <h1>{isForgot ? "We'll Get You Back on Track" : isSignIn ? "Welcome Back to ByteSpace" : "Start Your Learning Journey"}</h1>
        <p>
          {isForgot
            ? "Reset your access and continue discovering the skills that move your future forward."
            : isSignIn
              ? "Continue your learning journey and pick up where you left off."
              : "Join ByteSpace and discover courses, creators, and skills that help you grow."}
        </p>
      </div>
      <div className="auth-visual-stage" aria-hidden="true">
        <div className="auth-orbit" />
        <FloatingAuthCard variant="course" />
        <FloatingAuthCard variant="progress" />
        <FloatingAuthCard variant="community" />
      </div>
      <div className="auth-scribble">∿∿∿</div>
      <div className="auth-white-triangle" />
      <div className="auth-dot-field">••••<br />••••<br />••••</div>
    </aside>
  );
}

function InputField({
  id,
  label,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="auth-field">
      <input id={id} name={id} type={type} placeholder=" " autoComplete={autoComplete} required />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function PasswordField({ id, label, autoComplete }: { id: string; label: string; autoComplete?: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="auth-field auth-password-field">
      <input id={id} name={id} type={visible ? "text" : "password"} placeholder=" " autoComplete={autoComplete} minLength={8} required />
      <label htmlFor={id}>{label}</label>
      <button type="button" onClick={() => setVisible(!visible)} aria-label={visible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}>
        <Icon name={visible ? "eyeOff" : "eye"} size={18} />
      </button>
    </div>
  );
}

function SocialIcon({ provider }: { provider: "Google" | "Facebook" }) {
  if (provider === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#1877F2" d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-1.9.9-1.9 1.9v2.3h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h6a5.2 5.2 0 0 1-2.2 3.3v2.8h3.6c2.1-2 3.2-4.8 3.2-8.2Z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.4-2.6l-3.6-2.8c-1 .7-2.3 1-3.8 1a6.5 6.5 0 0 1-6.1-4.5H2.2V17A11.2 11.2 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.9 14.1a6.8 6.8 0 0 1 0-4.2V7H2.2a11.2 11.2 0 0 0 0 10l3.7-2.9Z" />
      <path fill="#EA4335" d="M12 5.4c1.7 0 3.2.6 4.4 1.7l3.1-3A10.5 10.5 0 0 0 12 1 11.2 11.2 0 0 0 2.2 7l3.7 2.9A6.5 6.5 0 0 1 12 5.4Z" />
    </svg>
  );
}

function SocialButton({ provider }: { provider: "Google" | "Facebook" }) {
  return (
    <button className="social-button" type="button">
      <SocialIcon provider={provider} />
      <span>Continue with {provider}</span>
    </button>
  );
}

function AuthButton({ children }: { children: React.ReactNode }) {
  return <button className="auth-submit" type="submit">{children}<Icon name="arrow" size={18} /></button>;
}

function Divider() {
  return <div className="auth-divider"><span>OR</span></div>;
}

function AuthFooter({ variant }: { variant: AuthVariant }) {
  if (variant === "forgot") {
    return (
      <p className="auth-footer auth-footer-back">
        <a href="/signin"><Icon name="arrowLeft" size={16} />Back to Sign In</a>
      </p>
    );
  }
  return (
    <p className="auth-footer">
      {variant === "signin" ? "Don't have an account?" : "Already have an account?"}
      <a href={variant === "signin" ? "/signup" : "/signin"}>{variant === "signin" ? "Create Account" : "Sign In"}</a>
    </p>
  );
}

function AuthForm({ variant }: { variant: AuthVariant }) {
  const isSignIn = variant === "signin";
  const isForgot = variant === "forgot";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!isSignIn && !isForgot) {
      const password = form.elements.namedItem("password") as HTMLInputElement | null;
      const confirmPassword = form.elements.namedItem("confirm-password") as HTMLInputElement | null;

      if (password?.value !== confirmPassword?.value) {
        confirmPassword?.setCustomValidity("Passwords do not match.");
        confirmPassword?.reportValidity();
        confirmPassword?.setCustomValidity("");
        return;
      }
    }

    setSubmitted(true);
  }

  return (
    <motion.div
      className={`auth-card auth-card-${variant}`}
      initial={{ y: 22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 0.85, 0.32, 1] }}
    >
      <div className="auth-mobile-logo"><Logo /></div>
      <div className="auth-form-heading">
        <h2>{isForgot ? "Forgot your password?" : isSignIn ? "Welcome back" : "Create your account"}</h2>
        <p>
          {isForgot
            ? "Enter your email and we'll send you a link to reset your password."
            : isSignIn
              ? "Sign in to continue to your ByteSpace account."
              : "Start learning with ByteSpace today."}
        </p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        {!isSignIn && !isForgot && <InputField id="full-name" label="Full Name" autoComplete="name" />}
        <InputField id="email" label="Email Address" type="email" autoComplete="email" />
        {!isForgot && <PasswordField id="password" label="Password" autoComplete={isSignIn ? "current-password" : "new-password"} />}
        {!isSignIn && !isForgot && <PasswordField id="confirm-password" label="Confirm Password" autoComplete="new-password" />}

        {isSignIn && (
          <div className="auth-options">
            <label className="auth-checkbox"><input type="checkbox" name="remember" /><span><Icon name="check" size={13} /></span>Remember me</label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        )}

        {!isSignIn && !isForgot && (
          <label className="auth-checkbox auth-terms">
            <input type="checkbox" name="terms" required />
            <span><Icon name="check" size={13} /></span>
            <em>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a></em>
          </label>
        )}

        <AuthButton>{isForgot ? "Send Reset Link" : isSignIn ? "Sign In" : "Create Account"}</AuthButton>
        {submitted && (
          <motion.p
            className="auth-success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {isForgot
              ? "Email validated. Connect your reset service to send the link."
              : isSignIn
                ? "Sign-in form validated. Connect your authentication service to continue."
                : "Account form validated. Connect your authentication service to create the account."}
          </motion.p>
        )}
      </form>

      {!isForgot && (
        <>
          <Divider />
          <div className="social-buttons">
            <SocialButton provider="Google" />
            <SocialButton provider="Facebook" />
          </div>
        </>
      )}
      <AuthFooter variant={variant} />
    </motion.div>
  );
}

function AuthLayout({ variant }: { variant: AuthVariant }) {
  return (
    <motion.main
      className={`auth-layout auth-layout-${variant}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.div
        initial={{ x: -28, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 0.85, 0.32, 1] }}
      >
        <AuthBrandPanel variant={variant} />
      </motion.div>
      <motion.section
        className="auth-form-panel"
        aria-label={variant === "signin" ? "Sign in" : variant === "signup" ? "Create account" : "Reset password"}
        initial={{ x: 24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 0.85, 0.32, 1] }}
      >
        <AuthForm variant={variant} />
      </motion.section>
    </motion.main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const authVariant: AuthVariant | null =
    path === "/signin" || path === "/login"
      ? "signin"
      : path === "/signup" || path === "/create-account"
        ? "signup"
        : path === "/forgot-password"
          ? "forgot"
          : null;

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  if (authVariant) return <AuthLayout variant={authVariant} />;

  return (
    <>
      <Hero />
      <TrustLogos />
      <main>
        <FeaturedCourses />
        <LearningCategories />
        <GrowthSection />
        <CreatorManagement />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
