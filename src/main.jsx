import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, AtSign, Mail } from "lucide-react";
import "./styles.css";

const products = [
  {
    slug: "beevr",
    title: "beevr",
    tag: "company brain",
    meta: "beevr.dev",
    url: "https://beevr.dev/",
    image: "/source-media/beevr.png",
    copy: "A company brain for teams that have important knowledge scattered across docs, chats, CRM records, code, support tools, and revenue systems.",
    details: [
      "What it is: Beevr is a searchable, source-backed company memory. Instead of digging through Slack, Drive, GitHub, CRM notes, support tickets, and revenue dashboards, a team can ask one question and get a grounded answer.",
      "What it does: it connects work tools, indexes the useful context, keeps answers tied to sources, and helps people understand customers, deals, product work, internal decisions, and company changes.",
      "Who it is for: fast-moving teams that lose time searching for context, repeating questions, or trying to reconstruct what happened across scattered tools.",
      "Where it can go: the agent layer can turn company knowledge into recurring work, like weekly revenue summaries, stalled-deal alerts, churn-risk monitoring, account briefs, and support routing.",
    ],
  },
  {
    slug: "here-for-you",
    title: "Here For You",
    tag: "community support platform",
    meta: "hereforyou.support",
    url: "https://hereforyou.support/",
    image: "/project-media/hereforyou-screen-1.png",
    copy: "A community support platform for creating care pages, coordinating help, collecting resources, and making it easier for people to show up during hard seasons.",
    details: [
      "What it is: Here For You is a support hub for someone going through crisis, grief, illness, transition, or another difficult life season.",
      "What it does: it helps communities create a page, share updates, coordinate meals and rides, organize fundraising and gifts, collect resources, and make help visible.",
      "Who it is for: families, friend groups, local communities, faith groups, schools, workplaces, and organizers who want to support someone without creating confusion.",
      "Why it matters: people often say \"let me know if you need anything\" because they do not know what to do. Here For You turns that vague intention into clear tasks, resources, and support.",
    ],
  },
  {
    slug: "forgeit",
    title: "forgeit",
    tag: "lovable for internal tools",
    meta: "forgeit.live",
    url: "https://forgeit.live",
    image: "/source-media/forgeit.png",
    copy: "A builder for internal tools, dashboards, workflows, and automations that teams normally do not have time to custom-build.",
    details: [
      "What it is: Forgeit is a product for creating internal tools from a plain-English workflow instead of starting with a blank dashboard or a pile of tickets.",
      "What it does: a user describes the operational flow they need, such as approvals, reporting, customer ops, admin actions, or data review, and Forgeit turns that into a usable tool surface.",
      "Who it is for: operators, founders, and teams that need practical software for internal work but do not want to wait weeks for a full custom build.",
      "Why it matters: most internal tools are simple in concept but painful in execution. Forgeit aims to compress the path from workflow idea to running dashboard.",
    ],
  },
  {
    slug: "brok-search",
    title: "brok search",
    tag: "answer engine",
    meta: "search/api",
    image: "/source-media/brok.png",
    copy: "An answer engine that searches, reads, summarizes, and cites sources so people can get the answer and the proof in one place.",
    details: [
      "What it is: Brok Search is a research-style search product. It is meant for people who want an answer they can inspect, not just a page of blue links.",
      "What it does: it searches the web, chooses useful sources, reads across them, writes a direct answer, and keeps citations visible so the user can verify the claim.",
      "Who it is for: users doing research, comparison, market discovery, technical lookup, or any question where source quality matters.",
      "Why it matters: search is often too fragmented. Brok Search tries to turn that messy process into a cleaner answer flow with evidence attached.",
    ],
  },
  {
    slug: "capy",
    title: "capy",
    tag: "ai sales development",
    meta: "capy.ad",
    url: "https://capy.ad",
    image: "/source-media/capy.png",
    copy: "An AI sales development platform that turns a company website into prospect research, personalized outreach, follow-ups, reply handling, and booked meetings.",
    details: [
      "What it is: Capy is an autonomous outbound sales product. The setup starts with a website, then the system learns what the company sells, who it sells to, and what kind of buyer makes sense.",
      "What it does: it helps infer an ICP, find prospects, enrich leads, write personalized emails, send campaigns, follow up, understand replies, and move interested people toward meetings.",
      "Who it is for: early teams, agencies, and sales orgs that need pipeline but do not have time to manually research every account and write every email.",
      "Why it matters: outbound works best when research and personalization are good. Capy tries to make that level of effort possible at scale without turning the process into generic spam.",
    ],
  },
  {
    slug: "brok-builder",
    title: "brok builder",
    tag: "lovable-like app builder",
    meta: "brok app builder",
    copy: "A prompt-to-app builder for generating product surfaces, previewing them, iterating on them, and moving toward a deployable project.",
    details: [
      "What it is: Brok Builder is a Lovable-style app builder in the Brok family, focused on turning a natural-language product idea into a usable app structure.",
      "What it does: a user describes what they want, gets an initial generated project, previews the result, asks for changes, and keeps iterating toward a real deploy.",
      "Who it is for: builders who want to move from idea to interactive prototype without manually wiring every screen and state from scratch.",
      "Why it matters: prompt-to-app tools are most useful when they preserve iteration. Brok Builder is centered around that loop: generate, inspect, change, preview, repeat.",
    ],
  },
  {
    slug: "brok-api-platform",
    title: "brok api platform",
    tag: "developer api platform",
    meta: "search/api",
    copy: "A developer platform for adding search-backed answers, citations, API keys, docs, endpoints, and usage logs to other products.",
    details: [
      "What it is: Brok API Platform is the developer-facing side of the Brok search system.",
      "What it does: it gives other applications a way to call search-backed answer endpoints, manage API keys, inspect usage, and read implementation docs.",
      "Who it is for: developers who want to add answer-engine features to their own tools without rebuilding search, source selection, summarization, and citation handling.",
      "Why it matters: the product turns Brok from a single interface into infrastructure that can power other apps.",
    ],
  },
  {
    slug: "brok-tui",
    title: "brok tui",
    tag: "coding harness",
    meta: "devtools",
    copy: "A terminal coding harness for running agentic development tasks with more visibility, control, and review built into the workflow.",
    details: [
      "What it is: Brok TUI is a focused terminal interface for coding-agent workflows.",
      "What it does: it helps run tasks, inspect file changes, follow what the agent is doing, and keep the development loop controlled from the terminal.",
      "Who it is for: developers who like terminal-first workflows but still want clearer oversight when AI agents are editing code.",
      "Why it matters: agentic coding gets risky when the process is invisible. A good harness makes the work easier to inspect, pause, redirect, and trust.",
    ],
  },
  {
    slug: "brok-presentations",
    title: "brok presentations",
    tag: "cursor for slides",
    meta: "productivity",
    copy: "A Cursor-for-slides product for creating, editing, restructuring, and polishing presentations while keeping the final deck editable.",
    details: [
      "What it is: Brok Presentations is an AI slide editor, not just a slide-image generator.",
      "What it does: it helps create a deck, rewrite sections, improve structure, polish visual hierarchy, and make changes while keeping the presentation format editable.",
      "Who it is for: people who make pitch decks, reports, class presentations, sales decks, or internal explainers and want AI help without losing control of the deck.",
      "Why it matters: a useful slide tool should help with content and structure while still producing something the user can keep editing afterward.",
    ],
  },
  {
    slug: "clawforge",
    title: "clawforge",
    tag: "prompt-to-workflow builder",
    meta: "devtools",
    image: "/source-media/clawforge.png",
    copy: "A prompt-to-workflow builder that turns a text request into a runnable, inspectable workflow surface with state, approvals, and auditability.",
    details: [
      "What it is: ClawForge is a workflow builder for turning plain-English intent into a structured automation or app-like workflow.",
      "What it does: it explores generating workflow blueprints, runtime views, approval steps, audit trails, and final reports instead of only generating static UI.",
      "Who it is for: teams that want to build internal workflows, agent systems, or operational tools from a high-level request.",
      "Why it matters: prompt-to-workflow is different from prompt-to-page. The hard part is not just drawing a screen, but making the workflow understandable, reviewable, and safe to run.",
    ],
  },
  {
    slug: "pielot",
    title: "pielot",
    tag: "ai sms revenue agent",
    meta: "pielot.app",
    image: "/source-media/pielot.png",
    copy: "A chat-first AI revenue agent for restaurants that helps find campaign ideas, write SMS messages, and schedule approved outreach.",
    details: [
      "What it is: Pielot is an AI assistant for local restaurant revenue workflows.",
      "What it does: it helps owners identify promotion opportunities, draft compliant SMS campaigns, review the message, and send or schedule it after approval.",
      "Who it is for: restaurants that want to bring customers back with timely offers but do not have a marketing team constantly planning campaigns.",
      "Why it matters: local businesses often know they should do outreach but do not have the time, copy, or workflow to do it consistently.",
    ],
  },
  {
    slug: "classmate",
    title: "classmate",
    tag: "student collaboration",
    meta: "classmate-web.vercel.app",
    image: "/source-media/classmate.png",
    copy: "A student collaboration platform for forming course groups, connecting Canvas context, and making class discussion feel faster.",
    details: [
      "What it is: Classmate is a course support product for students who need help, study groups, and class-specific discussion.",
      "What it does: it connects course context with peer collaboration so students can find classmates, form groups, and get unstuck faster.",
      "Who it is for: students in classes where group formation, Q&A, and course discussion are fragmented across chats, forums, and Canvas.",
      "Why it matters: the best class support often comes from peers, but most schools do not make that network easy to activate.",
    ],
  },
  {
    slug: "lingoose",
    title: "lingoose",
    tag: "voice-first language practice",
    meta: "lingoose.lol",
    image: "/source-media/lingoose.png",
    copy: "A voice-first language practice app that calls users for short daily speaking sessions in the language they are learning.",
    details: [
      "What it is: Lingoose is a language-learning product focused on speaking practice, not passive flashcards.",
      "What it does: it calls the user for short themed conversations, gives feedback, and adapts the practice session to the user's progress.",
      "Who it is for: learners who understand some vocabulary but need regular, low-friction speaking reps to build confidence.",
      "Why it matters: language learning usually fails at consistency and speaking practice. A daily call format lowers the friction and makes practice harder to ignore.",
    ],
  },
  {
    slug: "hackarena",
    title: "hackarena",
    tag: "hackathon prediction markets",
    meta: "hackathon",
    copy: "A hackathon prediction-market concept where teams become tradable markets for spectators, judges, VCs, and participants.",
    details: [
      "What it is: Hackarena turns a hackathon into a live spectator market where each team can become a prediction target.",
      "What it does: viewers can discover teams, track momentum, make predictions, and follow which projects the crowd believes in.",
      "Who it is for: hackathon attendees, spectators, sponsors, and investors who want a more engaging way to follow the event.",
      "Why it matters: hackathons create a lot of energy, but most of it is invisible until demos. Hackarena makes the event feel live before judging starts.",
    ],
  },
  {
    slug: "openvision",
    title: "openvision",
    tag: "classroom analytics",
    meta: "education tools",
    image: "/source-media/openvision.png",
    copy: "A classroom analytics platform for turning live classroom signals into clearer feedback loops for teachers and students.",
    details: [
      "What it is: OpenVision is an education analytics product for understanding what is happening in a classroom in real time.",
      "What it does: it turns classroom signals into patterns, feedback, and insights that can help instructors adjust how they teach.",
      "Who it is for: educators and learning teams that want more visibility into engagement, confusion, and classroom dynamics.",
      "Why it matters: classrooms generate useful signals constantly, but teachers usually have to infer them manually. OpenVision tries to make those signals easier to act on.",
    ],
  },
  {
    slug: "brok-mail",
    title: "brok mail",
    tag: "email and calendar assistant",
    meta: "productivity",
    copy: "An email and calendar assistant for reading inbox context, drafting replies, checking availability, and creating meetings through chat.",
    details: [
      "What it is: Brok Mail is a productivity assistant for Gmail and calendar workflows.",
      "What it does: it can understand inbox context, help draft replies, check schedule availability, and create meetings from conversational instructions.",
      "Who it is for: people who spend too much time converting email threads into calendar actions, follow-ups, and replies.",
      "Why it matters: email work is rarely just email. It turns into scheduling, context gathering, reply writing, and remembering what needs follow-up.",
    ],
  },
  {
    slug: "round-robin",
    title: "round robin",
    tag: "interview workflow platform",
    meta: "productivity",
    copy: "A structured interview and review workflow platform with outreach, voice calls, summaries, analytics, and follow-up automation.",
    details: [
      "What it is: Round Robin is a workflow product for teams running structured interviews, review sessions, or high-touch feedback processes.",
      "What it does: it helps manage participants, run voice-call sessions, collect structured responses, summarize outcomes, analyze patterns, and trigger follow-ups.",
      "Who it is for: teams that need repeated, organized conversations with clients, employees, candidates, customers, or stakeholders.",
      "Why it matters: these processes usually live across spreadsheets, calendar invites, call notes, and manual summaries. Round Robin turns them into one workflow.",
    ],
  },
  {
    slug: "unbiased-news",
    title: "news, but unbiased",
    tag: "neutral news brief",
    meta: "search/api",
    copy: "A news-reading concept for comparing coverage, reducing spin, and turning messy headlines into calmer, balanced briefs.",
    details: [
      "What it is: News, but Unbiased is a media product experiment for people who want to understand the news without getting pulled into one outlet's framing.",
      "What it does: it compares coverage across sources, identifies differences in framing, and summarizes the story in a calmer brief.",
      "Who it is for: readers who want to understand what happened, how different sides are covering it, and what claims need more context.",
      "Why it matters: news consumption is often emotional and fragmented. This concept tries to make it easier to see the event, the framing, and the uncertainty separately.",
    ],
  },
  {
    slug: "burb",
    title: "burb",
    tag: "ai course generator",
    meta: "education tools",
    copy: "An AI course generator that turns topics, PDFs, notes, and outlines into structured modules, articles, quizzes, and learning paths.",
    details: [
      "What it is: Burb is an AI learning workspace for turning raw material into a more structured course experience.",
      "What it does: it can take a topic or source material and generate modules, readings, quizzes, and a suggested path through the content.",
      "Who it is for: learners, teachers, creators, or teams that want to turn scattered knowledge into something easier to study.",
      "Why it matters: learning often starts messy. Burb tries to turn that mess into a path with structure, checkpoints, and momentum.",
    ],
  },
  {
    slug: "daily-adventure-calls",
    title: "daily adventure calls",
    tag: "personalized phone stories",
    meta: "consumer",
    copy: "A consumer storytelling app that generates personalized daily adventures, images, captions, SMS links, and phone-call experiences.",
    details: [
      "What it is: Daily Adventure Calls is a playful consumer product built around personalized story experiences.",
      "What it does: it generates a daily adventure, adds supporting images and captions, sends links through SMS, and can turn the story into a phone-call style experience.",
      "Who it is for: people who like personalized entertainment, daily rituals, or interactive story formats.",
      "Why it matters: generative media gets more interesting when it becomes a habit or a recurring experience instead of a one-off prompt.",
    ],
  },
  {
    slug: "fez-lab-finder",
    title: "fez lab finder",
    tag: "research mentorship waitlist",
    meta: "education tools",
    copy: "A research mentorship concept for helping students find labs, understand opportunities, and get guidance toward real research roles.",
    details: [
      "What it is: Fez Lab Finder is a product concept for making research opportunities easier for students to access.",
      "What it does: it frames the process around lab discovery, mentorship, preparation, and a clearer path toward contacting or joining research groups.",
      "Who it is for: students who want research experience but do not know which labs fit, how to approach professors, or how to prepare.",
      "Why it matters: research access is often opaque. A guided product can make the path less intimidating and more actionable.",
    ],
  },
  {
    slug: "piefi",
    title: "piefi",
    tag: "build-in-public community",
    meta: "piefi.build",
    copy: "A build-in-public community concept exploring builder spaces, product-a-week momentum, public updates, and early-stage accountability.",
    details: [
      "What it is: Piefi is a community and builder-space experiment centered on shipping projects in public.",
      "What it does: it explored how builders could share progress, keep momentum, gather feedback, and build around a product-a-week rhythm.",
      "Who it is for: early builders who want community, accountability, and a place to show what they are making.",
      "Why it matters: community products are hard because cold starts are hard. Piefi is useful as both a product experiment and a lesson in builder-community dynamics.",
    ],
  },
];

const caseStudies = {
  beevr: {
    stack: ["React", "TypeScript", "Supabase", "Postgres", "embeddings", "tool connectors", "RAG"],
    wanted: "A company brain that could answer questions across scattered work tools without making the team manually dig through docs, chat, CRM notes, support history, and code.",
    provided: "Existing company knowledge, sample questions, source-trust requirements, connector targets, and examples of recurring team workflows.",
    result: "A source-backed memory product with connected knowledge, cited answers, and an agent layer for briefs, alerts, routing, and ongoing company intelligence.",
  },
  "here-for-you": {
    stack: ["React", "Cloudflare Pages", "support pages", "task coordination", "fundraising", "gift registries", "resource sharing"],
    wanted: "A support hub where a community could help someone through crisis, grief, illness, or a hard season without everything scattering across texts and group chats.",
    provided: "The live platform direction, public Here For You site, support-page workflows, meal and ride needs, fundraising and gift flows, updates, resources, and community-support positioning.",
    result: "A coordinated care platform where people can create support pages, organize concrete help, share updates, collect resources, and make it easier for friends and family to actually show up.",
  },
  forgeit: {
    stack: ["React", "TypeScript", "workflow builder", "auth", "database", "API integrations", "automations"],
    wanted: "A faster way to build internal tools, dashboards, approvals, and ops workflows without turning every request into a long custom software cycle.",
    provided: "Workflow descriptions, target data sources, admin actions, reporting needs, approval steps, and examples of the manual process being replaced.",
    result: "A builder concept that turns plain-English operations into usable tool surfaces with dashboards, backend logic, and automation paths.",
  },
  "brok-search": {
    stack: ["React", "TypeScript", "search APIs", "LLM synthesis", "citations", "streaming UI", "Bun"],
    wanted: "A search experience that gives people a direct answer plus the proof, instead of forcing them to open ten tabs and assemble the answer themselves.",
    provided: "Research questions, source-quality expectations, answer format requirements, citation rules, and comparison workflows.",
    result: "An answer engine that searches, reads, synthesizes, and keeps citations visible so the user can inspect where claims came from.",
  },
  capy: {
    stack: ["React", "TypeScript", "Supabase", "Firecrawl", "Hunter", "Apollo", "Gmail", "Google Calendar"],
    wanted: "Outbound sales that starts from a company website and turns into real pipeline without a human manually researching every account.",
    provided: "The company URL, offer positioning, target-customer assumptions, sender setup, outreach constraints, and meeting-booking preferences.",
    result: "An AI SDR flow for ICP inference, prospect discovery, enrichment, personalized emails, follow-ups, reply handling, and booked meetings.",
  },
  "brok-builder": {
    stack: ["React", "TypeScript", "code generation", "preview runtime", "project scaffolding", "deploy flow"],
    wanted: "A way to turn a product idea into a real interactive preview quickly, then keep iterating until it feels like an app instead of a mockup.",
    provided: "Natural-language app prompts, desired screens, behavior notes, visual direction, and feedback after each generated pass.",
    result: "A prompt-to-app loop for generate, preview, revise, and move toward a deployable project.",
  },
  "brok-api-platform": {
    stack: ["TypeScript", "API routes", "key management", "usage logs", "docs", "search services", "citation services"],
    wanted: "Search-backed answers available as infrastructure that other products could call, meter, document, and debug.",
    provided: "Endpoint needs, API-key rules, usage tracking expectations, developer docs structure, and answer-quality constraints.",
    result: "A developer platform with keys, docs, logs, and answer endpoints that can power other applications.",
  },
  "brok-tui": {
    stack: ["terminal UI", "TypeScript", "agent orchestration", "git inspection", "file review", "task runner"],
    wanted: "More visibility and control over coding-agent work from the terminal, especially while files are changing.",
    provided: "Agent task flows, review needs, developer workflow constraints, and expectations for pausing, inspecting, and redirecting work.",
    result: "A terminal harness that makes agentic development easier to run, watch, inspect, and trust.",
  },
  "brok-presentations": {
    stack: ["React", "TypeScript", "deck model", "AI editing", "slide structure", "editable export"],
    wanted: "AI help for presentations that improves structure and polish without flattening the deck into uneditable images.",
    provided: "Deck goals, rough content, slide outlines, visual direction, and revision notes.",
    result: "A slide editor concept for creating, restructuring, and polishing decks while keeping the final presentation editable.",
  },
  clawforge: {
    stack: ["React", "TypeScript", "Cloudflare Worker", "workflow runtime", "approval gates", "audit logs"],
    wanted: "Prompt-to-workflow instead of prompt-to-page: a system that can produce runnable, reviewable process surfaces.",
    provided: "Workflow intent, action boundaries, approval needs, reporting requirements, and safety constraints.",
    result: "A workflow builder surface with blueprint review, runtime state, approvals, auditability, and final reports.",
  },
  pielot: {
    stack: ["React", "TypeScript", "OpenAI", "SMS workflow", "campaign approval", "CRM inputs"],
    wanted: "Restaurant revenue campaigns that owners could run through chat without needing a full marketing team.",
    provided: "Restaurant context, promotion goals, customer-message constraints, campaign timing, and approval preferences.",
    result: "A chat-first revenue agent for campaign ideas, compliant SMS drafts, owner approval, scheduling, and repeat outreach.",
  },
  classmate: {
    stack: ["React", "TypeScript", "Canvas-style context", "auth", "group matching", "realtime discussion"],
    wanted: "A faster way for students to find classmates, form groups, and get course help without hunting across scattered channels.",
    provided: "Course context, class structure, group needs, discussion patterns, and peer-support workflows.",
    result: "A student collaboration product for instant course groups, class discussion, and faster peer support.",
  },
  lingoose: {
    stack: ["React", "voice calls", "speech recognition", "LLM conversation", "pronunciation feedback", "scheduling"],
    wanted: "Language practice that creates real speaking reps and is harder to ignore than a normal app notification.",
    provided: "Target language, learner level, practice themes, preferred cadence, and feedback expectations.",
    result: "A voice-first language product with short daily calls, adaptive sessions, and feedback after practice.",
  },
  hackarena: {
    stack: ["React", "TypeScript", "market mechanics", "team profiles", "event data", "leaderboards"],
    wanted: "A way to make hackathons feel live before final demos by giving spectators and participants something to follow.",
    provided: "Team lists, project information, event timing, prediction rules, and spectator flow ideas.",
    result: "A prediction-market layer for following teams, tracking momentum, and making audience belief visible during an event.",
  },
  openvision: {
    stack: ["React", "realtime analytics", "signal processing", "dashboards", "reporting UI", "education workflows"],
    wanted: "Better visibility into classroom engagement, confusion, and feedback while teaching is happening.",
    provided: "Classroom signal ideas, teacher feedback goals, analytics needs, and reporting expectations.",
    result: "An education analytics concept that turns live classroom signals into clearer instructor feedback loops.",
  },
  "brok-mail": {
    stack: ["Gmail API", "Google Calendar", "React", "TypeScript", "chat UI", "scheduling logic"],
    wanted: "Email and calendar work controlled through chat, especially replies, follow-ups, and meeting scheduling.",
    provided: "Inbox patterns, scheduling rules, reply examples, calendar preferences, and follow-up expectations.",
    result: "An assistant flow for reading context, drafting replies, checking availability, and creating meetings.",
  },
  "round-robin": {
    stack: ["React", "TypeScript", "voice calls", "summaries", "analytics", "outreach automation"],
    wanted: "Structured interview and review workflows without spreadsheet chaos, manual call notes, and scattered follow-ups.",
    provided: "Participant lists, question flows, outreach needs, call requirements, and summary formats.",
    result: "A workflow for sessions, voice calls, summaries, analytics, and follow-up automation.",
  },
  "unbiased-news": {
    stack: ["React", "news APIs", "source comparison", "LLM summarization", "framing analysis", "briefing UI"],
    wanted: "A calmer way to understand news coverage across sources without being trapped inside one outlet's framing.",
    provided: "Topic queries, source sets, comparison criteria, summary expectations, and framing questions.",
    result: "A news brief concept that separates event facts, framing differences, and uncertainty.",
  },
  burb: {
    stack: ["React", "TypeScript", "document parsing", "course generation", "quizzes", "learning paths"],
    wanted: "A way to turn messy learning material into a structured course with modules, readings, quizzes, and progression.",
    provided: "Topics, PDFs, notes, outlines, learning goals, and desired course structure.",
    result: "An AI course workspace that turns raw material into organized modules, articles, quizzes, and study paths.",
  },
  "daily-adventure-calls": {
    stack: ["React", "generative text", "image generation", "SMS links", "phone-call workflow", "personalization"],
    wanted: "Personalized daily entertainment that feels recurring and interactive instead of like a one-off prompt.",
    provided: "User preferences, story themes, delivery timing, content style, and phone/SMS interaction ideas.",
    result: "A daily adventure experience with generated stories, images, captions, links, and call-style delivery.",
  },
  "fez-lab-finder": {
    stack: ["React", "waitlist flow", "matching logic", "mentorship content", "resource database", "outreach guidance"],
    wanted: "Help students find research labs, understand fit, and know how to approach opportunities.",
    provided: "Student goals, research interests, mentorship needs, lab discovery criteria, and preparation questions.",
    result: "A research mentorship concept with discovery, preparation, and guided outreach toward lab opportunities.",
  },
  piefi: {
    stack: ["React", "community feed", "profiles", "progress updates", "builder rituals", "accountability loops"],
    wanted: "A community system for builders shipping publicly and keeping momentum around frequent project launches.",
    provided: "Builder profiles, project updates, community rituals, product-a-week goals, and early feedback loops.",
    result: "A build-in-public concept that tested community, accountability, cold-start dynamics, and public shipping habits.",
  },
};

const mediaByProduct = {
  beevr: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/beevr/screen-1.png", "/project-media/beevr/screen-2.png", "/project-media/beevr/screen-3.png"],
    videos: ["/project-media/beevr/demo.mp4"],
  },
  "here-for-you": {
    source: "Captured from live site: hereforyou.support",
    screenshots: ["/project-media/hereforyou-screen-1.png", "/project-media/hereforyou-screen-2.png", "/project-media/hereforyou-screen-3.png"],
  },
  "brok-search": {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/brok/screen-1.png", "/project-media/brok/screen-2.png", "/project-media/brok/screen-3.png"],
    videos: ["/project-media/brok/demo.mp4", "/project-media/brok/walkthrough.mp4"],
    documents: ["/project-media/brok/brok-prd.pdf"],
  },
  capy: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/capy/screen-1.png", "/project-media/capy/screen-2.png", "/project-media/capy/screen-3.png"],
    videos: ["/project-media/capy/demo.webm", "/project-media/capy/hyperframe.mp4", "/project-media/capy/user-demo-raw.webm", "/project-media/capy/walkthrough.mp4"],
  },
  classmate: {
    source: "Product media from my-search-me",
    screenshots: [
      "/project-media/classmate/slide-1.png",
      "/project-media/classmate/slide-2.png",
      "/project-media/classmate/slide-3.png",
      "/project-media/classmate/slide-4.png",
      "/project-media/classmate/slide-5.png",
      "/project-media/classmate/slide-6.png",
      "/project-media/classmate/slide-7.png",
      "/project-media/classmate/slide-8.png",
      "/project-media/classmate/slide-9.png",
    ],
    documents: ["/project-media/classmate/ClassMate.pdf"],
  },
  clawforge: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/clawforge/screen-1.png", "/project-media/clawforge/screen-2.png", "/project-media/clawforge/screen-3.png"],
    videos: [
      "/project-media/clawforge/clean-demo.mp4",
      "/project-media/clawforge/demo.webm",
      "/project-media/clawforge/hyperframe.mp4",
      "/project-media/clawforge/user-demo-raw.webm",
      "/project-media/clawforge/walkthrough.mp4",
    ],
  },
  "daily-adventure-calls": {
    source: "Product media from my-search-me",
    screenshots: [
      "/project-media/daily-adventure-calls/screen-1.png",
      "/project-media/daily-adventure-calls/screen-2.png",
      "/project-media/daily-adventure-calls/screen-3.png",
    ],
  },
  forgeit: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/forgeit/screen-1.png", "/project-media/forgeit/screen-2.png", "/project-media/forgeit/screen-3.png"],
  },
  "fez-lab-finder": {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/fez-lab-finder/screen-1.png", "/project-media/fez-lab-finder/screen-2.png", "/project-media/fez-lab-finder/screen-3.png"],
  },
  hackarena: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/hackarena/screen-1.png", "/project-media/hackarena/screen-2.png", "/project-media/hackarena/screen-3.png"],
    videos: [
      "/project-media/hackarena/demo.webm",
      "/project-media/hackarena/e2e-demo.mp4",
      "/project-media/hackarena/e2e-raw.webm",
      "/project-media/hackarena/hyperframe.mp4",
      "/project-media/hackarena/walkthrough.mp4",
    ],
  },
  lingoose: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/lingoose/screen-1.png", "/project-media/lingoose/screen-2.png", "/project-media/lingoose/screen-3.png"],
    videos: [
      "/project-media/lingoose/demo.webm",
      "/project-media/lingoose/hyperframe.mp4",
      "/project-media/lingoose/user-demo-raw.webm",
      "/project-media/lingoose/walkthrough.mp4",
    ],
  },
  "brok-mail": {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/mail-cal-ai/screen-1.png", "/project-media/mail-cal-ai/screen-2.png", "/project-media/mail-cal-ai/screen-3.png"],
  },
  openvision: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/openvision/screen-1.png", "/project-media/openvision/screen-2.png", "/project-media/openvision/screen-3.png"],
    videos: [
      "/project-media/openvision/demo.webm",
      "/project-media/openvision/hyperframe.mp4",
      "/project-media/openvision/user-demo-raw.webm",
      "/project-media/openvision/walkthrough.mp4",
    ],
  },
  piefi: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/piefi/screen-1.png", "/project-media/piefi/screen-2.png", "/project-media/piefi/screen-3.png"],
    videos: [
      "/project-media/piefi/demo.webm",
      "/project-media/piefi/hyperframe.mp4",
      "/project-media/piefi/user-demo-raw.webm",
      "/project-media/piefi/walkthrough.mp4",
    ],
  },
  pielot: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/pielot/screen-1.png", "/project-media/pielot/screen-2.png", "/project-media/pielot/screen-3.png"],
    videos: ["/project-media/pielot/demo.mp4"],
    documents: ["/project-media/pielot/openai-hackathon-brainstorming.pdf", "/project-media/pielot/openai-hackathon-prd-correction.pdf"],
  },
  "round-robin": {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/round-robin/screen-1.png", "/project-media/round-robin/screen-2.png", "/project-media/round-robin/screen-3.png"],
  },
  burb: {
    source: "Product media from my-search-me",
    screenshots: ["/project-media/burb/screen-1.png", "/project-media/burb/screen-2.png", "/project-media/burb/screen-3.png"],
  },
};

const productsWithCaseStudies = products.map((product) => ({
  ...product,
  caseStudy: caseStudies[product.slug],
  media: mediaByProduct[product.slug],
}));

const capabilities = [
  ["01", "launch websites", "Clean, responsive sites with sharp copy, fast load times, and production-ready deployment."],
  ["02", "prototype products", "Dashboards, AI interfaces, workflows, and MVPs that feel real quickly."],
  ["03", "build internal tools", "Admin panels, workflow tools, automations, and reporting surfaces for teams that need speed."],
  ["04", "ship cloud setup", "Domains, DNS, SSL, Cloudflare, Pages, Workers, analytics, and launch cleanup."],
  ["05", "polish existing apps", "Design cleanup, UX fixes, copy passes, performance improvements, and final QA."],
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Webshack home">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6.5C26.7 6.5 29.2 8 30.6 10.4L43 31.9C45.9 36.9 42.3 43 36.5 43H11.5C5.7 43 2.1 36.9 5 31.9L17.4 10.4C18.8 8 21.3 6.5 24 6.5Z" />
      </svg>
    </a>
  );
}

function App() {
  const [selectedSlug, setSelectedSlug] = useState(() => window.location.hash.replace("#product-", ""));
  const [showSplash, setShowSplash] = useState(() => !window.location.hash.startsWith("#product-"));
  const selectedProduct = productsWithCaseStudies.find((product) => product.slug === selectedSlug);

  useEffect(() => {
    const handleHash = () => setSelectedSlug(window.location.hash.replace("#product-", ""));
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  const openProduct = (slug) => {
    window.location.hash = `product-${slug}`;
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProduct = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setSelectedSlug("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedProduct) {
    return <ProductPage product={selectedProduct} onBack={closeProduct} />;
  }

  return (
    <main id="top">
      {showSplash ? (
        <div className="splash" aria-hidden="true">
          <Logo />
          <span>Webshack</span>
        </div>
      ) : null}
      <section className="hero-shell">
        <aside className="intro-panel">
          <Logo />
          <div>
            <p className="kicker">The modern fast dev team</p>
            <h1>Webshack</h1>
            <p className="intro-copy">
              We build clean websites, product prototypes, AI workflows, internal tools, and launch-ready systems without dragging the process out.
            </p>
            <div className="hero-actions">
              <a className="solid" href="#projects">see projects</a>
              <a className="outline" href="#contact">contact</a>
            </div>
          </div>
        </aside>

        <section className="media-panel" aria-label="Studio image">
          <video
            src="/project-media/webshack/webshack-main.mp4"
            poster="/project-media/webshack/webshack-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
        </section>
      </section>

      <section className="section current">
        <div className="section-head">
          <p>Selected work</p>
          <h2>Fast builds, clean systems</h2>
        </div>
        <div className="loop-list">
          {productsWithCaseStudies.slice(0, 4).map((item, index) => (
            <button className="loop-row" type="button" onClick={() => openProduct(item.slug)} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={item.image} alt="" />
              <div>
                <p>{item.title}</p>
                <small>{item.copy}</small>
              </div>
              <strong>{item.tag}</strong>
              <ArrowUpRight size={22} />
            </button>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <p>Product, web, AI, and workflow examples</p>
          <h2>Projects</h2>
        </div>
        <div className="project-grid">
          {productsWithCaseStudies.map((product) => (
            <button className="project-card" type="button" onClick={() => openProduct(product.slug)} key={product.slug}>
              <span>{product.meta}</span>
              <h3>{product.title}</h3>
              <p>{product.tag}</p>
            </button>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience">
        <div className="section-head">
          <p>What we work on</p>
          <h2>Capabilities</h2>
        </div>
        <div className="timeline">
          {capabilities.map(([number, title, copy]) => (
            <article key={title}>
              <time>{number}</time>
              <div>
                <small>{copy}</small>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section education">
        <div className="section-head">
          <p>How we think</p>
          <h2>Approach</h2>
        </div>
        <div className="education-grid">
          <article>
            <h3>simple first</h3>
            <p>Start with the cleanest version of the product, then add only what makes the experience clearer.</p>
          </article>
          <article>
            <h3>fast feedback</h3>
            <p>Get something usable in front of people quickly, then tighten the details with real feedback.</p>
          </article>
          <article>
            <h3>launch clean</h3>
            <p>Finish the boring but important parts: domains, SSL, responsive states, speed, and final polish.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="kicker">Direct links / no form</p>
          <h2>Build with us</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:hello@webshack.us"><Mail size={20} /> hello@webshack.us</a>
          <a href="https://webshack.us" target="_blank" rel="noreferrer"><AtSign size={20} /> webshack.us</a>
        </div>
      </section>

      <footer>
        <Logo />
        <span>webshack.us / the modern fast dev team</span>
      </footer>
    </main>
  );
}

function ProductPage({ product, onBack }) {
  return (
    <main className="product-page">
      <header className="product-nav">
        <Logo />
        <button type="button" onClick={onBack}>all projects</button>
      </header>

      <section className="product-hero">
        <div>
          <p className="kicker">{product.meta}</p>
          <h1>{product.title}</h1>
          <p className="intro-copy">{product.copy}</p>
          <div className="hero-actions">
            {product.url ? (
              <a className="solid" href={product.url} target="_blank" rel="noreferrer">
                open project <ArrowUpRight size={18} />
              </a>
            ) : null}
            <button className="outline" type="button" onClick={onBack}>back</button>
          </div>
        </div>
        {product.image ? <img src={product.image} alt="" /> : <div className="product-placeholder">{product.title}</div>}
      </section>

      <section className="section product-info">
        <div className="section-head">
          <p>{product.tag}</p>
          <h2>overview</h2>
        </div>
        <div className="note-list">
          {product.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      </section>

      <section className="section case-study">
        <div className="section-head">
          <p>{product.meta}</p>
          <h2>case study</h2>
        </div>
        <div className="case-grid">
          <article className="case-card stack-card">
            <span>stack</span>
            <div className="stack-list">
              {product.caseStudy.stack.map((item) => (
                <small key={item}>{item}</small>
              ))}
            </div>
          </article>
          <article className="case-card">
            <span>what they wanted</span>
            <p>{product.caseStudy.wanted}</p>
          </article>
          <article className="case-card">
            <span>what they gave us</span>
            <p>{product.caseStudy.provided}</p>
          </article>
          <article className="case-card">
            <span>result</span>
            <p>{product.caseStudy.result}</p>
          </article>
        </div>
      </section>

      {product.media ? <ProductMedia product={product} /> : null}
    </main>
  );
}

function ProductMedia({ product }) {
  const videos = product.media.videos || [];
  const screenshots = product.media.screenshots || [];
  const documents = product.media.documents || [];

  return (
    <section className="section product-media">
      <div className="section-head">
        <p>{product.media.source}</p>
        <h2>media</h2>
      </div>

      {videos.length ? (
        <div className="video-grid">
          {videos.map((video, index) => (
            <article className="video-card" key={video}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{video.split("/").pop().replace(/\.(mp4|webm)$/i, "").replaceAll("-", " ")}</p>
              </div>
              <video controls playsInline preload={index === 0 ? "metadata" : "none"} poster={screenshots[0]} src={video} />
            </article>
          ))}
        </div>
      ) : null}

      {screenshots.length ? (
        <div className="screenshot-strip" aria-label={`${product.title} screenshots`}>
          {screenshots.map((screenshot, index) => (
            <figure key={screenshot}>
              <img src={screenshot} alt={`${product.title} screenshot ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      ) : null}

      {documents.length ? (
        <div className="doc-links">
          {documents.map((documentPath) => (
            <a href={documentPath} target="_blank" rel="noreferrer" key={documentPath}>
              {documentPath.split("/").pop().replace(".pdf", "").replaceAll("-", " ")}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
