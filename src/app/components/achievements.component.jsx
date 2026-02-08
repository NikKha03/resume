import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function AchievementsComponent() {
	const [show, setShow] = useState(false);
	const [id, setId] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = id => {
		setId(id);
		setShow(true);
	};

	const headerStyle = { fontWeight: '500', cursor: 'pointer', color: '#0d6efd', textDecoration: 'underline' };

	return (
		<>
			<section className='resume-section'>
				<h2 className='resume-section-title'>Достижения</h2>
				<div>
					<div className='resume-education-header'>
						<h3 onClick={() => handleShow(1)} style={headerStyle} className='block-name'>
							ХАКАТОН IT-ЦИФРА.ZONE
						</h3>
						<span className='resume-education-year'>2024</span>
					</div>
					<p className='resume-details'>ОЭЗ "Дубна", Хакатон</p>
				</div>
				<div>
					<div className='resume-education-header'>
						<h3 onClick={() => handleShow(2)} style={headerStyle} className='block-name'>
							НАВИГАТОР ИННОВАТОРА
						</h3>
						<span className='resume-education-year'>2022</span>
					</div>
					<p className='resume-details'>Сколково, Предпринимательство</p>
				</div>
			</section>

			<Modal size='xl' show={show} onHide={handleClose} centered>
				<Modal.Header closeButton style={{ padding: '0.75rem 1rem' }}>
					{id === 1 && <Modal.Title>ХАКАТОН IT-ЦИФРА.ZONE</Modal.Title>}
					{id === 2 && <Modal.Title>НАВИГАТОР ИННОВАТОРА</Modal.Title>}
				</Modal.Header>

				<Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
					{id === 1 && <img className='scan' src='/hackaton.png' alt='ХАКАТОН IT-ЦИФРА.ZONE' />}
					{id === 2 && <img className='scan' src='/sk.png' alt='НАВИГАТОР ИННОВАТОРА' />}
				</Modal.Body>
			</Modal>
		</>
	);
}
