import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    tile: {
        backgroundColor: theme.colors.dark[7],
        padding: theme.spacing.sm,
        borderRadius: theme.radius.lg,
        marginBottom: theme.spacing.xs,
        ':hover': {
            backgroundColor: theme.colors.dark[5]
        }
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '.3rem',
        justifyContent: 'center'
    },
    maintile: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
    }
}))