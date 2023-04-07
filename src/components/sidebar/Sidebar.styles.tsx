import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    logo: {
        fontSize: theme.fontSizes.lg,
        textTransform: 'uppercase',
        fontWeight: 700
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        textDecoration: 'none',
        'li': {
            borderRadius: theme.radius.sm,
            cursor: 'pointer',
            ':hover': {
                backgroundColor: theme.colors.dark[8]
            }
        },
        'a.active': {
            backgroundColor: theme.colors.dark[8],
            borderRadius: theme.radius.sm,
        },
        'a': {
            display: 'flex',
            alignItems: 'center',
            gap: '.3rem',
            padding: theme.spacing.sm,
            textDecoration: 'none',
            color: theme.colors.gray[2],
        }
    }
}))
