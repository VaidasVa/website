import StartPage from './pages/StartPage.jsx'
import {Route, Routes} from "react-router-dom";
import Photos from "./pages/Photos.jsx";
import Dev from "./pages/Dev.jsx";
import React, {StrictMode} from "react";
import {Snackbar} from "@mui/material";

function App() {

    const [open, setOpen] = React.useState(true);

    setTimeout(() => setOpen(false), 3000);

    React.useEffect(() => {
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='http://192.168.50.50:8597/js/container_Usmyigjc.js'; s.parentNode.insertBefore(g,s);
    }, [])

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
