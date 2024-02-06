import { CSSProperties, FC } from 'react'

const PlaygroundSection: FC<{
    sectionTitle: string
    showBorder?: boolean
    children: React.ReactNode
}> = ({ sectionTitle, children, showBorder }) => {
    const borderStyle: CSSProperties = {
        border: '1px white solid',
        padding: '5px',
        borderRadius: '5px',
    }
    return (
        <section style={showBorder ? borderStyle : undefined}>
            {/* todo: add smooth scroll */}
            <h3>{sectionTitle}</h3>
            {children}
        </section>
    )
}

export default PlaygroundSection
