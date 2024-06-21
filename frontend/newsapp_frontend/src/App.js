
import { Routes,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
// import './index.css';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/articleDetails/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';
import Comments from './pages/admin/screens/comments/Comments';

import ManageNews from './pages/admin/screens/news/ManageNews';
import EditNews from './pages/admin/screens/news/EditNews';
import BlogPage from './pages/news/NewsPage';

function App() {
  return (
    <div className="App font-opensans">

      <Routes>
        <Route index path='/' element={<HomePage/>} /> 
        <Route path='/news/:slug' element={<ArticleDetailPage/>} /> 
        <Route path='/news' element={<BlogPage/>} /> 

        <Route path='/register' element={<RegisterPage/>} /> 
        <Route path='/login' element={<LoginPage/>} /> 
        <Route path='/profile' element={<ProfilePage/>} /> 
        <Route path='/admin' element={<AdminLayout/>} >
            <Route index element={<Admin/>}/>
            <Route path='comments' element={<Comments/>}/>
            <Route path='news/manage' element={<ManageNews/>}/>
            <Route path='news/manage/edit/:slug' element={<EditNews/>}/>



         </Route>

      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
