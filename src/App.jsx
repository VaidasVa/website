import StartPage from './pages/StartPage.jsx'
import Notification from "./components/Notification.jsx";
import {Route, Routes} from "react-router-dom";
import Photos from "./pages/Photos.jsx";
import Dev from "./pages/Dev.jsx";
import {StrictMode} from "react";

function App() {

    return (
        <StrictMode>
            <Routes>
                <Route path="/" element={<StartPage/>}></Route>
                <Route path="/photos" element={<Photos/>}></Route>
                <Route path="/dev" element={<Dev/>}></Route>
                <Route path="*" element={<StartPage/>} />
            </Routes>
            {/*<Notification/>*/}
        </StrictMode>
    )
}

export default App
