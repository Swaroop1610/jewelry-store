export const processPayment = async (cartItems) => {
  console.log("Processing payment for:", cartItems);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        orderId: "ORD" + Date.now(),
      });
    }, 1500);
  });
};