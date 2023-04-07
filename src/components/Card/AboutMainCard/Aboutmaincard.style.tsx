import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrap: {
        backgroundColor: theme.colors.dark[7],
        padding: theme.spacing.sm,
        borderRadius: '10px',
    },
    title: {
        margin: 0,
        fontWeight: 600,
        fontSize: theme.fontSizes.lg,
        marginBottom: '.5rem'
    },
    subtitle: {
        margin: 0,
        fontSize: theme.fontSizes.md,
        marginBottom: '.8rem'
    },
    banner: {
        width: '100%',
        height: '250px',
        borderRadius: '10px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    buttonlist: {
        display: 'flex',
        gap: '.3rem'
    }
}))