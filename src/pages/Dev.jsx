import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";

 const Dev = () => {
    const { t } = useTranslation();

    return (
        <>
            <LanguageSwitcher/>
            Dev page
            <h1>{t("welcome")}</h1>
            <p>{t('intro')}</p>
        </>
    );
};

export default Dev;