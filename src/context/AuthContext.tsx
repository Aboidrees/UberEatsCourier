import {generateClient} from "aws-amplify/api";
import {useAuthenticator} from "@aws-amplify/ui-react-native";
import {createContext, useState, useEffect, useContext} from "react";

import * as subscriptions from "../graphql/subscriptions";
import * as queries from "../graphql/queries";
import {Courier, User} from "../API";

const client = generateClient();


interface IAuthContext {
  authUser: any;
  courier: Courier;
  setCourier: (courier: Courier) => void;
  signOut: () => void;
  isLoading: boolean;
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthContextProvider = ({children}) => {
  const [courier, setCourier] = useState<Courier>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {user: authUser, signOut} = useAuthenticator();


  useEffect(() => {
    if (!authUser) return;

    client.graphql({"query": queries.listCouriers, "variables": {filter: {sub: {eq: authUser.userId}}}})
      .then(({data}) => setCourier(data.listCouriers.items[0]))
      .catch(console.log);

    setIsLoading(false);
  }, [authUser]);

  useEffect(() => {
    if (!courier) return;

    const subscription = client
      .graphql({query: subscriptions.onUpdateCourier, "variables": {filter: {sub: {eq: authUser.userId}}}})
      .subscribe({
        next: ({data}) => setCourier(data.onUpdateCourier),
        error: console.log
      });

    return () => subscription.unsubscribe();
  }, [courier]);

  return (
    <AuthContext.Provider value={{authUser, courier, setCourier, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
