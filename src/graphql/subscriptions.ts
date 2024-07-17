/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrderDish = /* GraphQL */ `subscription OnCreateOrderDish($filter: ModelSubscriptionOrderDishFilterInput) {
  onCreateOrderDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderDishSubscriptionVariables,
  APITypes.OnCreateOrderDishSubscription
>;
export const onUpdateOrderDish = /* GraphQL */ `subscription OnUpdateOrderDish($filter: ModelSubscriptionOrderDishFilterInput) {
  onUpdateOrderDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderDishSubscriptionVariables,
  APITypes.OnUpdateOrderDishSubscription
>;
export const onDeleteOrderDish = /* GraphQL */ `subscription OnDeleteOrderDish($filter: ModelSubscriptionOrderDishFilterInput) {
  onDeleteOrderDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderDishSubscriptionVariables,
  APITypes.OnDeleteOrderDishSubscription
>;
export const onCreateBasketDish = /* GraphQL */ `subscription OnCreateBasketDish(
  $filter: ModelSubscriptionBasketDishFilterInput
) {
  onCreateBasketDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBasketDishSubscriptionVariables,
  APITypes.OnCreateBasketDishSubscription
>;
export const onUpdateBasketDish = /* GraphQL */ `subscription OnUpdateBasketDish(
  $filter: ModelSubscriptionBasketDishFilterInput
) {
  onUpdateBasketDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBasketDishSubscriptionVariables,
  APITypes.OnUpdateBasketDishSubscription
>;
export const onDeleteBasketDish = /* GraphQL */ `subscription OnDeleteBasketDish(
  $filter: ModelSubscriptionBasketDishFilterInput
) {
  onDeleteBasketDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBasketDishSubscriptionVariables,
  APITypes.OnDeleteBasketDishSubscription
>;
export const onCreateBasket = /* GraphQL */ `subscription OnCreateBasket($filter: ModelSubscriptionBasketFilterInput) {
  onCreateBasket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBasketSubscriptionVariables,
  APITypes.OnCreateBasketSubscription
>;
export const onUpdateBasket = /* GraphQL */ `subscription OnUpdateBasket($filter: ModelSubscriptionBasketFilterInput) {
  onUpdateBasket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBasketSubscriptionVariables,
  APITypes.OnUpdateBasketSubscription
>;
export const onDeleteBasket = /* GraphQL */ `subscription OnDeleteBasket($filter: ModelSubscriptionBasketFilterInput) {
  onDeleteBasket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBasketSubscriptionVariables,
  APITypes.OnDeleteBasketSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateCourier = /* GraphQL */ `subscription OnCreateCourier($filter: ModelSubscriptionCourierFilterInput) {
  onCreateCourier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourierSubscriptionVariables,
  APITypes.OnCreateCourierSubscription
>;
export const onUpdateCourier = /* GraphQL */ `subscription OnUpdateCourier($filter: ModelSubscriptionCourierFilterInput) {
  onUpdateCourier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourierSubscriptionVariables,
  APITypes.OnUpdateCourierSubscription
>;
export const onDeleteCourier = /* GraphQL */ `subscription OnDeleteCourier($filter: ModelSubscriptionCourierFilterInput) {
  onDeleteCourier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourierSubscriptionVariables,
  APITypes.OnDeleteCourierSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateDish = /* GraphQL */ `subscription OnCreateDish($filter: ModelSubscriptionDishFilterInput) {
  onCreateDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDishSubscriptionVariables,
  APITypes.OnCreateDishSubscription
>;
export const onUpdateDish = /* GraphQL */ `subscription OnUpdateDish($filter: ModelSubscriptionDishFilterInput) {
  onUpdateDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDishSubscriptionVariables,
  APITypes.OnUpdateDishSubscription
>;
export const onDeleteDish = /* GraphQL */ `subscription OnDeleteDish($filter: ModelSubscriptionDishFilterInput) {
  onDeleteDish(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDishSubscriptionVariables,
  APITypes.OnDeleteDishSubscription
>;
export const onCreateRestaurant = /* GraphQL */ `subscription OnCreateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onCreateRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantSubscriptionVariables,
  APITypes.OnCreateRestaurantSubscription
>;
export const onUpdateRestaurant = /* GraphQL */ `subscription OnUpdateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onUpdateRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantSubscriptionVariables,
  APITypes.OnUpdateRestaurantSubscription
>;
export const onDeleteRestaurant = /* GraphQL */ `subscription OnDeleteRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onDeleteRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantSubscriptionVariables,
  APITypes.OnDeleteRestaurantSubscription
>;
