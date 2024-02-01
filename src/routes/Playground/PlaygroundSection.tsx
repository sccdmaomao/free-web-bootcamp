import { FC } from 'react'

const PlaygroundSection: FC<{
    sectionTitle: string
    children: React.ReactNode
}> = ({ sectionTitle, children }) => {
    return (
        <section>
            <h3>{sectionTitle}</h3>
            {children}
        </section>
    )
}

export default PlaygroundSection
