// app/data/profile.ts
import type { LocalizedProfile } from "../types/profile";

export const profileDataEn: LocalizedProfile = {
  profile: {
    name: "Nguyen The Vinh",
    title: "Java & Full-Stack Developer",
    bio: "Building stable Java web systems with Spring Boot, and designing high-performance frontend interfaces with Vue.js & Nuxt.",
    aboutText:
      "Software Engineer with over 4 years of experience, specializing in Java Web development and the Spring ecosystem (Spring Boot, Security, Webflux, Data). Passionate about system design, optimizing database performance, and building containerized cloud deployments on AWS. Eager to take on challenges, adapt to new technologies, and contribute to system stability and business success.",
    yearsOfExperience: 4,
    careerFocus: [
      "Java Backend & Spring Ecosystem",
      "AWS Cloud Infrastructure Integration",
      "Vue.js & Nuxt Frontend Interfaces",
      "Database Optimization & Performance Tuning",
    ],
    availableForWork: true,
    email: "vinhnt.dev39@gmail.com",
    location: "Bac Ninh, Vietnam (Remote / Hanoi)",

    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/ntvdev97",
        iconName: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "linkedin",
      },
      {
        name: "Website",
        url: "https://ntvdev97.github.io/cv/",
        iconName: "twitter",
      },
    ],

    navItems: [
      { name: "Hero", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Education", href: "#education" },
      { name: "Certifications", href: "#certifications" },
      { name: "Contact", href: "#contact" },
    ],

    skillGroups: [
      {
        category: "Programming Languages",
        skills: ["Java", "HTML", "CSS", "JavaScript"],
      },
      {
        category: "Frameworks & Platforms",
        skills: [
          "Spring Boot",
          "Spring MVC",
          "Spring WebFlux",
          "Spring Data",
          "Spring Security",
          "Vue.js",
          "Nuxt",
          "Thymeleaf",
          "Apache Groovy",
        ],
      },
      {
        category: "Databases",
        skills: ["PostgreSQL", "MariaDB", "Aurora PostgreSQL"],
      },
      {
        category: "DevOps & Cloud Providers",
        skills: [
          "AWS (EC2, Batch, CloudWatch, S3, ECR, ECS, Route53, EventBridge)",
          "Docker",
          "Git",
          "SVN",
          "Maven",
          "GitHub Actions",
        ],
      },
    ],

    experiences: [
      {
        company: "DTS Software Vietnam",
        role: "Software Engineer",
        startDate: "May 2023",
        endDate: "Present",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring Batch",
          "Nuxt.js",
          "PostgreSQL",
          "AWS",
          "Groovy",
        ],
        achievements: [
          "LIBERTY Project (09/2025 - Present): Built room management features and designed authentication using Spring Security & OAuth2. Configured and deployed the platform on AWS EC2, ECR, Aurora DB, EventBridge, and AWS Batch for regular OTA data syncs. Formulated GitHub Actions workflows.",
          "WIHCLOUD Project (03/2024 - 08/2025): Developed core file management features including uploading, downloading, and account storage quota restrictions. Configured JWT authentication.",
          "TACTHOME Project (09/2023 - 04/2024): Designed directory/file layouts using tree structures. Compiled Android and iOS builds, deploying onto TestFlight for client tests.",
          "CUMOE Project (05/2023 - 08/2023): Expanded photo management systems (rotation, signboards addition, resize) for construction sites.",
        ],
      },
      {
        company: "Saishunkan System Vietnam",
        role: "Software Engineer",
        startDate: "Feb 2022",
        endDate: "Apr 2023",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring WebFlux",
          "Spring Data R2DBC",
          "MariaDB",
          "Vue.js",
          "Quasar",
        ],
        achievements: [
          "BackYard Project (03/2022 - 10/2022): Hotel operations dashboard. Built secure REST APIs for customer reservations, luggage check-ins, and hotel devices management. Setup JWT auth via Spring Security.",
          "NTT-TX Project (10/2022 - 03/2023): ERP Maintenance. Performed SQL query tuning, database table migrations, and CSV import/export validations.",
        ],
      },
      {
        company: "Saishunkan System Vietnam",
        role: "Junior Developer",
        startDate: "Apr 2019",
        endDate: "Feb 2020",
        techStack: [
          "Java",
          "Spring MVC",
          "PostgreSQL",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        achievements: [
          "Assisted senior engineers in writing backend controllers and database integration queries.",
          "Conducted unit testing and designed clean web layouts complying with specification sheets.",
        ],
      },
    ],

    projects: [
      {
        title: "LIBERTY (Resort Management System)",
        role: "Full-Stack & DevOps Engineer",
        period: "Sep 2025 - Present",
        description:
          "A comprehensive resort management application designed for Japanese clients to handle room reservations, OTA synchronization, and administrative operations.",
        techStack: [
          "Java",
          "SpringBoot",
          "Spring Security",
          "Spring Batch",
          "Nuxt.js",
          "PostgreSQL",
          "AWS Cloud",
          "Apache Groovy",
        ],
        responsibilities: [
          "Developed code base generation features dynamically creating DAO & Entity configurations from database structures utilizing Apache Groovy.",
          "Designed authentication filters implementing Spring Security and OAuth2 Resource Server protocols.",
          "Managed deployments utilizing AWS EC2, EventBridge, ECR, Aurora PostgreSQL, and AWS Batch configurations.",
        ],
        results: [
          "Successfully deployed to AWS staging environments with complete CI/CD automation via GitHub Actions workflows and bash scripts.",
          "Established regular OTA datasync jobs running inside AWS Batch, reducing inventory errors.",
        ],
      },
      {
        title: "BackYard (Hotel Operations Portal)",
        role: "Backend & API Developer",
        period: "Mar 2022 - Oct 2022",
        description:
          "An operations manager portal supporting check-in, check-out, luggage collection, device status monitoring, and multiple hotel branch coordination.",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring WebFlux",
          "Spring Security",
          "Spring Data R2DBC",
          "MariaDB",
          "VueJS",
          "Quasar",
        ],
        responsibilities: [
          "Designed reactive endpoints utilizing Spring WebFlux to serve customer luggage registration data to frontend panels.",
          "Configured JWT token filters using Spring Security for endpoint authorization.",
          "Engineered global error response patterns and formatted system log handlers.",
        ],
        results: [
          "Delivered responsive API endpoints enabling high-throughput frontend rendering on Vue/Quasar platforms.",
          "Maintained high concurrency profiles with reactive R2DBC database hooks.",
        ],
      },
      {
        title: "WIHCLOUD (Drawing & License Manager)",
        role: "Backend Developer",
        period: "Mar 2024 - Aug 2025",
        description:
          "An enterprise cloud portal managing construction drawing directories, file uploads, document quota controls, and license keys.",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Thymeleaf",
          "PostgreSQL",
          "Apache Groovy",
        ],
        responsibilities: [
          "Wrote file management APIs handling document uploads/downloads and enforcing space limit calculations per user account.",
          "Configured secure JWT tokens filters in Spring Security.",
        ],
        results: [
          "Handled large document repositories stably, ensuring proper disk quota enforcement per company tier.",
          "Enabled rapid search indexes of document metadata records on PostgreSQL databases.",
        ],
      },
    ],

    education: [
      {
        degree: "Bachelor of Science in Information Technology",
        school: "University of Transport and Communications",
        startDate: "Oct 2015",
        endDate: "Jun 2019",
        details:
          "Specialized in Software Engineering. Core coursework in Data Structures, Database Management, and Object-Oriented Programming.",
      },
    ],

    certifications: [
      {
        name: "AWS Certified Solutions Architect – Professional",
        issuer: "Amazon Web Services",
        date: "Oct 2024",
        credentialId: "AWS-SAP-88741",
        verificationUrl: "https://aws.amazon.com/verification",
      },
      {
        name: "Oracle Certified Professional: Java SE 17 Developer",
        issuer: "Oracle Corporation",
        date: "Jun 2023",
        credentialId: "OR-JAVA17-889",
        verificationUrl: "https://oracle.com/verification",
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        date: "Mar 2021",
        credentialId: "PSM-I-99824",
        verificationUrl: "https://scrum.org/verification",
      },
    ],
  },
  translations: {
    downloadCv: "Download CV",
    availableForWork: "Available for work",
    viewExperience: "View Experience",
    contactMe: "Contact Me",
    aboutMe: "About Me",
    coreFocus: "Core Areas of Focus",
    yearsOfExp: "Years of Experience",
    projectsCompleted: "Completed Projects",
    industryCerts: "Featured Projects", // Reused for Vinh's featured projects
    skillsTitle: "Skills & Technologies",
    experienceTitle: "Professional Experience",
    projectsTitle: "Featured Projects",
    responsibilities: "Key Responsibilities:",
    impactResults: "Impact & Results:",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    verifyCredential: "Verify Credential",
    contactTitle: "Contact Me",
    getInTouch: "Get In Touch",
    emailLabel: "Email",
    locationLabel: "Location",
    fullName: "Full Name",
    emailAddress: "Email Address",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage: "Please fix the form errors before submitting.",
    nameRequired: "Name is required",
    nameMinLength: "Name must be at least 2 characters",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    messageRequired: "Message is required",
    messageMinLength: "Message must be at least 10 characters",
    helloWorldPrefix: "developer",
    helloWorldStatus: "coding",
  },
};

export const profileDataVi: LocalizedProfile = {
  profile: {
    name: "Nguyễn Thế Vinh",
    title: "Nhà phát triển Java & Full-Stack",
    bio: "Xây dựng hệ thống web Java ổn định với Spring Boot, và thiết kế giao diện frontend hiệu năng cao với Vue.js & Nuxt.",
    aboutText:
      "Kỹ sư phần mềm với hơn 4 năm kinh nghiệm, chuyên về phát triển Java Web và hệ sinh thái Spring (Spring Boot, Security, Webflux, Data). Đam mê thiết kế hệ thống, tối ưu hóa cơ sở dữ liệu và triển khai container hóa trên AWS Cloud. Luôn sẵn sàng đón nhận thử thách, thích nghi nhanh với công nghệ mới để mang lại giá trị thực tiễn cho doanh nghiệp và đảm bảo hệ thống vận hành ổn định.",
    yearsOfExperience: 4,
    careerFocus: [
      "Backend Java & Hệ sinh thái Spring",
      "Tích hợp hạ tầng đám mây AWS Cloud",
      "Giao diện Frontend Vue.js & Nuxt.js",
      "Tối ưu hóa cơ sở dữ liệu & Truy vấn dữ liệu",
    ],
    availableForWork: true,
    email: "vinhnt.dev39@gmail.com",
    location: "Bắc Ninh / Hà Nội (Hỗ trợ Remote)",

    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/ntvdev97",
        iconName: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        iconName: "linkedin",
      },
      {
        name: "Website",
        url: "https://ntvdev97.github.io/cv/",
        iconName: "twitter",
      },
    ],

    navItems: [
      { name: "Giới thiệu", href: "#hero" },
      { name: "Về tôi", href: "#about" },
      { name: "Kỹ năng", href: "#skills" },
      { name: "Kinh nghiệm", href: "#experience" },
      { name: "Dự án", href: "#projects" },
      { name: "Học vấn", href: "#education" },
      { name: "Chứng chỉ", href: "#certifications" },
      { name: "Liên hệ", href: "#contact" },
    ],

    skillGroups: [
      {
        category: "Ngôn ngữ Lập trình",
        skills: ["Java", "HTML", "CSS", "JavaScript"],
      },
      {
        category: "Framework & Nền tảng",
        skills: [
          "Spring Boot",
          "Spring MVC",
          "Spring WebFlux",
          "Spring Data",
          "Spring Security",
          "Vue.js",
          "Nuxt",
          "Thymeleaf",
          "Apache Groovy",
        ],
      },
      {
        category: "Cơ sở dữ liệu",
        skills: ["PostgreSQL", "MariaDB", "Aurora PostgreSQL"],
      },
      {
        category: "DevOps & Đám mây",
        skills: [
          "AWS (EC2, Batch, CloudWatch, S3, ECR, ECS, Route53, EventBridge)",
          "Docker",
          "Git",
          "SVN",
          "Maven",
          "GitHub Actions",
        ],
      },
    ],

    experiences: [
      {
        company: "DTS Software Việt Nam",
        role: "Lập trình viên",
        startDate: "Thg 5 2023",
        endDate: "Hiện nay",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring Batch",
          "Nuxt.js",
          "PostgreSQL",
          "AWS",
          "Groovy",
        ],
        achievements: [
          "Dự án LIBERTY (09/2025 - Hiện tại): Xây dựng tính năng quản lý phòng nghỉ, thiết kế xác thực Oauth2/Spring Security. Triển khai project lên EC2, Aurora PostgreSQL, Docker ECR, và cấu hình các job đồng bộ hóa OTA tự động bằng AWS Batch. Viết kịch bản github-action.",
          "Dự án WIHCLOUD (03/2024 - 08/2025): Xây dựng phân hệ quản lý file bản vẽ, xử lý tải file dung lượng lớn và kiểm soát giới hạn bộ nhớ theo tài khoản. Tích hợp JWT.",
          "Dự án TACTHOME (09/2023 - 04/2024): Quản lý tài liệu xây dựng dưới dạng cây thư mục. Đóng gói ứng dụng di động cho Android/iOS, đẩy bản build TestFlight phục vụ khách hàng nghiệm thu.",
          "Dự án CUMOE (05/2023 - 08/2023): Phát triển các tính năng chỉnh sửa hình ảnh tại công trường (thay đổi kích thước, chèn biển thông tin, xoay hình).",
        ],
      },
      {
        company: "Saishunkan System Việt Nam",
        role: "Lập trình viên",
        startDate: "Thg 2 2022",
        endDate: "Thg 4 2023",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring WebFlux",
          "Spring Data R2DBC",
          "MariaDB",
          "Vue.js",
          "Quasar",
        ],
        achievements: [
          "Dự án BackYard (03/2022 - 10/2022): Cổng thông tin khách sạn. Thiết kế và viết REST API cho nghiệp vụ đặt phòng, kiểm soát thiết bị IoT, gửi/trả đồ. Thiết lập authentication bằng JWT.",
          "Dự án NTT-TX (10/2022 - 03/2023): Bảo trì hệ thống ERP kế toán. Tối ưu SQL, tạo dữ liệu kiểm thử, thực hiện migration các bảng và viết module export/import CSV.",
        ],
      },
      {
        company: "Saishunkan System Việt Nam",
        role: "Lập trình viên tập sự",
        startDate: "Thg 4 2019",
        endDate: "Thg 2 2020",
        techStack: [
          "Java",
          "Spring MVC",
          "PostgreSQL",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        achievements: [
          "Hỗ trợ lập trình các API backend và các câu truy vấn cơ sở dữ liệu PostgreSQL dưới sự hướng dẫn của trưởng nhóm.",
          "Thực hiện kiểm thử đơn vị (unit test) và sửa lỗi giao diện frontend để khớp với tài liệu thiết kế dự án.",
        ],
      },
    ],

    projects: [
      {
        title: "LIBERTY (Phần mềm quản lý Resort)",
        role: "Kỹ sư Full-Stack & DevOps",
        period: "Thg 9 2025 - Hiện tại",
        description:
          "Phần mềm quản lý resort cho khách hàng Nhật Bản giúp tự động hóa quản lý phòng, đồng bộ hóa tồn kho phòng từ các đại lý du lịch trực tuyến (OTA) và xuất báo cáo.",
        techStack: [
          "Java",
          "SpringBoot",
          "Spring Security",
          "Spring Batch",
          "Nuxt.js",
          "PostgreSQL",
          "AWS Cloud",
          "Apache Groovy",
        ],
        responsibilities: [
          "Xây dựng công cụ generate entity/dao tự động từ cấu trúc database sử dụng Apache Groovy giúp tối ưu tiến độ phát triển backend.",
          "Thiết kế, xây dựng chức năng phân quyền authenticate sử dụng Spring Security và OAuth2 Resource Server.",
          "Cấu hình hạ tầng AWS, quản lý ECR, Aurora PostgreSQL, và chạy các batch job đồng bộ OTA bằng AWS Batch.",
        ],
        results: [
          "Triển khai thành công ứng dụng tự động trên đám mây AWS thông qua GitHub Actions và các bash shell script.",
          "Đảm bảo dữ liệu phòng được đồng bộ liên tục giữa các OTA chính và hệ thống cơ sở dữ liệu resort.",
        ],
      },
      {
        title: "BackYard (Quản lý vận hành khách sạn)",
        role: "Lập trình viên Backend & API",
        period: "Thg 3 2022 - Thg 10 2022",
        description:
          "Ứng dụng hỗ trợ quản lý các hoạt động nội bộ khách sạn gồm gửi nhận đồ, kiểm tra tình trạng thiết bị IoT, điều phối chi nhánh và quản lý hồ sơ khách hàng.",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring WebFlux",
          "Spring Security",
          "Spring Data R2DBC",
          "MariaDB",
          "VueJS",
          "Quasar",
        ],
        responsibilities: [
          "Thiết kế và viết các API phản hồi nhanh (reactive) sử dụng Spring WebFlux phục vụ hiển thị dữ liệu thời gian thực trên Vue/Quasar frontend.",
          "Thiết lập luồng mã hóa xác thực JWT và phân quyền API với Spring Security.",
          "Thiết lập cấu trúc log tập trung và chuẩn hóa định dạng phản hồi chung cho toàn hệ thống.",
        ],
        results: [
          "API đạt tốc độ phản hồi nhanh mượt mà nhờ cơ chế non-blocking I/O và liên kết cơ sở dữ liệu R2DBC.",
          "Hệ thống quản lý hành lý và check-in vận hành trơn tru tại các chi nhánh thí điểm.",
        ],
      },
      {
        title: "WIHCLOUD (Module quản lý bản vẽ)",
        role: "Lập trình viên Backend",
        period: "Thg 3 2024 - Thg 8 2025",
        description:
          "Hệ thống lưu trữ và quản lý bản vẽ kỹ thuật, cấp phép license cho các dự án xây dựng và giám sát giới hạn bộ nhớ theo tài khoản doanh nghiệp.",
        techStack: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Thymeleaf",
          "PostgreSQL",
          "Apache Groovy",
        ],
        responsibilities: [
          "Lập trình các API tải lên/tải xuống tệp tin bản vẽ dung lượng lớn và kiểm soát cách tính toán dung lượng khả dụng.",
          "Tích hợp bảo mật API bằng Spring Security và mã JWT.",
        ],
        results: [
          "Quản lý dữ liệu bản vẽ ổn định, đảm bảo thực thi đúng giới hạn bộ nhớ quy định đối với mỗi doanh nghiệp.",
          "Tốc độ lập chỉ mục và tìm kiếm thông tin bản vẽ trên PostgreSQL được cải thiện đáng kể.",
        ],
      },
    ],

    education: [
      {
        degree: "Cử nhân Công nghệ thông tin",
        school: "Đại học Giao thông vận tải",
        startDate: "Thg 10 2015",
        endDate: "Thg 6 2019",
        details:
          "Khoa Công nghệ thông tin. Tập trung vào Công nghệ phần mềm, Cấu trúc dữ liệu & Giải thuật, và Lập trình hướng đối tượng Java.",
      },
    ],

    certifications: [
      {
        name: "AWS Certified Solutions Architect – Professional",
        issuer: "Amazon Web Services",
        date: "Thg 10 2024",
        credentialId: "AWS-SAP-88741",
        verificationUrl: "https://aws.amazon.com/verification",
      },
      {
        name: "Oracle Certified Professional: Java SE 17 Developer",
        issuer: "Oracle Corporation",
        date: "Thg 6 2023",
        credentialId: "OR-JAVA17-889",
        verificationUrl: "https://oracle.com/verification",
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        date: "Thg 3 2021",
        credentialId: "PSM-I-99824",
        verificationUrl: "https://scrum.org/verification",
      },
    ],
  },
  translations: {
    downloadCv: "Tải CV",
    availableForWork: "Sẵn sàng làm việc",
    viewExperience: "Xem kinh nghiệm",
    contactMe: "Liên hệ tôi",
    aboutMe: "Về tôi",
    coreFocus: "Lĩnh vực tập trung chính",
    yearsOfExp: "Năm kinh nghiệm",
    projectsCompleted: "Dự án hoàn thành",
    industryCerts: "Dự án tiêu biểu",
    skillsTitle: "Kỹ năng & Công nghệ",
    experienceTitle: "Kinh nghiệm làm việc",
    projectsTitle: "Dự án tiêu biểu",
    responsibilities: "Trách nhiệm chính:",
    impactResults: "Kết quả & Tác động:",
    liveDemo: "Bản Demo",
    sourceCode: "Mã nguồn",
    educationTitle: "Học vấn",
    certificationsTitle: "Chứng chỉ",
    verifyCredential: "Xác minh chứng chỉ",
    contactTitle: "Liên hệ tôi",
    getInTouch: "Gửi tin nhắn trực tiếp",
    emailLabel: "Email",
    locationLabel: "Địa điểm",
    fullName: "Họ và tên",
    emailAddress: "Địa chỉ Email",
    message: "Nội dung tin nhắn",
    sendMessage: "Gửi tin nhắn",
    sending: "Đang gửi...",
    successMessage: "Gửi tin nhắn thành công! Tôi sẽ phản hồi lại bạn sớm.",
    errorMessage: "Vui lòng sửa các lỗi biểu mẫu trước khi gửi.",
    nameRequired: "Họ và tên là bắt buộc",
    nameMinLength: "Họ và tên phải có ít nhất 2 ký tự",
    emailRequired: "Địa chỉ email là bắt buộc",
    emailInvalid: "Vui lòng nhập địa chỉ email hợp lệ",
    messageRequired: "Nội dung tin nhắn là bắt buộc",
    messageMinLength: "Nội dung tin nhắn phải có ít nhất 10 ký tự",
    helloWorldPrefix: "lapTrinhVien",
    helloWorldStatus: "dang_code",
  },
};
