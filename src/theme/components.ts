import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const componentsOverride: MantineThemeComponents = {
    Button: {
        styles: (theme) => ({
            root: {

            },
        })
    },
    Navbar: {
        styles: (theme) => ({
            root: {
                border: 'unset',
            }
        })
    }
}