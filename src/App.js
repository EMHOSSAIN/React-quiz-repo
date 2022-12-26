import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import NotFoundData from './Components/NotFoumfData/NotFoundData';
import Quiz from './Components/Quiz/Quiz';
import Statick from './Components/Statick/Statick';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path:'/statick',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
         
          element: <Statick></Statick>,
        },
        {
          path:'/blog',
          element: <Blog></Blog>,
        },
        {
          path:'/quiz/:quizId',
         loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
         element:<Quiz></Quiz>
        },
       
      ]
    },
    {
      path:'*',
      element:<NotFoundData> </NotFoundData>
    }
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
