import { styled, Typography } from '@mui/material'

const TitleWrapper = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: props.theme.palette.secondary.main,
    fontWeight: 'bold',
    height: '100vh',
}))

const MainPage = () => {
    return (
        <TitleWrapper>
            <Typography variant="h3">
                Professional Web Development Online Training
            </Typography>
            <Typography variant="h4">
                <div>Free materials.</div>
                <div>Real life projects.</div>
                <div>Industrial knowledge sharing.</div>
            </Typography>
        </TitleWrapper>
    )
}

export default MainPage
