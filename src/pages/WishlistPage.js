import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="page-container">

    <div style={{ padding: "20px" }}>
      <h1>Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button onClick={() => removeFromWishlist(item.id)}>
              Remove ❌
            </button>
          </div>
        ))
      )}
    </div>
  </div>
  );
};

export default WishlistPage;