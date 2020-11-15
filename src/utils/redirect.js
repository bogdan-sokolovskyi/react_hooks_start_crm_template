import { useHistory } from 'react-router-dom';

export const redirect = (link, replace = false) => {
	const history = useHistory();
	if (replace) {
		history.replace(link);
	}
	history.push(link);
};
