import React from 'react'
import './CategoryCard.css';

import { Card, CardHeader, Avatar } from '@material-ui/core';

export default function CategoryCard() {
    return (
        <div className="category-card">
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar>
                            C
                        </Avatar>
                    }
                    title="Categoria"
                />
            </Card>
        </div>
    )
}
