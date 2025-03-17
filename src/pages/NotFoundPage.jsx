import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 3000);
	}, [navigate]);

	return <h1>Page Not Found</h1>;
}
