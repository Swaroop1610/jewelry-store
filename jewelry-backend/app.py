from flask import Flask
from flask_cors import CORS
from extensions import db
from routes.auth_routes import auth_bp
app.register_blueprint(auth_bp)

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

# initialize db
db.init_app(app)

# import AFTER db init (very important)
from routes.product_routes import product_bp
app.register_blueprint(product_bp)

if __name__ == "__main__":
    app.run(debug=True)