import './style.scss';
import React from 'react';
import { Col, Row } from 'antd';
import { Logo } from '../logo';
import { NavBar } from '../navbar';

const View = () => {
	return (
		<div className={'sider'}>
			<Row justify="center">
				<Col>
					<Logo />
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<NavBar />
				</Col>
			</Row>
		</div>
	);
};

export { View };
