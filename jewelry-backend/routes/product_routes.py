from flask import Blueprint, jsonify
from models import Product

product_bp = Blueprint('products', __name__)

@product_bp.route("/products", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])