import './style.scss';
import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { Header, Sider } from '../../components';
import { APP_NAME } from '../../constants/env';

const View = React.memo((props) => {
	const { children } = props;

	const currentYear = useMemo(() => new Date().getFullYear(), []);

	return (
		<Layout className={'layout layout--base'}>
			<Layout.Sider className={'layout__sider'}>
				<Sider />
			</Layout.Sider>
			<Layout>
				<Layout.Header className={'layout__header'}>
					<Header />
				</Layout.Header>
				<Layout.Content className={'layout__content'}>
					{children}
				</Layout.Content>
				<Layout.Footer className={'layout__footer'}>
					{currentYear} &copy; {APP_NAME}
				</Layout.Footer>
			</Layout>
		</Layout>
	);
});

export { View };
