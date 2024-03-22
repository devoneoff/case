export const LANGUAGES = [
    {
        title: 'JavaScript',
        codes: [
            {code: 1, text: "const developer = {", indent: '0rem'},
            {code: 2, text: "name: 'Irina Krylova',", indent: '1rem'},
            {code: 3, text: "socialMedia: {", indent: '1rem'},
            {code: 4, text: "github: 'https://github.com/devoneoff',", indent: '2rem'},
            {code: 5, text: "behance: 'https://www.behance.net/devoneoff',", indent: '2rem'},
            {code: 6, text: "vk: 'https://vk.com/devoneoff',", indent: '2rem'},
            {code: 7, text: "},", indent: '1rem'},
            {code: 8, text: "profiles: [", indent: '1rem'},
            {code: 9, text: "['UX/UI Designer']", indent: '2rem'},
            {code: 10, text: "['Frontend Developer']", indent: '2rem'},
            {code: 11, text: "['Backend Developer']", indent: '2rem'},
            {code: 12, text: "['Mobile Developer']", indent: '2rem'},
            {code: 13, text: "['3D Visualizer/Modeller']", indent: '2rem'},
            {code: 14, text: "['Game Developer']", indent: '2rem'},
            {code: 15, text: "],", indent: '1rem'},
            {code: 16, text: "about: ' A passionate UX/UI designer and full-time developer with over 2 years of experience. I study the concepts of modern, visual design and its user-oriented principles. I speak several programming languages, including JavaScript and Python. I always strive to master new technologies and expand my skill set.'", indent: '1rem'},
            {code: 17, text: "};", indent: '0rem'},
        ]
    },
    {
        title: 'Python',
        codes: [
            {code: 1, text: "developer = {", indent: '0rem'},
            {code: 2, text: "'name': 'Irina Krylova',", indent: '1rem'},
            {code: 3, text: "'socialMedia': {", indent: '1rem'},
            {code: 4, text: "'github': 'https://github.com/devoneoff',", indent: '2rem'},
            {code: 5, text: "'behance': 'https://www.behance.net/devoneoff',", indent: '2rem'},
            {code: 6, text: "vk': 'https://vk.com/devoneoff',", indent: '2rem'},
            {code: 7, text: "},", indent: '1rem'},
            {code: 8, text: "'profiles': [", indent: '1rem'},
            {code: 9, text: "['UX/UI Designer']", indent: '2rem'},
            {code: 10, text: "['Frontend Developer']", indent: '2rem'},
            {code: 11, text: "['Backend Developer']", indent: '2rem'},
            {code: 12, text: "['Mobile Developer']", indent: '2rem'},
            {code: 13, text: "['3D Visualizer/Modeller']", indent: '2rem'},
            {code: 14, text: "['Game Developer']", indent: '2rem'},
            {code: 15, text: "],", indent: '1rem'},
            {code: 16, text: "'about': ' A passionate UX/UI designer and full-time developer with over 2 years of experience. I study the concepts of modern, visual design and its user-oriented principles. I speak several programming languages, including JavaScript and Python. I always strive to master new technologies and expand my skill set.'", indent: '1rem'},
            {code: 17, text: "};", indent: '0rem'},
        ]
    }
];

export const SKILLS = [
    {
        title: "UX/UI Design",
        icon: "bxs-palette",
        skills: [
            { skill: "Figma", percentage:"55%" },
            { skill: "Photoshop", percentage:"20%" },
            { skill: "Pixso", percentage:"50%" },
            { skill: "UI-Kit", percentage:"10%" },
            { skill: "Web/Mobile interfaces", percentage:"60%" },
            { skill: "Mobile-first", percentage:"60%" },
            { skill: "Illustrator", percentage:"1%" },
        ],
    },
    {
        title: "Frontend",
        icon: "bxs-layout",
        skills: [
            { skill: "HTML5", percentage:"80%" },
            { skill: "CSS3 (SASS, SCSS, less)", percentage:"90%" },
            { skill: "JavaScript", percentage:"75%" },
            { skill: "React.js", percentage:"30%" },
            { skill: "CMS Joomla & WordPress", percentage:"25%" },
            { skill: "Python", percentage:"30%" },
            { skill: "Docker, Kubernetes", percentage:"30%" },
        ],
    },
    {
        title: "Backend",
        icon: "bxs-data",
        skills: [
            { skill: "Node.JS", percentage:"20%" },
            { skill: "PHP", percentage:"40%" },
            { skill: "MySQL", percentage:"40%" },
            { skill: "Express, Nest", percentage:"1%" },
            { skill: "API", percentage:"30%" },
            { skill: "PostgreSQL", percentage:"10%" },
            { skill: "Angular", percentage:"35%" },
        ],
    },
    {
        title: "Mobile",
        icon: "bxs-mobile",
        skills: [
            { skill: "C/C++", percentage:"0%" },
            { skill: "Java / Kotlin", percentage:"0%" },
            { skill: "Objective-C / Swift", percentage:"0%" },
            { skill: "Python", percentage:"5%" },
            { skill: "Flutter & Dart", percentage:"5%" },
            { skill: "Firebase", percentage:"5%" },
        ],
    },
    {
        title: "3D",
        icon: "bxs-cube",
        skills: [
            { skill: "Autodesk 3d Max", percentage:"35%" },
            { skill: "Corona Render", percentage:"30%" },
            { skill: "3D Hamster", percentage:"50%" },
            { skill: "Blender", percentage:"10%" },
            { skill: "Photoshop", percentage:"20%" },
            { skill: "AutoCad", percentage:"1%" },
            { skill: "Forest pack", percentage:"0%" },
        ],
    },
    {
        title: "Tools",
        icon: "bx-wrench",
        skills: [
            { skill: "Git & GitHub", percentage:"70%" },
            { skill: "Visual Studio, Visual Studio Code", percentage:"80%" },
            { skill: "Webpack", percentage:"40%" },
            { skill: "Redux", percentage:"50%" },
            { skill: "HTTP/HTTPS, session, cookie", percentage:"70%" },
            { skill: "OS Windows, Linux", percentage:"50%" },
        ],
    },
];

export const CASES = [
    {
        title: "UX/UI Design",
        cases: [
            { 
                case: "Happy New Year", 
                image: "./assets/images/projects/UxUiDesign/HappyNewYear.png",
                technologies: [
                    { technology: "Figma" },
                ],
                link: "https://www.figma.com/proto/xQlriFMhNhEsZknhMWYKxq/New-Year-2024?type=design&node-id=10-249&t=y9IUdygxkNFXJ6lB-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A206",
            },
            { 
                case: "Calculator", 
                image: "./assets/images/projects/UxUiDesign/Calculator.png",
                technologies: [
                    { technology: "Figma" },
                ],
                link: "https://www.figma.com/proto/uJrpzByJALs0sgRIaT4OW7/Untitled?type=design&node-id=1-3&t=ghSzfGOlgN671mYc-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3",
            },
            { 
                case: "Cleaning Oil", 
                image: "./assets/images/projects/UxUiDesign/CleaningOil.png",
                technologies: [
                    { technology: "Figma" },
                ],
                link: "https://www.figma.com/proto/wSV6OaHAO7P5p4SllWEVug/Oils?type=design&t=D5JgxjATwXrFwDut-0&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
            },
            { 
                case: "Alpha Cars", 
                image: "./assets/images/projects/UxUiDesign/AlphaCars.png",
                technologies: [
                    { technology: "Figma" },
                ],
                link: "https://www.figma.com/proto/K0S3QbZHMEDmvnh53pYyJm/Alpha?type=design&node-id=1-11&t=eZpmhdedKXaF01xl-0&scaling=scale-down&page-id=0%3A1",
            },
            { 
                case: "McLaren 570S", 
                image: "./assets/images/projects/UxUiDesign/McLaren570S.png",
                technologies: [
                    { technology: "Figma" },
                ],
                link: "https://www.figma.com/proto/WJub1uES8n2Ck0EH5Y7eCv/McLaren-570S?type=design&node-id=1-2&t=91OxNhVJhpUiDLqM-0&scaling=scale-down&page-id=0%3A1",
            },
            { 
                case: "NFT Market", 
                image: "./assets/images/projects/UxUiDesign/NFTMarket.png",
                technologies: [
                    { technology: "Figma" },
                ],
                link: "https://www.figma.com/proto/vJv9t4DTerMxUU5vQ8B69d/NFT-Market?type=design&node-id=1-3&t=E5vFSKd8gF1iNhht-0&scaling=scale-down&page-id=0%3A1",
            },
        ],
    },
    {
        title: "Frontend & Backend",
        cases: [
            { 
                case: "Burgers", 
                image: "./assets/images/projects/FrontendBackend/Burgers.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "Angular" },
                    { technology: "TypeScript" },
                ],
                link: "https://devoneoff.github.io/Burgers/",
            },
            { 
                case: "SideBar Black", 
                image: "./assets/images/projects/FrontendBackend/SideBarBlack.png",
                technologies: [
                    { technology: "ReactJS" },
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "Git" },
                ],
                link: "https://devoneoff.github.io/Sidebar-Black/",
            },
            { 
                case: "Luxorides", 
                image: "./assets/images/projects/FrontendBackend/Luxorides.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "Angular" },
                    { technology: "TypeScript" },
                ],
                link: "https://devoneoff.github.io/cars-hw/",
            },
            { 
                case: "Miami", 
                image: "./assets/images/projects/FrontendBackend/MiamiSliderParalax.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/miami/",
            },
            { 
                case: "Game 2048", 
                image: "./assets/images/projects/FrontendBackend/Game2048.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/2048/",
            },
            { 
                case: "Calendar", 
                image: "./assets/images/projects/FrontendBackend/Calendar.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/Calendar/",
            },
            { 
                case: "3D Slider", 
                image: "./assets/images/projects/FrontendBackend/SliderParalax.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/slider-3c-scene/",
            },
            { 
                case: "Fairy Forest", 
                image: "./assets/images/projects/FrontendBackend/FairyForestParalax.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/fairy_forest/",
            },
            { 
                case: "Weather App", 
                image: "./assets/images/projects/FrontendBackend/WeatherApp.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/weather-app/",
            },
            { 
                case: "ToDo App", 
                image: "./assets/images/projects/FrontendBackend/ToDoList.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/ToDo-App/",
            },
            { 
                case: "Natural Forest", 
                image: "./assets/images/projects/FrontendBackend/NaturalForestParalax.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/natural-forest/",
            },
            { 
                case: "Natural Slider", 
                image: "./assets/images/projects/FrontendBackend/NaturalSlider.png",
                technologies: [
                    { technology: "HTML5" },
                    { technology: "CSS3" },
                    { technology: "JavaScript" },
                ],
                link: "https://devoneoff.github.io/slider-nature/",
            },
        ],
    },
    {
        title: "3D Visualization",
        cases: [
            { 
                case: "ChildrenRoom", 
                image: "./assets/images/projects/3D/ChildrenRoom.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/ChildrenRoomFull.png",
            },
            { 
                case: "Chair", 
                image: "./assets/images/projects/3D/Chair.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/ChairFull.png",
            },
            { 
                case: "Bedroom", 
                image: "./assets/images/projects/3D/Bedroom.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/Bedroom.png",
            },
            { 
                case: "House", 
                image: "./assets/images/projects/3D/House.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/House.png",
            },
            { 
                case: "Elevator", 
                image: "./assets/images/projects/3D/Elevator.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/Elevator.png",
            },
            { 
                case: "Breakfast", 
                image: "./assets/images/projects/3D/Breakfast.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/Breakfast.png",
            },
            { 
                case: "Kitchen", 
                image: "./assets/images/projects/3D/Kitchen.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/Kitchen.png",
            },
            { 
                case: "Living Room Two", 
                image: "./assets/images/projects/3D/LivingRoomTwo.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/LivingRoomTwo.png",
            },
            { 
                case: "Living Room One", 
                image: "./assets/images/projects/3D/LivingRoomOne.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/LivingRoomOne.png",
            },
            { 
                case: "Toilet", 
                image: "./assets/images/projects/3D/Toilet.png",
                technologies: [
                    { technology: "3Ds Max" },
                    { technology: "Corona" },
                    { technology: "3DHamster" },
                ],
                link: "./assets/images/projects/3D/Toilet.png",
            },
        ],
    },
];

export const CERTIFICATES = [
    {
        title: 'Frontend Start',
        school: 'Itlogia',
        image: './assets/images/sertif/ItlogiaFrontendStart.png'
    },
    {
        title: 'Web Development For Beginner HTML and CSS',
        school: 'Stepik',
        image: './assets/images/sertif/StepikWebDevelopmentForBeginnerHTMLandCSS.png'
    },
    {
        title: 'Basic Layout Sites HTML and CSS',
        school: 'Netology',
        image: './assets/images/sertif/NetologyBasicLayoutHTMLandCSS.jpg'
    },
    {
        title: 'UX/UI Design',
        school: 'Itlogia',
        image: './assets/images/sertif/ItlogiaUxUiStart.png'
    },
    {
        title: 'Basic Python: creating a telegram bot',
        school: 'Netology',
        image: './assets/images/sertif/NetologyBasicPythonCreatingATelegramBot.png'
    },
    {
        title: 'Basic Course on Design',
        school: 'Online University "Potok"',
        image: './assets/images/sertif/PotokBasicCourseOnDesign.png'
    },
];

export const REVIEWS = [
    {
        name: 'Maxim Tikhonov',
        profession: 'Hockey Coach',
        photo: './assets/images/user1.png',
        message: 'We decided to develop our team on the Internet as well. We have developed a design and a website for us with the ability to register for classes and view applications. It turned out very cool and professional!!!',
        stars: '★ ★ ★ ★ ★',
    },
    {
        name: 'Mariya Linskaya',
        profession: 'Head of Department',
        photo: './assets/images/user2.png',
        message: 'The work was done super efficiently in the shortest possible time',
        stars: '★ ★ ★ ★ ★',
    },
    {
        name: 'Mikhail Prokhorov',
        profession: 'Businessman',
        photo: './assets/images/user3.png',
        message: 'He opened his own restaurant. I needed a website for promotion. Everything is fast and high-quality! I recommend a specialist',
        stars: '★ ★ ★ ★ ★',
    },
    {
        name: 'Elizaveta Klimova',
        profession: 'The manicurist',
        photo: './assets/images/user4.png',
        message: 'We have developed an excellent website for personal promotion of my services. In addition, they helped me to design my instagram beautifully. Now clients sign up in a month!!! Thank you, I recommend it',
        stars: '★ ★ ★ ★ ★',
    },
    {
        name: 'Kirill Leontiev',
        profession: 'Sportsman',
        photo: './assets/images/user5.png',
        message: 'Quickly, efficiently, at the level of',
        stars: '★ ★ ★ ★ ★',
    },
    {
        name: 'Kristina Lis',
        profession: 'Blogger',
        photo: './assets/images/user6.png',
        message: 'We have developed the concept of designs for filling insta and channels. The result exceeded expectations!',
        stars: '★ ★ ★ ★ ★',
    },
    
]; 