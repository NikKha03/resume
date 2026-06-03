'use client';

import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function AchievementsComponent() {
    const headerStyle = { fontWeight: '500', cursor: 'pointer', color: '#0d6efd', textDecoration: 'underline' };

    const [show, setShow] = useState(false);
    const [id, setId] = useState<number | null>(null);

    const handleClose = () => setShow(false);
    const handleShow = (id: number) => {
        setId(id);
        setShow(true);
    };

    const achievements = [
        { id: 3, title: 'АЛЬФА ЦТФ', description: 'Альфа-Банк, Спортивный хакинг', year: '2026', imgSrc: '/alfactf.png' },
        { id: 2, title: 'ХАКАТОН IT-ЦИФРА.ZONE', description: 'ОЭЗ "Дубна", Хакатон', year: '2024', imgSrc: '/hackaton.png' },
        { id: 1, title: 'НАВИГАТОР ИННОВАТОРА', description: 'Сколково, Предпринимательство', year: '2022', imgSrc: '/sk.png' },
    ];
    const showedAchievement = achievements.find((achievement) => achievement.id === id);

    return (
        <>
            <section className="resume-section">
                <h2 className="resume-section-title">Достижения</h2>
                {achievements.map(({ id, title, description, year }) => (
                    <div key={id}>
                        <div className="resume-achievement-header">
                            <h3 onClick={() => handleShow(id)} style={headerStyle} className="block-name">
                                {title}
                            </h3>
                            <span className="resume-year">{year}</span>
                        </div>
                        <p className="resume-details">{description}</p>
                    </div>
                ))}
            </section>

            <Modal size="xl" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ padding: '0.75rem 1rem' }}>
                    <Modal.Title>{showedAchievement?.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
                    <img className="scan" src={showedAchievement?.imgSrc} alt={showedAchievement?.title} />
                </Modal.Body>
            </Modal>
        </>
    );
}
