import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import MentorLogo from '../../../assets/images/mentor-logo.svg';

const View = React.memo(() => {
	return (
		<NavLink
			to={routes['dashboard'].link()}
			className={'logo'}
			activeClassName={'is-active'}
			exact={true}
		>
			<img className={'logo__img'} src={MentorLogo} alt={'Mentor'} />
		</NavLink>
	);
});

export { View };
