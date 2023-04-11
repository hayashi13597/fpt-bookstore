import React, { useEffect } from "react";
import Header from "../../components/Home/Header";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from "react-redux";
import { loadUser } from "../../slice/authSlice";
import * as Toastify from "../../components/Toastify/Toast";
import { addOrder } from "./paymentSlice";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.authLogin.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const productId = [];
  cartItems.forEach((item) => {
    productId.push(item.id);
  });

  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.saleInfo.listPrice.amount * item.quantity;
  }, 0);

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems &&
              cartItems.map((cartItem) => (
                <CartItem props={cartItem} key={cartItem.id} />
              ))}
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Tạm tính</p>
              <p className="text-gray-700">
                {Intl.NumberFormat("en").format(total)}đ
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Phí ship</p>
              <p className="text-gray-700">0đ</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Tổng</p>
              <div>
                <p className="mb-1 text-lg font-bold">
                  {Intl.NumberFormat("en").format(total)}đ
                </p>
                <p className="text-sm text-gray-700">Đã bao gồm thuế</p>
              </div>
            </div>
            <PayPalButtons
              className="mt-3"
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: (total / 23452).toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order?.capture().then((details) => {
                  dispatch(
                    addOrder({
                      userId: user._id,
                      productId,
                      paypalPayment: details,
                    })
                  ).then(() => Toastify.successNotify("Thanh toán thành công"));
                  setTimeout(() => (window.location.href = "/"), 2000);
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
