import { Paper, styled, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CenteredDiv } from 'components/ResponsiveComponents'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const ProjectGrid = () => {
    const projects = [
        {
            id: '1',
            projectName: 'Lotto-649-Generator',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/lotto-649-generator-thumbnail.png',
            projectDescription: 'simple random number generator',
            skills: ['html', 'css'],
        },
        {
            id: '2',
            projectName: 'National Park Advisor',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/national-park-advisor-thumbnail.png',
            projectDescription: 'Access public API and data fetching',
            skills: ['html', 'css', 'REST-ful API'],
        },
        {
            id: '3',
            projectName: 'Portfolio Website',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/sara-portfolio-thumbnail.png',
            projectDescription: 'Personal introduction portfolio website',
            skills: ['html', 'css'],
        },
        {
            id: '4',
            projectName: 'Storybook Demo',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/storybook-thumbnail.png',
            projectDescription: 'Storybook',
            skills: ['storybook', 'react components'],
        },
        {
            id: '5',
            projectName: 'Tic-tac-toe Web game',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/tic-tac-toe-thumbnail.png',
            projectDescription: 'A simple tic-tac-toe game',
            skills: ['javascript', 'simple AI'],
        },
        {
            id: '6',
            projectName: 'Lotto-649-Generator',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/tips-calculator-thumbnail.png',
            projectDescription: 'A simple interactive web program',
            skills: ['html', 'css', 'javascript'],
        },
        {
            id: '7',
            projectName: 'Trello Mock',
            thumbnailUrl:
                'https://guohao-public-assets.s3.ca-central-1.amazonaws.com/thumbnails/trello-clone-thumbnail.png',
            projectDescription: 'A mock of famous trello board web application',
            skills: [
                'html',
                'css',
                'user interactions',
                'responsive design',
                'api',
                'full-size application',
            ],
        },
    ]
    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {projects.map((project, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <Item>
                        {project.projectName}
                        <img
                            src={project.thumbnailUrl}
                            alt={project.projectDescription}
                            style={{ width: '100%' }}
                        ></img>
                    </Item>
                </Grid>
            ))}
        </Grid>
    )
}

const ProjectPage = () => {
    return (
        <CenteredDiv flexDirection="column">
            <Typography>
                Practice projects to take on for best learning experience! Show
                case your learning and improve your skills
            </Typography>
            <ProjectGrid />
        </CenteredDiv>
    )
}

export default ProjectPage
