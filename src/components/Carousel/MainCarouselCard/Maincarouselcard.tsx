import { useStyles } from "./Maincarouselcard.styles"
import { useState } from 'react';
import { FileButton, Button, Notification, Text, Modal } from '@mantine/core';
import { IconCameraUp, IconEdit, IconTrash } from "@tabler/icons-react";
import { modals } from '@mantine/modals';

const Maincarouselcard = () => {

    const { classes } = useStyles()
    const [file, setFile] = useState<File | null>(null)

    const showSuccessNotification = () => {
        return <Notification title="Default notification">
            This is default notification with title and body
        </Notification>
    }

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: 'Excluir banner',
            centered: true,
            children: (
                <Text size="sm">
                    Tem certeza de que deseja excluir este banner?
                </Text>
            ),
            labels: { confirm: 'Excluir', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => showSuccessNotification(),
        });

    return (
        <div className={classes.wrap}>
            <div className={classes.banner} style={{ backgroundImage: `url(${file ? URL.createObjectURL(file) : 'https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg'})` }}></div>
            <p className={classes.title}>Soluções modernas para seu conforto</p>
            <p className={classes.subtitle}>Há mais de 40 anos no mercado</p>
            <div className={classes.buttonlist}>
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => <Button compact variant="outline" {...props}><IconCameraUp size="1rem" /></Button>}
                </FileButton>
                <Button onClick={openDeleteModal} compact color="red" variant="outline"><IconTrash size="1rem" /></Button>
                <Button compact color="green" variant="outline"><IconEdit size="1rem" /></Button>
            </div>

        </div>
    )
}

export default Maincarouselcard