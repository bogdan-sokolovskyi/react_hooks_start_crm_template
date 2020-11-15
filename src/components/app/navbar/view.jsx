import './style.scss';
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';

const View = () => {
	const navbarRoutes = useMemo(
		() => [
			{ name: 'Дашбоард', key: 'dashboard' },
			{ name: 'CRM', key: 'crm' },
			{ name: 'Склад', key: 'store' },
			{ name: 'Отчёты', key: 'reports' },
			{ name: 'Бюджетирование и финансы', key: 'finance' },
			{ name: 'Справочник', key: 'directory' },
			{ name: 'UI Elements', key: 'ui_elements' },
		],
		[]
	);

	return (
		<div className={'navbar'}>
			<ul className={'navbar__list'}>
				{navbarRoutes.map((route) => (
					<li key={route.key} className={'navbar__item'}>
						<NavLink
							to={routes[route.key].link()}
							className={'navbar__link'}
						>
							<span>{route.name}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export { View };
