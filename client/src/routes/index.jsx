import App from '../App';
import DetailProduct from '../pages/DetailProduct';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import Admin from '../pages/DashbroadComponents/index';
import InfoUser from '../pages/InfoUser';
import ForgotPassword from '../pages/ForgotPassword';
import NoiQuy from '../pages/NoiQuy';
export const routes = [
    {
        path: '/',
        component: <App />,
    },
    {
        path: '/product/:id',
        component: <DetailProduct />,
    },
    {
        path: '/login',
        component: <Login />,
    },
    {
        path: '/register',
        component: <RegisterUser />,
    },
    {
        path: '/admin',
        component: <Admin />,
    },
    {
        path: '/infoUser',
        component: <InfoUser />,
    },
    {
        path: '/forgot-password',
        component: <ForgotPassword />,
    },

    
    {
        path: '/noi-quy',
        component: <NoiQuy />,
    },
];
