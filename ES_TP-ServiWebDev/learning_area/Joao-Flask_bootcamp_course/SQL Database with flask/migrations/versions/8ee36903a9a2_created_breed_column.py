"""created breed column

Revision ID: 8ee36903a9a2
Revises: 
Create Date: 2020-09-17 10:58:38.694602

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8ee36903a9a2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('puppies', sa.Column('breed', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('puppies', 'breed')
    # ### end Alembic commands ###
