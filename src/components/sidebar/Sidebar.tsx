import { Navbar } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './Sidebar.styles'
import { IconAppsFilled, IconBuildingSkyscraper } from '@tabler/icons-react';

export const Sidebar = () => {

    const { classes } = useStyles()

    return (
        <Navbar height='100%' p="xs" width={{ base: 300 }}>
            <Navbar.Section className={classes.logo}>logo</Navbar.Section>
            <Navbar.Section grow mt="md">
                <ul className={classes.list}>
                    <li><NavLink to={'/'}><IconAppsFilled size="1rem" /> Dashboard</NavLink></li>
                    <li><NavLink to={'/teste'}><IconBuildingSkyscraper size="1rem" /> Edifícios</NavLink></li>
                </ul>
            </Navbar.Section>
            <Navbar.Section>footer</Navbar.Section>
        </Navbar>
    )
}