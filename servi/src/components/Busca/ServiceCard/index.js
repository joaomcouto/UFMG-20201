import React from 'react'
import './ServiceCard.css';

import { Card, CardHeader, Avatar } from '@material-ui/core';

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
                    subheader={'Nota ' + props.nota}
                />
            </Card>
        </div>
    )
}
