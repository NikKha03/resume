import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import AchievementsComponent from './achievements.component';
import { EducationComponent } from './education.component';
import SidebarComponent from './sidebar.component';
import SkillsComponent from './skills.component';
import WorkExperienceComponent from './work-experience.component';

const calculateAge = () => {
	const today = new Date();
	const birthday = new Date('2003-11-06');
	let age = today.getFullYear() - birthday.getFullYear();
	const monthDiff = today.getMonth() - birthday.getMonth();
	// Корректировка, если день рождения в этом году еще не наступил
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
		age--;
	}
	return age;
}

const formattedAge = () => {
	const n = calculateAge();

	const lastTwo = n % 100;
	const last = n % 10;

	if (lastTwo >= 11 && lastTwo <= 14) {
		return `${n} лет`;
	}
	if (last === 1) {
		return `${n} год`;
	}
	if (last >= 2 && last <= 4) {
		return `${n} года`;
	}
	return `${n} лет`;
}

export default function App() {
	return (
		<div className='resume-container'>
			<div className='resume-wrapper'>
				<div className='resume-layout'>
					{/* Left section */}
					<div className='resume-main-content'>
						<header className='resume-header'>
							<h1 className='resume-name'>Халимендик Николай Витальевич</h1>
							<p className='resume-title'>web-разработчик</p>
							<div className='resume-personal-info'>
								<div className='resume-location'>
									<svg className='resume-icon' fill='currentColor' viewBox='0 0 20 20'>
										<path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
									</svg>
									<span>г. Дубна, Московская обл.</span>
								</div>
								<div className='resume-age'>
									<svg className='resume-icon' fill='currentColor' viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
											clipRule='evenodd'
										/>
									</svg>
									<span>{`Возраст: ${formattedAge()}`}</span>
								</div>
							</div>
						</header>

						<WorkExperienceComponent />
						<EducationComponent />
						<SkillsComponent />
						<AchievementsComponent />

						{/* <section className='resume-section'>
							<h2 className='resume-section-title'>Дополнительная информация</h2>
							<div className='resume-course'>
								<div className='block'></div>
								<p className='resume-details'>
									Летом 2025г. оканчиваю университет. Активно развиваюсь в области веб-разработки, с фокусом на полный стек (frontend + backend). Имею опыт работы с микросервисной
									архитектурой. Интересуюсь созданием масштабируемых веб-приложений и решением сложных технических задач. Участвовал в хакатоне IT-ЦИФРА.ZONE, что помогло мне
									расширить практический опыт. Быстро осваиваю новые технологии.
								</p>
							</div>
						</section> */}
					</div>
					<SidebarComponent />
				</div>
			</div>
		</div>
	);
}
