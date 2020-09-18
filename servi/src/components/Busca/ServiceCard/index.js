import React from 'react'
import './ServiceCard.css';

import { Card, CardHeader, Avatar } from '@material-ui/core';
import { StarRateRounded } from '@material-ui/icons';

export default function ServiceCard(props) {

    return (
        <div className="service-card">
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar>
                            <img src={props.image} alt="S"></img>
                        </Avatar>
                    }
                    title={props.name}
                    subheader={<div className="subheader"><StarRateRounded /> {props.nota + ' | ' + props.categoria}</div>}
                />
            </Card>
        </div>
    )
}
