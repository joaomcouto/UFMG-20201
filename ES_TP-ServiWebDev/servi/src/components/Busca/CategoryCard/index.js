import React from 'react'
import './CategoryCard.css';

import { Card, CardHeader, Avatar } from '@material-ui/core';

export default function CategoryCard(props) {
    return (
        <div className="category-card">
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar>
                            {props.imagem ? <img src={props.imagem} alt="S"></img> : props.name[0]}
                        </Avatar>
                    }
                    title={props.name}
                />
            </Card>
        </div>
    )
}
