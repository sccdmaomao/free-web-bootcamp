import { useTranslation } from 'react-i18next'
import i18n from 'utils/i18n'

import PlaygroundSection from './PlaygroundSection'

const PgI18n = () => {
    const { t } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    return (
        <PlaygroundSection sectionTitle="i18n">
            <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value={'en'}>English</option>
                <option value={'cn'}>Chinese</option>
            </select>
            <div>{t('PG-translated--test-string')}</div>
        </PlaygroundSection>
    )
}

export default PgI18n
