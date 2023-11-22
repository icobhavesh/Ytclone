import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import Header from './component/Header.jsx'
// import Home from './component/Home.jsx'
// import Parents from './component/NestedRouting/Parents.jsx'
// import { BrowserRouter } from 'react-router-dom'
// // import Home from './component/NestedRouting/Axios.jsx'
// import YouTubeSearch from './component/YoutubeClone.jsx'
// import CategoriesFilter from './component/Category.jsx'
import Header from "./YouTubeclone/Header.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <YouTubeSearch/>  */}
    {/* <CategoriesFilter/>
    */}
     {/* <Parents/> */}
    <Header/>
    {/* <BrowserRouter>
    // <Header/>
    // <Home/>


    </BrowserRouter>  */}
     {/* <App /> */}
    </React.StrictMode>,
)
export const  server="https://api.coingecko.com/api/v3"