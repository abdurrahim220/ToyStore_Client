import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    const error = useRouteError()
    useTitle('404')
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
            <div className="flex flex-grow">
                <img
                    src={'https://i.ibb.co/hYK1Yzh/404.png'}
                    alt="404 Error"
                    className="object-cover object-center h-full w-full"
                />
            </div>
            <div className="mt-4">
                <p className="text-lg">The page you're looking for does not exist.</p>
                <Link
                    to="/"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;