import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "./Blog";
import ErrorPage from "./Error";
import Home from "./Home";
import Topics from "./Topics";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Topics></Topics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/topics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Topics></Topics>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])