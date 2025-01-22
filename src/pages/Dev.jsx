import "../static/style/Dev.css"

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import DevHeader from "../components/DevHeader.module.jsx";

 const Dev = () => {
    const { t } = useTranslation();

    return (
        <div className="devContainer">
            {/*<LanguageSwitcher/>*/}
            <DevHeader />
aaa
        </div>
    );
};

export default Dev;