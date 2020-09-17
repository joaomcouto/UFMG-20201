import React from 'react'
import './SearchCard.css';

import { Card, CardHeader, Avatar } from '@material-ui/core';

export default function SearchCard() {
    return (
        <div className="search-card">
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar>
                            S
                        </Avatar>
                    }
                    title="Nome do Estabelecimento"
                    subheader="Nota ?"
                />
            </Card>
        </div>
    )
}
