__author__ = 'hsk81'

###############################################################################
###############################################################################

from flask.ext.sqlalchemy import SQLAlchemy
from ..app import app

###############################################################################
###############################################################################

db = SQLAlchemy (app)
db.Query.back = db.Query.reset_joinpoint

###############################################################################
###############################################################################
