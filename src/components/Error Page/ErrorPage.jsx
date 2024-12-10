import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate  = useNavigate();

    const handleError = () => {
        navigate('/');
    }
    const error = useRouteError();
    return (
        <div className="text-center mt-32">
            <h1 className="text-3xl font-bold ">Oops!</h1>
            <p className="font-semibold my-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg font-semibold">
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleError} className="btn btn-primary text-base font-semibold mt-4">Go to Home</button>
        </div>
    );
};

export default ErrorPage;