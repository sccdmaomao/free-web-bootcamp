import { styled } from '@mui/material'
import { ReactNode } from 'react'
import normalizeHrefTitle from 'utils/normalizeHrefTitle'

const SectionTitle = styled('h2')`
    :hover {
        cursor: pointer;
    }
`

const CourseSection: React.FC<{
    sectionTitle: string
    children: ReactNode
}> = ({ sectionTitle, children }) => {
    const normalizedSectionTitle = normalizeHrefTitle(sectionTitle)
    return (
        <section id={normalizedSectionTitle}>
            <SectionTitle>
                <a href={`#${normalizedSectionTitle}`}>{sectionTitle}</a>
            </SectionTitle>
            {children}
        </section>
    )
}

export default CourseSection
