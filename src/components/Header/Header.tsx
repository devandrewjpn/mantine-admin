import { ActionIcon, Avatar, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars, IconUserCircle, IconBrandMessenger, IconLogout } from '@tabler/icons-react';
import { Header, Menu } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { useStyles } from './Header.styles'

export const CustomHeader = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const { classes } = useStyles()

    return (
        <Header className={classes.header} height={60}>
            <ActionIcon
                variant="transparent"
                color={dark ? 'white' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
            <Menu shadow="md" width={200} position='bottom-end'>
                <Menu.Target>
                    <Avatar style={{ cursor: 'pointer' }} radius='xl' src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="The Rock" />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Usuário</Menu.Label>
                    <Menu.Item icon={<IconUserCircle size={14} />}>Meu perfil</Menu.Item>
                    <Menu.Item icon={<IconSettings size={14} />}>Configurações</Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Conta</Menu.Label>
                    <Menu.Item icon={<IconBrandMessenger size={14} />}>Suporte</Menu.Item>
                    <Menu.Item color="red" icon={<IconLogout size={14} />}>Sair</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Header>
    )
}
