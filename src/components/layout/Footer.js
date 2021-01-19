import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer center'>
			<h6>
				Made with &hearts; by{'SURAJ ABUBAKAR'}
				<a
					className='grey-text text-lighten-4'
					href='https://www.instagram.com/real_dulah_born?r=nametag'
					target='_blank'
					rel='noopener noreferrer'
				>
			      SURAJ ABUBAKAR
				</a>
			</h6>

			<div className='footer-copyright'>
				<div className='container'>
					© 2019 Elemental
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/Sadiqabubakar526/Periodic-Elements'
						target='_blank'
						rel='noopener noreferrer'
					>
						Git Repo
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
