import { useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import './App.css'

function App() {
  // navigate(?)
  const navigate = useNavigate();

  const location = useLocation();


  return (
    <>
      <div>
      <Link to="/main">Main</Link>
      <Link to="/mypage">MyPage</Link>
      <Link to="/test">Test</Link>

      <div>
      <button onClick={() => navigate('/main')}>Main</button>
      <button onClick={() => navigate('/mypage')}>MyPage</button>
      <button onClick={() => navigate('/test')}>Test</button>
      </div>
        <button onClick={() => navigate(-2)}>{`<-Go`}</button>
        <button onClick={() => navigate(+2)}>{`Back->`}</button>

      </div>
      <Routes>
        <Route path="/main" element={<Main />}/>
        <Route path="/mypage"element={<div>My Page</div>}/>
        <Route path="/test" element={<div>Test Page</div>}/>
      </Routes>
    </>
  )
}

function Main(){
  const params = useParams()
  console.log(params.name)
  const location = useLocation();
  console.log(location.search);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('name'));
  console.log(searchParams.get('school'));

  return <div>Main Page</div>;
}

export default App
