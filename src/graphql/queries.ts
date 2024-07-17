/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOrderDish = /* GraphQL */ `query GetOrderDish($id: ID!) {
  getOrderDish(id: $id) {
    id
    quantity
    orderID
    Dish {
      id
      name
      description
      price
      salePrice
      images
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    orderDishDishId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOrderDishQueryVariables,
  APITypes.GetOrderDishQuery
>;
export const listOrderDishes = /* GraphQL */ `query ListOrderDishes(
  $filter: ModelOrderDishFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quantity
      orderID
      Dish {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderDishesQueryVariables,
  APITypes.ListOrderDishesQuery
>;
export const syncOrderDishes = /* GraphQL */ `query SyncOrderDishes(
  $filter: ModelOrderDishFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOrderDishes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      quantity
      orderID
      Dish {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOrderDishesQueryVariables,
  APITypes.SyncOrderDishesQuery
>;
export const orderDishesByOrderID = /* GraphQL */ `query OrderDishesByOrderID(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderDishFilterInput
  $limit: Int
  $nextToken: String
) {
  orderDishesByOrderID(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quantity
      orderID
      Dish {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderDishesByOrderIDQueryVariables,
  APITypes.OrderDishesByOrderIDQuery
>;
export const getBasketDish = /* GraphQL */ `query GetBasketDish($id: ID!) {
  getBasketDish(id: $id) {
    id
    quantity
    Dish {
      id
      name
      description
      price
      salePrice
      images
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    basketID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    basketDishDishId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBasketDishQueryVariables,
  APITypes.GetBasketDishQuery
>;
export const listBasketDishes = /* GraphQL */ `query ListBasketDishes(
  $filter: ModelBasketDishFilterInput
  $limit: Int
  $nextToken: String
) {
  listBasketDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      quantity
      Dish {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBasketDishesQueryVariables,
  APITypes.ListBasketDishesQuery
>;
export const syncBasketDishes = /* GraphQL */ `query SyncBasketDishes(
  $filter: ModelBasketDishFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBasketDishes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      quantity
      Dish {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBasketDishesQueryVariables,
  APITypes.SyncBasketDishesQuery
>;
export const basketDishesByBasketID = /* GraphQL */ `query BasketDishesByBasketID(
  $basketID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBasketDishFilterInput
  $limit: Int
  $nextToken: String
) {
  basketDishesByBasketID(
    basketID: $basketID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      quantity
      Dish {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BasketDishesByBasketIDQueryVariables,
  APITypes.BasketDishesByBasketIDQuery
>;
export const getBasket = /* GraphQL */ `query GetBasket($id: ID!) {
  getBasket(id: $id) {
    id
    BasketDishes {
      items {
        id
        quantity
        basketID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        basketDishDishId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    userID
    restaurantID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBasketQueryVariables, APITypes.GetBasketQuery>;
export const listBaskets = /* GraphQL */ `query ListBaskets(
  $filter: ModelBasketFilterInput
  $limit: Int
  $nextToken: String
) {
  listBaskets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      BasketDishes {
        nextToken
        startedAt
        __typename
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBasketsQueryVariables,
  APITypes.ListBasketsQuery
>;
export const syncBaskets = /* GraphQL */ `query SyncBaskets(
  $filter: ModelBasketFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBaskets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      BasketDishes {
        nextToken
        startedAt
        __typename
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBasketsQueryVariables,
  APITypes.SyncBasketsQuery
>;
export const basketsByUserID = /* GraphQL */ `query BasketsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBasketFilterInput
  $limit: Int
  $nextToken: String
) {
  basketsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      BasketDishes {
        nextToken
        startedAt
        __typename
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BasketsByUserIDQueryVariables,
  APITypes.BasketsByUserIDQuery
>;
export const basketsByRestaurantID = /* GraphQL */ `query BasketsByRestaurantID(
  $restaurantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBasketFilterInput
  $limit: Int
  $nextToken: String
) {
  basketsByRestaurantID(
    restaurantID: $restaurantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      BasketDishes {
        nextToken
        startedAt
        __typename
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BasketsByRestaurantIDQueryVariables,
  APITypes.BasketsByRestaurantIDQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    total
    status
    Courier {
      id
      name
      latitude
      longitude
      transportationMode
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Restaurant {
      id
      name
      deliveryFee
      maxDeliveryTime
      minDeliveryTime
      rating
      address
      latitude
      longitude
      adminSub
      icon
      images
      Dishes {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    userID
    OrderDishes {
      items {
        id
        quantity
        orderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderDishDishId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    orderCourierId
    orderRestaurantId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      total
      status
      Courier {
        id
        name
        latitude
        longitude
        transportationMode
        sub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Restaurant {
        id
        name
        deliveryFee
        maxDeliveryTime
        minDeliveryTime
        rating
        address
        latitude
        longitude
        adminSub
        icon
        images
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      OrderDishes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderCourierId
      orderRestaurantId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const syncOrders = /* GraphQL */ `query SyncOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOrders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      total
      status
      Courier {
        id
        name
        latitude
        longitude
        transportationMode
        sub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Restaurant {
        id
        name
        deliveryFee
        maxDeliveryTime
        minDeliveryTime
        rating
        address
        latitude
        longitude
        adminSub
        icon
        images
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      OrderDishes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderCourierId
      orderRestaurantId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOrdersQueryVariables,
  APITypes.SyncOrdersQuery
>;
export const ordersByUserID = /* GraphQL */ `query OrdersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      total
      status
      Courier {
        id
        name
        latitude
        longitude
        transportationMode
        sub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Restaurant {
        id
        name
        deliveryFee
        maxDeliveryTime
        minDeliveryTime
        rating
        address
        latitude
        longitude
        adminSub
        icon
        images
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      userID
      OrderDishes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderCourierId
      orderRestaurantId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIDQueryVariables,
  APITypes.OrdersByUserIDQuery
>;
export const getCourier = /* GraphQL */ `query GetCourier($id: ID!) {
  getCourier(id: $id) {
    id
    name
    latitude
    longitude
    transportationMode
    sub
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourierQueryVariables,
  APITypes.GetCourierQuery
>;
export const listCouriers = /* GraphQL */ `query ListCouriers(
  $filter: ModelCourierFilterInput
  $limit: Int
  $nextToken: String
) {
  listCouriers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      latitude
      longitude
      transportationMode
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCouriersQueryVariables,
  APITypes.ListCouriersQuery
>;
export const syncCouriers = /* GraphQL */ `query SyncCouriers(
  $filter: ModelCourierFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCouriers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      latitude
      longitude
      transportationMode
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCouriersQueryVariables,
  APITypes.SyncCouriersQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    address
    latitude
    longitude
    sub
    avatar
    Orders {
      items {
        id
        total
        status
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderCourierId
        orderRestaurantId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Baskets {
      items {
        id
        userID
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      address
      latitude
      longitude
      sub
      avatar
      Orders {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      address
      latitude
      longitude
      sub
      avatar
      Orders {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getDish = /* GraphQL */ `query GetDish($id: ID!) {
  getDish(id: $id) {
    id
    name
    description
    price
    salePrice
    images
    restaurantID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDishQueryVariables, APITypes.GetDishQuery>;
export const listDishes = /* GraphQL */ `query ListDishes(
  $filter: ModelDishFilterInput
  $limit: Int
  $nextToken: String
) {
  listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      price
      salePrice
      images
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDishesQueryVariables,
  APITypes.ListDishesQuery
>;
export const syncDishes = /* GraphQL */ `query SyncDishes(
  $filter: ModelDishFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDishes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      price
      salePrice
      images
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncDishesQueryVariables,
  APITypes.SyncDishesQuery
>;
export const dishesByRestaurantID = /* GraphQL */ `query DishesByRestaurantID(
  $restaurantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDishFilterInput
  $limit: Int
  $nextToken: String
) {
  dishesByRestaurantID(
    restaurantID: $restaurantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      price
      salePrice
      images
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DishesByRestaurantIDQueryVariables,
  APITypes.DishesByRestaurantIDQuery
>;
export const getRestaurant = /* GraphQL */ `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
    id
    name
    deliveryFee
    maxDeliveryTime
    minDeliveryTime
    rating
    address
    latitude
    longitude
    adminSub
    icon
    images
    Dishes {
      items {
        id
        name
        description
        price
        salePrice
        images
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Baskets {
      items {
        id
        userID
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRestaurantQueryVariables,
  APITypes.GetRestaurantQuery
>;
export const listRestaurants = /* GraphQL */ `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      deliveryFee
      maxDeliveryTime
      minDeliveryTime
      rating
      address
      latitude
      longitude
      adminSub
      icon
      images
      Dishes {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestaurantsQueryVariables,
  APITypes.ListRestaurantsQuery
>;
export const syncRestaurants = /* GraphQL */ `query SyncRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRestaurants(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      deliveryFee
      maxDeliveryTime
      minDeliveryTime
      rating
      address
      latitude
      longitude
      adminSub
      icon
      images
      Dishes {
        nextToken
        startedAt
        __typename
      }
      Baskets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRestaurantsQueryVariables,
  APITypes.SyncRestaurantsQuery
>;
