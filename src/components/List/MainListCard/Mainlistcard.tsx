import { Avatar, Badge, Button, Grid, Text } from "@mantine/core"
import { useStyles } from "./Mainlistcard.style"
import { IconEdit, IconTrash } from "@tabler/icons-react"


export const Mainlistcard = () => {

    const { classes } = useStyles()

    return (
        <section>
            <Grid pl='sm' mb='sm'>
                <Grid.Col xs={3}>
                    <small>Nome</small>
                </Grid.Col>
                <Grid.Col xs={3}>
                    <Text>Status</Text>
                </Grid.Col><Grid.Col xs={2}>
                    <Text ta='center'>Publicado</Text>
                </Grid.Col>
                <Grid.Col xs={2}>
                    <Text ta='center'>Destaque</Text>
                </Grid.Col>
                <Grid.Col xs={2}>
                    <Text ta='center'>Ações</Text>
                </Grid.Col>
            </Grid>
            <div className={classes.tile}>
                <Grid align='center'>
                    <Grid.Col className={classes.maintile} xs={3}>
                        <Avatar radius='xl' src="https://s.glbimg.com/jo/g1/f/original/2015/10/12/casa_de_1936_arquiteto_caetano_defranco.jpg" alt="Casa" />
                        <Text fw={500}>Vila Madeiro</Text>
                    </Grid.Col>
                    <Grid.Col xs={3}>
                        <Badge color="green" size="md" radius="sm" variant="dot">Obras iniciadas</Badge>
                    </Grid.Col>
                    <Grid.Col ta='center' xs={2}>
                        <Text>Não</Text>
                    </Grid.Col>
                    <Grid.Col ta='center' xs={2}>
                        <Text>Sim</Text>
                    </Grid.Col>
                    <Grid.Col xs={2}>
                        <div className={classes.actions}>
                            <Button variant="outline" compact px="sm" size="sm"><IconEdit size='1.1rem' /></Button>
                            <Button color="red" compact px='sm' size="sm" variant="outline"><IconTrash size='1.1rem' /></Button>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </section>
    )
}
