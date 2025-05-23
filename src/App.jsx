import './App.css';

const skills = [
  ['Git', 'Docker', 'Linux'],
  ['JavaScript', 'React', 'HTML', 'CSS', 'Figma', 'Node.js', 'Nginx'],
  ['Java', 'Spring', 'PostgreSQL', 'Keycloak', 'REST API', 'Микросервисы'],
];

const skill = (arr) => {
  return (
    <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
      {arr.map((skill, i) => (
        <p
          className="resume-details"
          key={i}
          style={{
            width: 'auto',
            backgroundColor: '#d4d4d4',
            marginRight: '0.5rem',
            padding: '0.25rem 0.375rem',
            borderRadius: '0.25rem',
          }}
        >
          {skill}
        </p>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="resume-container">
      <div className="resume-wrapper">
        <div className="resume-layout">
          {/* Left section */}
          <div className="resume-main-content">
            <header className="resume-header">
              <h1 className="resume-name">Халимендик Николай Витальевич</h1>
              <p className="resume-title">web-разработчик</p>
              <div className="resume-personal-info">
                <div className="resume-location">
                  <svg
                    className="resume-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>г. Дубна, Московская обл.</span>
                </div>
                <div className="resume-age">
                  <svg
                    className="resume-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Возраст: 21 год</span>
                </div>
              </div>
            </header>

            <section className="resume-section">
              <h2 className="resume-section-title">Образование</h2>
              <div className="resume-education">
                <div className="resume-education-header">
                  <h3 className="resume-education-school">
                    Государственный университет "Дубна"
                  </h3>
                  <span className="resume-education-year">2021 - 2025</span>
                </div>
                <p className="resume-details">
                  ИСАУ, Прикладная информатика в управлении корпоративными
                  системами.
                </p>
              </div>
            </section>

            <section
              className="resume-section"
              style={{ marginBottom: '1rem' }}
            >
              <h2 className="resume-section-title">Навыки</h2>
              <div className="resume-skills">
                <div className="resume-course-header">
                  <h3 className="resume-course-name">Programmer skils:</h3>
                </div>
                {skill(skills[0])}
                <div className="resume-course-header">
                  <h3 className="resume-course-name">Frontend skils:</h3>
                </div>
                {skill(skills[1])}
                <div className="resume-course-header">
                  <h3 className="resume-course-name">Backend skils:</h3>
                </div>
                {skill(skills[2])}
              </div>
            </section>

            {/* <section
              className="resume-section"
              style={{ marginBottom: '1rem' }}
            >
              <h2 className="resume-section-title">Навыки</h2>
              <div className="resume-skills">
                <div className="resume-course-header">
                  <h3 className="resume-course-name">Programmer skils:</h3>
                </div>
                {skill(skills[0])}
                <div className="resume-course-header">
                  <h3 className="resume-course-name">Frontend skils:</h3>
                </div>
                {skill(skills[1])}
                <div className="resume-course-header">
                  <h3 className="resume-course-name">Backend skils:</h3>
                </div>
                {skill(skills[2])}
              </div>
            </section> */}

            <section className="resume-section">
              <h2 className="resume-section-title">
                Дополнительная информация
              </h2>
              <div className="resume-course">
                <div className="resume-course-header"></div>
                <p className="resume-details">
                  Летом 2025г. оканчиваю университет. Активно развиваюсь в
                  области веб-разработки, с фокусом на полный стек (frontend +
                  backend). Имею опыт работы с микросервисной архитектурой.
                  Интересуюсь созданием масштабируемых веб-приложений и решением
                  сложных технических задач. Участвовал в хакатоне
                  IT-ЦИФРА.ZONE, что помогло мне расширить практический опыт.
                  Быстро осваиваю новые технологии.
                </p>
              </div>
            </section>

            <section className="resume-section">
              <h2 className="resume-section-title">Достижения</h2>
              <div className="resume-education">
                <div className="resume-education-header">
                  <h3 className="resume-education-school">
                    <a
                      style={{ fontWeight: '500' }}
                      target="_blank"
                      href="https://disk.yandex.ru/i/3B5hABkS6LmFTw"
                    >
                      ХАКАТОН IT-ЦИФРА.ZONE
                    </a>
                  </h3>
                  <span className="resume-education-year">2024</span>
                </div>
                <p className="resume-details">ОЭЗ "Дубна", Хакатон</p>
              </div>
              <div className="resume-education">
                <div className="resume-education-header">
                  <h3 className="resume-education-school">
                    <a
                      style={{ fontWeight: '500' }}
                      target="_blank"
                      href="https://disk.yandex.ru/i/Dj3Yc1U5WNhfTg"
                    >
                      НАВИГАТОР ИННОВАТОРА
                    </a>
                  </h3>
                  <span className="resume-education-year">2022</span>
                </div>
                <p className="resume-details">Сколково, Предпринимательство</p>
              </div>
            </section>
          </div>

          {/* Right section */}
          <div className="resume-sidebar">
            <div className="resume-photo-container">
              <div className="resume-photo">
                <img
                  src="./Резюме.png"
                  alt="Фото профиля"
                  className="resume-photo-image"
                />
              </div>
            </div>

            <section className="resume-sidebar-section">
              <h2 className="resume-sidebar-title">Контакты</h2>
              <div className="resume-contacts">
                <div className="resume-contact-item">
                  <svg
                    className="resume-contact-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+7 916-208-45-15</span>
                </div>
                <div className="resume-contact-item">
                  <svg className="resume-contact-icon" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"
                    />
                  </svg>
                  <span>nik.kh.03@yandex.ru</span>
                </div>
                <div className="resume-contact-item">
                  <svg className="resume-contact-icon" viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5c8.563 0 15.5-6.938 15.5-15.5S24.562.5 16 .5m7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856l-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944l7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587l-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"
                    />
                  </svg>
                  <span>
                    <a target="_blank" href="https://t.me/kolya_kha">
                      @kolya_kha
                    </a>
                  </span>
                </div>
              </div>

              <div className="resume-desired-conditions">
                <h3 className="resume-desired-conditions-title">
                  Желаемые условия
                </h3>
                <p>
                  Готов к стажировке. После окончания университета планирую
                  начать работу на полную ставку.
                </p>
              </div>

              <h2 className="resume-sidebar-title">Социальные сети</h2>
              <div className="resume-contacts">
                <div className="resume-contact-item">
                  <svg className="resume-contact-icon" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    />
                  </svg>
                  <span>
                    <a target="_blank" href="https://github.com/NikKha03">
                      NikKha03
                    </a>
                  </span>
                </div>
              </div>
            </section>

            <section className="resume-sidebar-section">
              <h2 className="resume-sidebar-title">Языки</h2>
              <div className="resume-language">
                <div className="resume-language-header">
                  <span className="resume-language-name">Русский</span>
                  <span className="resume-language-level">Родной</span>
                </div>
                <div className="resume-language-bar-bg">
                  <div
                    className="resume-language-bar"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
              <div className="resume-language">
                <div className="resume-language-header">
                  <span className="resume-language-name">Английский</span>
                  <span className="resume-language-level">B1</span>
                </div>
                <div className="resume-language-bar-bg">
                  <div
                    className="resume-language-bar"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
