from flask import Blueprint, request, jsonify
import random

auth_bp = Blueprint("auth", __name__)

# temporary storage (later use Redis/DB)
otp_store = {}

# SEND OTP
@auth_bp.route("/send-otp", methods=["POST"])
def send_otp():
    data = request.json
    phone = data.get("phone")

    otp = str(random.randint(1000, 9999))

    otp_store[phone] = otp

    print(f"OTP for {phone}: {otp}")  # 👈 for testing

    return jsonify({"message": "OTP sent successfully"})


# VERIFY OTP
@auth_bp.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json
    phone = data.get("phone")
    otp = data.get("otp")

    if otp_store.get(phone) == otp:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid OTP"}), 400