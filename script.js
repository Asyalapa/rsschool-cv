/* ========== Global variable ========== */
const translations = {
    en: {
        logo: "am",
        about: "about",
        skills: "skills",
        projects: "projects",
        experience: "experience",
        education: "education",
        contact: "contact",
        btn_lang: "en",
        footer_tech: "Designed & Built with HTML / CSS / JS",
        footer_top: "Back to top ↑",
        rs_school_alt: "Logo RS School",
        hero_label: "portfolio | cv",
        hero_status: "available for work",
        hero_name: "makarova\nanastasiya",
        hero_role: "junior frontend\ndeveloper",
        hero_description: "Creating modern web interfaces, learning JavaScript, and growing in frontend development.",
        hero_location: "Russia | Remote",
        btn_print: "Print Resume",
        photo_alt: "Anastasiya Makarova",
        decor_text: "code\ncreate\ngrow ",
        about_title: "about me",
        about_text_first: "Transitioning from technical and banking sectors into frontend development.",
        about_text_second: "I have an engineering background and experience working with documentation, clients, and large amounts of information. Currently focusing on JavaScript, HTML, CSS, and building real web projects.",
        about_text_third: "Looking for a team where I can ask questions, get feedback, and grow through real tasks.",
        soft_skills_thinking: "Systematic thinking",
        soft_skills_attention: "Attention to detail",
        soft_skills_discipline: "Discipline and self-organization",
        soft_skills_learning: "Fast learning",
        skills_core_label: "CORE",
        skill_js: "JavaScript (basic-confident)",
        skill_python: "Python (actively learning)",
        skill_git: "Git (basic commands)",
        skills_tools: "TOOLS",
        skills_lang_label: "LANGUAGES",
        lang_ru: "Russian — Native",
        lang_en: "English — B1",
        skills_additional: "ADDITIONAL",
        additional_alg: "Algorithms",
        additional_arch: "Frontend Architecture",
        additional_api: "API Integration",
        additional_des: "Responsive Design",
        project_type_edu: "EDUCATIONAL",
        project_1_title: "CV / PORTFOLIO",
        project_1_desc: "Personal CV webpage built with semantic HTML, responsive CSS, and interactive JavaScript.",
        project_2_title: "Princess Nails",
        project_2_desc: "Responsive landing page for a nail service master with elegant design.",
        project_3_title: "SMM Course Landing",
        project_3_desc: "Modern one-page landing for an online SMM promotion course.",
        project_view: "VIEW PROJECT ↗",
        code_example_title: "CODE EXAMPLES",
        code_example_1_title: "Palindrome Checker (with spaces)",
        code_example_2_title: "Merge Unique Elements",
        experience_title: "WORK EXPERIENCE",
        exp_1_role: "Customer Support Specialist",
        exp_1_company: "Rosbank PJSC",
        exp_1_desc: "Handled 30–50 daily inquiries, resolved complex requests, and coordinated across departments.",
        exp_2_role: "Mathematics Teacher",
        exp_2_company: "School No. 60",
        exp_2_desc: "Taught algebra and geometry, adapted complex material to students' level.",
        exp_3_role: "Document Management Specialist",
        exp_3_company: "Avto-Vik LLC",
        exp_3_desc: "Managed document flow in 1C, supported procurement and warehouse operations.",
        exp_4_role: "Design Engineer",
        exp_4_company: "United Engineering Center LLC",
        exp_4_desc: "Developed technical drawings and documentation according to requirements.",
        edu_1_title: "NNSTU named after R.E. Alekseev",
        edu_1_degree: "Master's Degree, Institute of Transport Systems",
        edu_2_title: "RS School",
        edu_2_degree: "Full-Stack JavaScript",
        edu_3_title: "1C:April Soft",
        edu_3_degree: "Python Basics from Scratch",
        edu_4_title: "RS School",
        edu_4_degree: "JS/FE Pre-School",
        edu_5_title: "Innopolis University",
        edu_5_degree: "Frontend Development Basics",
        contact_lead: "Let's build something"
    },
    ru: {
        logo: "ам",
        about: "обо мне",
        skills: "навыки",
        projects: "проекты",
        experience: "опыт",
        education: "образование",
        contact: "контакты",
        btn_lang: "рус",
        footer_tech: "Разработано с использованием HTML / CSS / JS",
        footer_top: "Наверх ↑",
        rs_school_alt: "Логотип RS School",
        hero_label: "портфолио | резюме",
        hero_status: "готова к работе",
        hero_name: "макарова\nанастасия",
        hero_role: "младший\nвеб-разработчик",
        hero_description: "Создаю современные веб-интерфейсы, изучаю JavaScript и развиваюсь в направлении frontend-разработки.",
        hero_location: "Россия | Удалённо",
        btn_print: "Печать резюме",
        photo_alt: "Анастасия Макарова",
        decor_text: "кодим\nсоздаём\nрастём",
        about_title: "О СЕБЕ",
        about_text_first: "Перехожу из технической и банковской сферы в frontend-разработку.",
        about_text_second: "У меня инженерное образование и опыт работы с документацией, клиентами и большими объёмами информации. Сейчас фокусируюсь на JavaScript, HTML, CSS и создании реальных веб-проектов.",
        about_text_third: "Ищу команду, где можно задавать вопросы, получать обратную связь и расти на реальных задачах.",
        soft_skills_thinking: "Системное мышление",
        soft_skills_attention: "Внимание к деталям",
        soft_skills_discipline: "Дисциплина и самоорганизация",
        soft_skills_learning: "Быстрое обучение",
        skills_core_label: "ЯЗЫКИ И ТЕХНОЛОГИИ",
        skill_js: "JavaScript (базовый-уверенный)",
        skill_python: "Python (активно изучаю)",
        skill_git: "Git (базовые команды)",
        skills_tools: "ИНСТРУМЕНТЫ",
        skills_lang_label: "ЯЗЫКИ",
        lang_ru: "Русский — Родной",
        lang_en: "Английский — B1",
        skills_additional: "ДОПОЛНИТЕЛЬНО",
        additional_alg: "Алгоритмы",
        additional_arch: "Frontend архитектура",
        additional_api: "Работа с API",
        additional_des: "Адаптивный дизайн",
        project_type_edu: "УЧЕБНЫЙ",
        project_1_title: "CV / ПОРТФОЛИО",
        project_1_desc: "Персональная страница-резюме на семантическом HTML, адаптивном CSS и интерактивном JavaScript.",
        project_2_title: "Ноготки принцессы",
        project_2_desc: "Адаптивный лендинг для мастера ногтевого сервиса с изящным дизайном.",
        project_3_title: "Лендинг курса SMM",
        project_3_desc: "Современный одностраничный сайт для онлайн-курса по SMM-продвижению.",
        project_view: "СМОТРЕТЬ ПРОЕКТ ↗",
        code_example_title: "ПРИМЕРЫ КОДА",
        code_example_1_title: "Палиндром (с учётом пробелов)",
        code_example_2_title: "Объединение уникальных элементов",
        experience_title: "ОПЫТ РАБОТЫ",
        exp_1_role: "Специалист клиентской поддержки",
        exp_1_company: "ПАО «Росбанк»",
        exp_1_desc: "Обработка 30–50 обращений в день, решение сложных запросов, координация с отделами.",
        exp_2_role: "Учитель математики",
        exp_2_company: "МБОУ СОШ №60",
        exp_2_desc: "Проведение уроков алгебры и геометрии, адаптация сложного материала под учеников.",
        exp_3_role: "Специалист по документообороту",
        exp_3_company: "ООО «Авто-Вик»",
        exp_3_desc: "Ведение документооборота в 1С, сопровождение закупочных и складских процессов.",
        exp_4_role: "Техник-конструктор",
        exp_4_company: "ООО «ОИЦ»",
        exp_4_desc: "Разработка чертежей и технической документации согласно требованиям.",
        edu_1_title: "НГТУ им. Р.Е. Алексеева",
        edu_1_degree: "Магистр, Институт транспортных систем",
        edu_2_title: "RS School",
        edu_2_degree: "Полный стек на JavaScript",
        edu_3_title: "1С «Апрель»",
        edu_3_degree: "Основы Python с нуля",
        edu_4_title: "RS School",
        edu_4_degree: "Подготовительный курс JS/FE по JavaScript и фронтенду",
        edu_5_title: "АНО ВО «Университет Иннополис»",
        edu_5_degree: "Основы Frontend-разработки",
        contact_lead: "Давайте обсудим возможности сотрудничества"
    }
};
let currentLang = 'en';

/* ========== DOM-elements ========== */
const langToggleBtn = document.getElementById('lang-toggle');
const dataTranslate = document.querySelectorAll('[data-translate]');
const dataTranslateAlt = document.querySelectorAll('[data-translate-alt]');
const printBtn = document.getElementById('print-btn');
const currentYear = document.getElementById('current-year');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

/* ========== Functions ========== */
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = lang === 'ru' ? 'Резюме | Макарова А.' : 'CV | Makarova A.';

    translateItems(dataTranslate, lang);
    translateItems(dataTranslateAlt, lang);
}

function translateItems(arr, lang) {
    arr.forEach(item => {
        if (item.dataset.translateAlt) {
            const key = item.dataset.translateAlt;
            item.setAttribute('alt', translations[lang][key]);
        }
        else {
            const key = item.dataset.translate;
            item.textContent = translations[lang][key];
        }
    });
}

/* ========== Listeners ========== */
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateLanguage(currentLang);
});

printBtn.addEventListener('click', () => window.print());

burger?.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
});

/* ========== Initialization ========== */
updateLanguage(currentLang);
currentYear.textContent = new Date().getFullYear();

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));
}

nav?.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
    });
});