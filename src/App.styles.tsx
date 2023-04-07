import { createStyles, keyframes } from '@mantine/core'

const animLeft = keyframes({
    'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
    '40%, 43%': { transform: 'translate3d(0, -1.875rem, 0)' },
    '70%': { transform: 'translate3d(0, -0.9375rem, 0)' },
    '90%': { transform: 'translate3d(0, -0.25rem, 0)' },
});

export const useStyles = createStyles((theme) => ({
    btn: {
        fontSize: theme.fontSizes.md,
        transition: 'all .5s',
        ':hover': {
            backgroundColor: theme.colors.red[9]
        },
        '::after': {
            content: "'astaton'",
            width: theme.spacing.sm,
            height: theme.spacing.sm,
            display: 'block'
        }
    },
    header: {
        margin: '1rem',
        borderRadius: '10px',
        border: 'none',
        padding: theme.spacing.xs,
        boxShadow: '0 0 0.375rem 0.25rem rgba(0,0,0,.15)'
    },
    animLeft: {
        opacity: 0,
        transform: 'translateY(-20px)',
        animation: `${animLeft} .6s forwards`
    }

}))
