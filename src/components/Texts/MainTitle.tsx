import React from 'react'
import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    mainTitle: {
        color: theme.colors.gray[6],
        fontWeight: 600,
        fontSize: theme.fontSizes.lg
    }
}))


const MainTitle = ({ text }: { text: String }) => {

    const { classes } = useStyles()

    return (
        <p className={classes.mainTitle}>{text}</p>
    )
}

export default MainTitle