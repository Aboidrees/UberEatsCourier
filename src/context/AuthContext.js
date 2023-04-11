import { Auth, DataStore } from "aws-amplify";
import { createContext, useState, useEffect, useContext } from "react";
import { Courier } from "../models";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [dbCourier, setDbCourier] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const sub = authUser?.attributes?.sub;

  useEffect(() => {

    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then(setAuthUser);
  }, []);

  useEffect(() => {
    if (!sub) return;
    console.log("couriers");
    DataStore.query(Courier, (courier) => courier.sub("eq", sub)).then(
      (couriers) => {
        setDbCourier(couriers[0]);
      }
    );


    setLoading(false);

  }, [sub]);


  useEffect(() => {

    if (!dbCourier) return;

    const subscription = DataStore.observe(Courier, dbCourier.id).subscribe(
      ({ opType, element }) => opType === "UPDATE" && setDbCourier(element)
    );

    return () => subscription.unsubscribe();


  }, [dbCourier]);


  return (
    <AuthContext.Provider
      value={{ authUser, dbCourier, setDbCourier, sub, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
