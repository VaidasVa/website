import StartPage from './pages/StartPage.jsx'
import {Route, Routes} from "react-router-dom";
import Photos from "./pages/Photos.jsx";
import Dev from "./pages/Dev.jsx";
import Test from "./pages/Test.jsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<StartPage/>} />
                <Route path="/photos" element={<Photos/>} />
                <Route path="/dev" element={<Dev/>} />
                <Route path="/test" element={<Test/>} />
                <Route path="*" element={<StartPage/>} />
            </Routes>
    )
}

export default App
