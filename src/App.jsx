import { useState } from 'react';
import './App.css';

const skills = [
  ['Git', 'Docker', 'Linux'],
  ['JavaScript', 'React', 'HTML', 'CSS'],
  ['Java', 'Spring', 'PostgreSQL', 'Keycloak', 'REST API', 'Микросервисы'],
];

const skill = (arr, mb = null) => {
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
            marginBottom: mb,
          }}
        >
          {skill}
        </p>
      ))}
    </div>
  );
};

function App() {
  const [language, setLanguage] = useState('ru');

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
                <p className="resume-details">ИСАУ, Прикладная иформатика</p>
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
                  сложных технических задач. Учавствовал в хакатоне
                  IT-ЦИФРА.ZONE, что помогло мне расширить практический опыт.
                  Быстро осваиваю новые технологии.
                </p>
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
                  <svg
                    className="resume-contact-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-8.486 8.486 6 6 0 008.486-8.486zm-1.414 1.414a4 4 0 11-5.657 5.657 4 4 0 015.657-5.657z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>nik.kh.03@yandex.ru</span>
                </div>
                <div className="resume-contact-item">
                  <svg
                    className="resume-contact-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <a href="https://t.me/kolya_kha">@kolya_kha</a>
                  </span>
                </div>
              </div>

              <div className="resume-desired-conditions">
                <h3 className="resume-desired-conditions-title">
                  Желаемые условия
                </h3>
                <p>
                  Готов к стажировке. После университета планирую начать работу
                  на полную ставку.
                </p>
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

export default App;
