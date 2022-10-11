import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "./Blog";
import CorrectAnswer from "./CorrectAnswer";
import ErrorPage from "./Error";
import Home from "./Home";
import Topic from "./Topic";
import TopicDetails from "./TopicDetails";
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
                path: '/topic/:topicId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
                },
                element: <TopicDetails></TopicDetails>
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