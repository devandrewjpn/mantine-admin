import { keyframes } from "@mantine/core";

const animLeft = keyframes({
    'to': {
        opacity: 1,
        transform: 'initial'
    }
});

export const globalstyles: any = {
    '*': {
        userSelect: 'none',
    },
    animLeft: {
        opacity: 0,
        transform: 'translateY(-20px)',
        animation: `${animLeft} .6s forwards`
    }
}