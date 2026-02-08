const skills = [
	['Git', 'Docker', 'Nginx', 'Linux'],
	['JavaScript', 'TypeScript', 'Angular', 'React', 'HTML', 'CSS', 'Figma'],
	['Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Keycloak', 'REST API', 'Микросервисы'],
];

const skill = arr => {
	return (
		<div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
			{arr.map((skill, i) => (
				<p
					className='resume-details'
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

export default function SkillsComponent() {
	return (
		<section className='resume-section'>
			<h2 className='resume-section-title'>Навыки</h2>
			<div className='resume-skills'>
				<div className='block'>
					<h3 className='block-name'>Общие:</h3>
				</div>
				{skill(skills[0])}
				<div className='block'>
					<h3 className='block-name'>Frontend:</h3>
				</div>
				{skill(skills[1])}
				<div className='block'>
					<h3 className='block-name'>Backend:</h3>
				</div>
				{skill(skills[2])}
			</div>
		</section>
	);
}
