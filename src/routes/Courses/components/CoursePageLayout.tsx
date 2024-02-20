import { styled } from '@mui/material'
import { CenteredDiv } from 'components/ResponsiveComponents'
import { ReactNode } from 'react'

interface CoursePageLayoutProps {
    title: string
    children: ReactNode
}

const Title = styled('h1')`
    border-bottom: 1px solid white;
`

const CoursePageLayout: React.FC<CoursePageLayoutProps> = ({
    title,
    children,
}) => {
    return (
        <CenteredDiv flexDirection="column">
            <Title>{title}</Title>

            <div>{children}</div>
        </CenteredDiv>
    )
}

export default CoursePageLayout
