import { createContext, useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, User } from "../models";
import { useAuthContext } from "./AuthContext";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const { dbCourier } = useAuthContext();
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const [dishes, setDishes] = useState(null);

  useEffect(() => {
    if (!order) return;

    const subscription = DataStore.observe(Order, order.id).subscribe(
      ({ opType, element }) => opType === "UPDATE" && fetchOrder(element.id)
    );

    return () => subscription.unsubscribe();
  }, [order?.id]);

  const fetchOrder = async (id) => {
    !id && setOrder(null);
    if (!id) return;

    const _order = await DataStore.query(Order, id);
    setOrder(_order);

    DataStore.query(User, _order.userID).then(setUser);
    DataStore.query(OrderDish, (od) => od.orderID("eq", _order.id)).then(
      setDishes
    );
  };

  const acceptOrder = async () => {
    const accepted = await DataStore.save(
      Order.copyOf(order, (updated) => {
        updated.status = "ACCEPTED";
        updated.Courier = dbCourier;
      })
    );

    setOrder(accepted);
  };

  const pickUpOrder = async () => {
    const pickUp = await DataStore.save(
      Order.copyOf(order, (updated) => {
        updated.status = "PICKED_UP";
      })
    );

    setOrder(pickUp);
  };

  const completeOrder = async () => {
    const complete = await DataStore.save(
      Order.copyOf(order, (updated) => {
        updated.status = "COMPLETED";
      })
    );

    setOrder(complete);
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        user,
        dishes,
        acceptOrder,
        fetchOrder,
        pickUpOrder,
        completeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
