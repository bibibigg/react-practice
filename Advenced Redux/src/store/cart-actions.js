import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("firebase주소");

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      // dispatch(
      //   uiActions.showNotification({
      //     status: "success",
      //     titie: "success",
      //     message: "fetching cart data successfully",
      //   })
      // );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          titie: "Error",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        titie: "sending",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("firebase주소", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          titie: "success",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          titie: "Error",
          message: "sending cart data failed",
        })
      );
    }
  };
};
