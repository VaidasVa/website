import StartPage from './pages/StartPage.jsx'
import {Route, Routes} from "react-router-dom";
import Photos from "./pages/Photos.jsx";
import Dev from "./pages/Dev.jsx";
import React, {StrictMode} from "react";
import {Snackbar} from "@mui/material";

function App() {

    const [open, setOpen] = React.useState(true);

    setTimeout(() => setOpen(false), 3000);

    return (
        <StrictMode>
            <Routes>
                <Route path="/" element={<StartPage/>} />
                <Route path="/photos" element={<Photos/>} />
                <Route path="/dev" element={<Dev/>} />
                <Route path="*" element={<StartPage/>} />
            </Routes>
            <Snackbar
                open={open}
                message="This website is in active development."
            />
        </StrictMode>
    )
}

export default App
