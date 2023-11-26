import React, { useEffect, useState } from "react";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Edit, Delete } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const clients = [
    {
        id: 1,
        nome: 'teste1',
        telefone: '999254444'
    },
    {
        id: 2,
        nome: 'teste1',
        telefone: '999254444'
    },
    {
        id: 3,
        nome: 'teste1',
        telefone: '999254444'
    }
]

export function CardList({ listDTO, useAction = false }) {
    const [expanded, setExpanded] = useState(0);

    const handleExpandClick = (index) => {
        setExpanded(!expanded);
    };

    return <>

        {/*RETIRAR CLIENTS E COLOCAR DE ACORDO COM PARAMETRO  */}
        {clients.map((item, index) => (
            <>
                <Card>
                    <div className="cardListLayout">
                        <CardContent>
                            {/* DESCRICAO */}
                        </CardContent>

                        <CardActions disableSpacing>
                            {useAction ? <>
                                            <IconButton aria-label="Editar">
                                                <Edit />
                                            </IconButton>
                                            <IconButton aria-label="Deletar">
                                                <Delete />
                                            </IconButton>
                                        </>
                                : ''
                            }
                            <ExpandMore
                                expand={expanded}
                                onClick={() => setExpanded(expanded === index ? -1 : index)}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                {/* handleExpandClick(index) */}

                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>

                    </div>
                    <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                        <CardContent>
                            {/* OQ VAI APARECER CADA VEZ QUE EXPANDE */}
                        </CardContent>
                    </Collapse>
                </Card>
            </>
        ))}
    </>
}



// <tr key={client.id}>
//     <td>{client.id}</td>
//     <td>{client.nome}</td>
//     <td>{client.telefone}</td>
//     <td>
//         <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClient(client)}>Alterar</button>
//         <button className="btn btn-danger btn-sm" onClick={() => handleDelete(client.id)}>Deletar</button>
//     </td>
// </tr>















