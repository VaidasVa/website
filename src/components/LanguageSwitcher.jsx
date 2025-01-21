import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('nl')}>NL</button>
            <button onClick={() => changeLanguage('lt')}>LT</button>
        </div>
    );
};

export default LanguageSwitcher;