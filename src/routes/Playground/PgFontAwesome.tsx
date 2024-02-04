import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PlaygroundSection from './PlaygroundSection'

const PgFontAwesome = () => {
    return (
        <PlaygroundSection sectionTitle="Font Awesome">
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faEnvelope} />
        </PlaygroundSection>
    )
}

export default PgFontAwesome
