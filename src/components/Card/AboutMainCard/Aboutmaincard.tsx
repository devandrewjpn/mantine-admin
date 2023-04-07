import { IconCameraUp, IconEdit, IconTrash } from "@tabler/icons-react";
import { useStyles } from "./Aboutmaincard.style"
import { Grid, FileButton, Button } from '@mantine/core';
import { useState } from "react";

export const Aboutmaincard = () => {

    const { classes } = useStyles()
    const [file, setFile] = useState<File | null>(null)

    return (
        <div className={classes.wrap}>
            <Grid>
                <Grid.Col xs={4}>
                    <div className={classes.banner} style={{ backgroundImage: `url(${file ? URL.createObjectURL(file) : 'https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg'})` }}></div>
                </Grid.Col>
                <Grid.Col xs={8}>
                    <p className={classes.title}>Sit dignissim ut est commodo facilisis cursus nibh in vel.</p>
                    <p className={classes.subtitle}>A Becker Construções, com 35 anos de experiência em obras residenciais, comerciais e de infraestrutura, tem se destacado entre as construtoras incorporadoras de Belo Horizonte, pela confiabilidade, profissionalismo e pela prática moderna de construção e gestão, ofertando ao mercado empreendimentos com tecnologia e qualidade sempre atualizados.</p>
                    <div className={classes.buttonlist}>
                        <FileButton onChange={setFile} accept="image/png,image/jpeg">
                            {(props) => <Button compact variant="outline" {...props}><IconCameraUp size="1rem" /></Button>}
                        </FileButton>
                        <Button compact color="red" variant="outline"><IconTrash size="1rem" /></Button>
                        <Button compact color="green" variant="outline"><IconEdit size="1rem" /></Button>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    )
}
