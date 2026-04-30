from flask import Blueprint, jsonify, request
from models import Product
from extensions import db

product_bp = Blueprint('products', __name__)

# GET all products
@product_bp.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

# POST add product
@product_bp.route("/products", methods=["POST"])
def add_product():
    data = request.json

    new_product = Product(
        name=data["name"],
        price=data["price"],
        image=data["image"],
        category=data["category"]
    )

    db.session.add(new_product)
    db.session.commit()

    return jsonify(new_product.to_dict()), 201