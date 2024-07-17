/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrderDish = /* GraphQL */ `mutation CreateOrderDish(
  $input: CreateOrderDishInput!
  $condition: ModelOrderDishConditionInput
) {
  createOrderDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderDishMutationVariables,
  APITypes.CreateOrderDishMutation
>;
export const updateOrderDish = /* GraphQL */ `mutation UpdateOrderDish(
  $input: UpdateOrderDishInput!
  $condition: ModelOrderDishConditionInput
) {
  updateOrderDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderDishMutationVariables,
  APITypes.UpdateOrderDishMutation
>;
export const deleteOrderDish = /* GraphQL */ `mutation DeleteOrderDish(
  $input: DeleteOrderDishInput!
  $condition: ModelOrderDishConditionInput
) {
  deleteOrderDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderDishMutationVariables,
  APITypes.DeleteOrderDishMutation
>;
export const createBasketDish = /* GraphQL */ `mutation CreateBasketDish(
  $input: CreateBasketDishInput!
  $condition: ModelBasketDishConditionInput
) {
  createBasketDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBasketDishMutationVariables,
  APITypes.CreateBasketDishMutation
>;
export const updateBasketDish = /* GraphQL */ `mutation UpdateBasketDish(
  $input: UpdateBasketDishInput!
  $condition: ModelBasketDishConditionInput
) {
  updateBasketDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBasketDishMutationVariables,
  APITypes.UpdateBasketDishMutation
>;
export const deleteBasketDish = /* GraphQL */ `mutation DeleteBasketDish(
  $input: DeleteBasketDishInput!
  $condition: ModelBasketDishConditionInput
) {
  deleteBasketDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBasketDishMutationVariables,
  APITypes.DeleteBasketDishMutation
>;
export const createBasket = /* GraphQL */ `mutation CreateBasket(
  $input: CreateBasketInput!
  $condition: ModelBasketConditionInput
) {
  createBasket(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBasketMutationVariables,
  APITypes.CreateBasketMutation
>;
export const updateBasket = /* GraphQL */ `mutation UpdateBasket(
  $input: UpdateBasketInput!
  $condition: ModelBasketConditionInput
) {
  updateBasket(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBasketMutationVariables,
  APITypes.UpdateBasketMutation
>;
export const deleteBasket = /* GraphQL */ `mutation DeleteBasket(
  $input: DeleteBasketInput!
  $condition: ModelBasketConditionInput
) {
  deleteBasket(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBasketMutationVariables,
  APITypes.DeleteBasketMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createCourier = /* GraphQL */ `mutation CreateCourier(
  $input: CreateCourierInput!
  $condition: ModelCourierConditionInput
) {
  createCourier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCourierMutationVariables,
  APITypes.CreateCourierMutation
>;
export const updateCourier = /* GraphQL */ `mutation UpdateCourier(
  $input: UpdateCourierInput!
  $condition: ModelCourierConditionInput
) {
  updateCourier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCourierMutationVariables,
  APITypes.UpdateCourierMutation
>;
export const deleteCourier = /* GraphQL */ `mutation DeleteCourier(
  $input: DeleteCourierInput!
  $condition: ModelCourierConditionInput
) {
  deleteCourier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCourierMutationVariables,
  APITypes.DeleteCourierMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createDish = /* GraphQL */ `mutation CreateDish(
  $input: CreateDishInput!
  $condition: ModelDishConditionInput
) {
  createDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDishMutationVariables,
  APITypes.CreateDishMutation
>;
export const updateDish = /* GraphQL */ `mutation UpdateDish(
  $input: UpdateDishInput!
  $condition: ModelDishConditionInput
) {
  updateDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDishMutationVariables,
  APITypes.UpdateDishMutation
>;
export const deleteDish = /* GraphQL */ `mutation DeleteDish(
  $input: DeleteDishInput!
  $condition: ModelDishConditionInput
) {
  deleteDish(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDishMutationVariables,
  APITypes.DeleteDishMutation
>;
export const createRestaurant = /* GraphQL */ `mutation CreateRestaurant(
  $input: CreateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  createRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRestaurantMutationVariables,
  APITypes.CreateRestaurantMutation
>;
export const updateRestaurant = /* GraphQL */ `mutation UpdateRestaurant(
  $input: UpdateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  updateRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRestaurantMutationVariables,
  APITypes.UpdateRestaurantMutation
>;
export const deleteRestaurant = /* GraphQL */ `mutation DeleteRestaurant(
  $input: DeleteRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  deleteRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRestaurantMutationVariables,
  APITypes.DeleteRestaurantMutation
>;
