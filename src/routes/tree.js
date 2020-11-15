import {
	PageDashboard,
	PageCRM,
	PageStore,
	PageReports,
	PageFinance,
	PageDirectory,
	PageUIElements,
} from '../pages';

const routes = {
	dashboard: {
		path: '/',
		page: PageDashboard,
		name: 'Dashboard',
		link() {
			return this.path;
		},
		exact: true,
	},
	crm: {
		path: '/crm',
		page: PageCRM,
		name: 'CRM',
		link() {
			return this.path;
		},
		exact: true,
	},
	store: {
		path: '/store',
		page: PageStore,
		name: 'Store',
		link() {
			return this.path;
		},
		exact: true,
	},
	reports: {
		path: '/reports',
		page: PageReports,
		name: 'Reports',
		link() {
			return this.path;
		},
		exact: true,
	},
	finance: {
		path: '/finance',
		page: PageFinance,
		name: 'Finance',
		link() {
			return this.path;
		},
		exact: true,
	},
	directory: {
		path: '/directory',
		page: PageDirectory,
		name: 'Directory',
		link() {
			return this.path;
		},
		exact: true,
	},

	ui_elements: {
		path: '/ui_elements',
		page: PageUIElements,
		name: 'UI Elements',
		link() {
			return this.path;
		},
		exact: true,
	},
};

const __ROOT_ROUTE__ = routes.dashboard.link();

export { routes, __ROOT_ROUTE__ };
