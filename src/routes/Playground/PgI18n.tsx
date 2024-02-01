import { useTranslation } from 'react-i18next'

import PlaygroundSection from './PlaygroundSection'

const PgI18n = () => {
    const { t } = useTranslation()
    return (
        <PlaygroundSection sectionTitle="i18n">
            <div>{t('PG-translated--test-string')}</div>
        </PlaygroundSection>
    )
}

export default PgI18n
