/* Right section */
export default function SidebarComponent() {
	return (
		<div className='resume-sidebar'>
			<div className='resume-photo-container'>
				<div className='resume-photo'>
					<img src='/Резюме.png' alt='Фото профиля' className='resume-photo-image' />
				</div>
			</div>

			<section className='resume-sidebar-section'>
				<h2 className='resume-sidebar-title'>Контакты</h2>
				<div className='resume-contacts'>
					{/* <div className='resume-contact-item'>
						<svg className='resume-contact-icon' fill='currentColor' viewBox='0 0 20 20'>
							<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
						</svg>
					</div> */}
					<div className='resume-contact-item'>
						<svg className='resume-contact-icon' viewBox='0 0 20 20'>
							<path
								fill='currentColor'
								d='M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z'
							/>
						</svg>
						<span>nik.kh.03@yandex.ru</span>
					</div>
					<div className='resume-contact-item'>
						<svg className='resume-contact-icon' viewBox='0 0 32 32'>
							<path
								fill='currentColor'
								d='M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5c8.563 0 15.5-6.938 15.5-15.5S24.562.5 16 .5m7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856l-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944l7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587l-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z'
							/>
						</svg>
						<span>
							<a target='_blank' href='https://t.me/kolya_kha'>
								@kolya_kha
							</a>
						</span>
					</div>
				</div>

				{/* <div className='resume-desired-conditions'>
								<h3 className='resume-desired-conditions-title'>Желаемые условия</h3>
								<p>Готов к стажировке. После окончания университета планирую начать работу на полную ставку.</p>
							</div> */}

				<h2 className='resume-sidebar-title'>Мои проекты</h2>
				<div className='resume-contacts'>
					<div className='resume-contact-item'>
						<svg className='resume-contact-icon' viewBox='0 0 16 16'>
							<path
								fill='currentColor'
								d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8'
							/>
						</svg>
						<span>
							<a target='_blank' href='https://github.com/NikKha03'>
								NikKha03
							</a>
						</span>
					</div>
				</div>

				<h2 className='resume-sidebar-title'>Языки</h2>
				<div className='resume-language'>
					<div className='resume-language-header'>
						<span className='resume-language-name'>Русский</span>
						<span className='resume-language-level'>Родной</span>
					</div>
					<div className='resume-language-bar-bg'>
						<div className='resume-language-bar' style={{ width: '100%' }}></div>
					</div>
				</div>
				<div className='resume-language'>
					<div className='resume-language-header'>
						<span className='resume-language-name'>Английский</span>
						<span className='resume-language-level'>B1</span>
					</div>
					<div className='resume-language-bar-bg'>
						<div className='resume-language-bar' style={{ width: '50%' }}></div>
					</div>
				</div>
			</section>
		</div>
	);
}
