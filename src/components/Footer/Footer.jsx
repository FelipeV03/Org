import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
                <div className='redes'>
                    <a href='https://www.facebook.com/profile.php?id=100016172927715' target='_blank'>
                        <img src="/img/facebook.png" alt='Facebook' />
                    </a>
                    <a href='https://www.instagram.com/felipe._.v05/' target="_blank">
                        <img src="/img/instagram.png" alt='instagram' />
                    </a>
                    <a href='https://www.linkedin.com/in/dev-felipe-vargas/' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 11l0 5"></path>
                            <path d="M8 8l0 .01"></path>
                            <path d="M12 16l0 -5"></path>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>

                    </a>
                </div>
                <img src='/img/logo.png' alt='org' />
                <strong>Desarrollado por Felipe El Dev</strong>
            </footer>
        </div>
    );
}

export default Footer;
