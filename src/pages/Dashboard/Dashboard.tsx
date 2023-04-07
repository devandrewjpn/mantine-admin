import { Grid } from '@mantine/core'
import { Aboutmaincard } from '../../components/Card/AboutMainCard/Aboutmaincard'
import Maincarouselcard from '../../components/Carousel/MainCarouselCard/Maincarouselcard'
import MainTitle from '../../components/Texts/MainTitle'
import { useStyles } from './Dashbaord.styles'

const Dashboard = () => {

    const { classes } = useStyles()

    return (
        <section className={classes.wrap}>
            <MainTitle text='Carousel' />
            <Grid>
                <Grid.Col xs={4}>
                    <Maincarouselcard />
                </Grid.Col>
                <Grid.Col xs={4}>
                    <Maincarouselcard />
                </Grid.Col>
                <Grid.Col xs={4}>
                    <Maincarouselcard />
                </Grid.Col>
            </Grid>
            <MainTitle text='Sobre' />
            <Aboutmaincard />
        </section>
    )
}

export default Dashboard