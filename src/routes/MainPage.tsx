import { styled, Typography } from '@mui/material'

const TitleWrapper = styled('div')((props) => ({
    textAlign: 'center',
    color: props.theme.palette.secondary.main,
    fontWeight: 'bold',
}))

const MainPage = () => {
    return (
        <TitleWrapper>
            <Typography variant="h1">
                Professional Web Development Online Training
            </Typography>
        </TitleWrapper>
    )
}

export default MainPage
