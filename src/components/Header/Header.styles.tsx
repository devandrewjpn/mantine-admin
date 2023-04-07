import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    header: {
        margin: '1rem',
        borderRadius: '10px',
        border: 'none',
        padding: theme.spacing.xs,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '1rem'
    }
}))
