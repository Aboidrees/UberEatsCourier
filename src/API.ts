/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderDishInput = {
  id?: string | null,
  quantity?: number | null,
  orderID: string,
  _version?: number | null,
  orderDishDishId?: string | null,
};

export type ModelOrderDishConditionInput = {
  quantity?: ModelIntInput | null,
  orderID?: ModelIDInput | null,
  and?: Array< ModelOrderDishConditionInput | null > | null,
  or?: Array< ModelOrderDishConditionInput | null > | null,
  not?: ModelOrderDishConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  orderDishDishId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type OrderDish = {
  __typename: "OrderDish",
  id: string,
  quantity?: number | null,
  orderID: string,
  Dish?: Dish | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  orderDishDishId?: string | null,
};

export type Dish = {
  __typename: "Dish",
  id: string,
  name: string,
  description?: string | null,
  price: number,
  salePrice: number,
  images?: Array< string | null > | null,
  restaurantID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateOrderDishInput = {
  id: string,
  quantity?: number | null,
  orderID?: string | null,
  _version?: number | null,
  orderDishDishId?: string | null,
};

export type DeleteOrderDishInput = {
  id: string,
  _version?: number | null,
};

export type CreateBasketDishInput = {
  id?: string | null,
  quantity: number,
  basketID: string,
  _version?: number | null,
  basketDishDishId?: string | null,
};

export type ModelBasketDishConditionInput = {
  quantity?: ModelIntInput | null,
  basketID?: ModelIDInput | null,
  and?: Array< ModelBasketDishConditionInput | null > | null,
  or?: Array< ModelBasketDishConditionInput | null > | null,
  not?: ModelBasketDishConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  basketDishDishId?: ModelIDInput | null,
};

export type BasketDish = {
  __typename: "BasketDish",
  id: string,
  quantity: number,
  Dish?: Dish | null,
  basketID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  basketDishDishId?: string | null,
};

export type UpdateBasketDishInput = {
  id: string,
  quantity?: number | null,
  basketID?: string | null,
  _version?: number | null,
  basketDishDishId?: string | null,
};

export type DeleteBasketDishInput = {
  id: string,
  _version?: number | null,
};

export type CreateBasketInput = {
  id?: string | null,
  userID: string,
  restaurantID: string,
  _version?: number | null,
};

export type ModelBasketConditionInput = {
  userID?: ModelIDInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelBasketConditionInput | null > | null,
  or?: Array< ModelBasketConditionInput | null > | null,
  not?: ModelBasketConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Basket = {
  __typename: "Basket",
  id: string,
  BasketDishes?: ModelBasketDishConnection | null,
  userID: string,
  restaurantID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBasketDishConnection = {
  __typename: "ModelBasketDishConnection",
  items:  Array<BasketDish | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateBasketInput = {
  id: string,
  userID?: string | null,
  restaurantID?: string | null,
  _version?: number | null,
};

export type DeleteBasketInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  total: number,
  status?: OrderStatus | null,
  userID: string,
  _version?: number | null,
  orderCourierId?: string | null,
  orderRestaurantId?: string | null,
};

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  DECLINED_BY_RESTAURANT = "DECLINED_BY_RESTAURANT",
}


export type ModelOrderConditionInput = {
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  orderCourierId?: ModelIDInput | null,
  orderRestaurantId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  total: number,
  status?: OrderStatus | null,
  Courier?: Courier | null,
  Restaurant?: Restaurant | null,
  userID: string,
  OrderDishes?: ModelOrderDishConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  orderCourierId?: string | null,
  orderRestaurantId?: string | null,
};

export type Courier = {
  __typename: "Courier",
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  transportationMode?: TransportationModes | null,
  sub: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING",
}


export type Restaurant = {
  __typename: "Restaurant",
  id: string,
  name: string,
  deliveryFee: number,
  maxDeliveryTime: number,
  minDeliveryTime: number,
  rating?: number | null,
  address: string,
  latitude: number,
  longitude: number,
  adminSub?: string | null,
  icon?: string | null,
  images?: Array< string | null > | null,
  Dishes?: ModelDishConnection | null,
  Baskets?: ModelBasketConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelDishConnection = {
  __typename: "ModelDishConnection",
  items:  Array<Dish | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBasketConnection = {
  __typename: "ModelBasketConnection",
  items:  Array<Basket | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderDishConnection = {
  __typename: "ModelOrderDishConnection",
  items:  Array<OrderDish | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateOrderInput = {
  id: string,
  total?: number | null,
  status?: OrderStatus | null,
  userID?: string | null,
  _version?: number | null,
  orderCourierId?: string | null,
  orderRestaurantId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateCourierInput = {
  id?: string | null,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  transportationMode?: TransportationModes | null,
  sub: string,
  _version?: number | null,
};

export type ModelCourierConditionInput = {
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  transportationMode?: ModelTransportationModesInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelCourierConditionInput | null > | null,
  or?: Array< ModelCourierConditionInput | null > | null,
  not?: ModelCourierConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTransportationModesInput = {
  eq?: TransportationModes | null,
  ne?: TransportationModes | null,
};

export type UpdateCourierInput = {
  id: string,
  name?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  transportationMode?: TransportationModes | null,
  sub?: string | null,
  _version?: number | null,
};

export type DeleteCourierInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  address: string,
  latitude: number,
  longitude: number,
  sub: string,
  avatar?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  sub?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  address: string,
  latitude: number,
  longitude: number,
  sub: string,
  avatar?: string | null,
  Orders?: ModelOrderConnection | null,
  Baskets?: ModelBasketConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  sub?: string | null,
  avatar?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateDishInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  price: number,
  salePrice: number,
  images?: Array< string | null > | null,
  restaurantID: string,
  _version?: number | null,
};

export type ModelDishConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  salePrice?: ModelFloatInput | null,
  images?: ModelStringInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelDishConditionInput | null > | null,
  or?: Array< ModelDishConditionInput | null > | null,
  not?: ModelDishConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateDishInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  salePrice?: number | null,
  images?: Array< string | null > | null,
  restaurantID?: string | null,
  _version?: number | null,
};

export type DeleteDishInput = {
  id: string,
  _version?: number | null,
};

export type CreateRestaurantInput = {
  id?: string | null,
  name: string,
  deliveryFee: number,
  maxDeliveryTime: number,
  minDeliveryTime: number,
  rating?: number | null,
  address: string,
  latitude: number,
  longitude: number,
  adminSub?: string | null,
  icon?: string | null,
  images?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  deliveryFee?: ModelFloatInput | null,
  maxDeliveryTime?: ModelIntInput | null,
  minDeliveryTime?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  adminSub?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  images?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  deliveryFee?: number | null,
  maxDeliveryTime?: number | null,
  minDeliveryTime?: number | null,
  rating?: number | null,
  address?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  adminSub?: string | null,
  icon?: string | null,
  images?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteRestaurantInput = {
  id: string,
  _version?: number | null,
};

export type ModelOrderDishFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  orderID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderDishFilterInput | null > | null,
  or?: Array< ModelOrderDishFilterInput | null > | null,
  not?: ModelOrderDishFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  orderDishDishId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBasketDishFilterInput = {
  id?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  basketID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBasketDishFilterInput | null > | null,
  or?: Array< ModelBasketDishFilterInput | null > | null,
  not?: ModelBasketDishFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  basketDishDishId?: ModelIDInput | null,
};

export type ModelBasketFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  restaurantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBasketFilterInput | null > | null,
  or?: Array< ModelBasketFilterInput | null > | null,
  not?: ModelBasketFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  orderCourierId?: ModelIDInput | null,
  orderRestaurantId?: ModelIDInput | null,
};

export type ModelCourierFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  transportationMode?: ModelTransportationModesInput | null,
  sub?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourierFilterInput | null > | null,
  or?: Array< ModelCourierFilterInput | null > | null,
  not?: ModelCourierFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCourierConnection = {
  __typename: "ModelCourierConnection",
  items:  Array<Courier | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  sub?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDishFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  salePrice?: ModelFloatInput | null,
  images?: ModelStringInput | null,
  restaurantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDishFilterInput | null > | null,
  or?: Array< ModelDishFilterInput | null > | null,
  not?: ModelDishFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  deliveryFee?: ModelFloatInput | null,
  maxDeliveryTime?: ModelIntInput | null,
  minDeliveryTime?: ModelIntInput | null,
  rating?: ModelFloatInput | null,
  address?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  adminSub?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  images?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items:  Array<Restaurant | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionOrderDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  orderID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderDishFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  orderDishDishId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBasketDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  basketID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBasketDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionBasketDishFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  basketDishDishId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBasketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBasketFilterInput | null > | null,
  or?: Array< ModelSubscriptionBasketFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  total?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  orderCourierId?: ModelSubscriptionIDInput | null,
  orderRestaurantId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCourierFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  transportationMode?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourierFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourierFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  sub?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  salePrice?: ModelSubscriptionFloatInput | null,
  images?: ModelSubscriptionStringInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDishFilterInput | null > | null,
  or?: Array< ModelSubscriptionDishFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  deliveryFee?: ModelSubscriptionFloatInput | null,
  maxDeliveryTime?: ModelSubscriptionIntInput | null,
  minDeliveryTime?: ModelSubscriptionIntInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  address?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  adminSub?: ModelSubscriptionStringInput | null,
  icon?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateOrderDishMutationVariables = {
  input: CreateOrderDishInput,
  condition?: ModelOrderDishConditionInput | null,
};

export type CreateOrderDishMutation = {
  createOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type UpdateOrderDishMutationVariables = {
  input: UpdateOrderDishInput,
  condition?: ModelOrderDishConditionInput | null,
};

export type UpdateOrderDishMutation = {
  updateOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type DeleteOrderDishMutationVariables = {
  input: DeleteOrderDishInput,
  condition?: ModelOrderDishConditionInput | null,
};

export type DeleteOrderDishMutation = {
  deleteOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type CreateBasketDishMutationVariables = {
  input: CreateBasketDishInput,
  condition?: ModelBasketDishConditionInput | null,
};

export type CreateBasketDishMutation = {
  createBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type UpdateBasketDishMutationVariables = {
  input: UpdateBasketDishInput,
  condition?: ModelBasketDishConditionInput | null,
};

export type UpdateBasketDishMutation = {
  updateBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type DeleteBasketDishMutationVariables = {
  input: DeleteBasketDishInput,
  condition?: ModelBasketDishConditionInput | null,
};

export type DeleteBasketDishMutation = {
  deleteBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type CreateBasketMutationVariables = {
  input: CreateBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type CreateBasketMutation = {
  createBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBasketMutationVariables = {
  input: UpdateBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type UpdateBasketMutation = {
  updateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBasketMutationVariables = {
  input: DeleteBasketInput,
  condition?: ModelBasketConditionInput | null,
};

export type DeleteBasketMutation = {
  deleteBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type CreateCourierMutationVariables = {
  input: CreateCourierInput,
  condition?: ModelCourierConditionInput | null,
};

export type CreateCourierMutation = {
  createCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCourierMutationVariables = {
  input: UpdateCourierInput,
  condition?: ModelCourierConditionInput | null,
};

export type UpdateCourierMutation = {
  updateCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCourierMutationVariables = {
  input: DeleteCourierInput,
  condition?: ModelCourierConditionInput | null,
};

export type DeleteCourierMutation = {
  deleteCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDishMutationVariables = {
  input: CreateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type CreateDishMutation = {
  createDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDishMutationVariables = {
  input: UpdateDishInput,
  condition?: ModelDishConditionInput | null,
};

export type UpdateDishMutation = {
  updateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDishMutationVariables = {
  input: DeleteDishInput,
  condition?: ModelDishConditionInput | null,
};

export type DeleteDishMutation = {
  deleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetOrderDishQueryVariables = {
  id: string,
};

export type GetOrderDishQuery = {
  getOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type ListOrderDishesQueryVariables = {
  filter?: ModelOrderDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderDishesQuery = {
  listOrderDishes?:  {
    __typename: "ModelOrderDishConnection",
    items:  Array< {
      __typename: "OrderDish",
      id: string,
      quantity?: number | null,
      orderID: string,
      Dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderDishesQueryVariables = {
  filter?: ModelOrderDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderDishesQuery = {
  syncOrderDishes?:  {
    __typename: "ModelOrderDishConnection",
    items:  Array< {
      __typename: "OrderDish",
      id: string,
      quantity?: number | null,
      orderID: string,
      Dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OrderDishesByOrderIDQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderDishesByOrderIDQuery = {
  orderDishesByOrderID?:  {
    __typename: "ModelOrderDishConnection",
    items:  Array< {
      __typename: "OrderDish",
      id: string,
      quantity?: number | null,
      orderID: string,
      Dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBasketDishQueryVariables = {
  id: string,
};

export type GetBasketDishQuery = {
  getBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type ListBasketDishesQueryVariables = {
  filter?: ModelBasketDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasketDishesQuery = {
  listBasketDishes?:  {
    __typename: "ModelBasketDishConnection",
    items:  Array< {
      __typename: "BasketDish",
      id: string,
      quantity: number,
      Dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      basketDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBasketDishesQueryVariables = {
  filter?: ModelBasketDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBasketDishesQuery = {
  syncBasketDishes?:  {
    __typename: "ModelBasketDishConnection",
    items:  Array< {
      __typename: "BasketDish",
      id: string,
      quantity: number,
      Dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      basketDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BasketDishesByBasketIDQueryVariables = {
  basketID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBasketDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BasketDishesByBasketIDQuery = {
  basketDishesByBasketID?:  {
    __typename: "ModelBasketDishConnection",
    items:  Array< {
      __typename: "BasketDish",
      id: string,
      quantity: number,
      Dish?:  {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      basketID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      basketDishDishId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBasketQueryVariables = {
  id: string,
};

export type GetBasketQuery = {
  getBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBasketsQueryVariables = {
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBasketsQuery = {
  listBaskets?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      BasketDishes?:  {
        __typename: "ModelBasketDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBasketsQueryVariables = {
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBasketsQuery = {
  syncBaskets?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      BasketDishes?:  {
        __typename: "ModelBasketDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BasketsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BasketsByUserIDQuery = {
  basketsByUserID?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      BasketDishes?:  {
        __typename: "ModelBasketDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BasketsByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBasketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BasketsByRestaurantIDQuery = {
  basketsByRestaurantID?:  {
    __typename: "ModelBasketConnection",
    items:  Array< {
      __typename: "Basket",
      id: string,
      BasketDishes?:  {
        __typename: "ModelBasketDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      userID: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      total: number,
      status?: OrderStatus | null,
      Courier?:  {
        __typename: "Courier",
        id: string,
        name?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        transportationMode?: TransportationModes | null,
        sub: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Restaurant?:  {
        __typename: "Restaurant",
        id: string,
        name: string,
        deliveryFee: number,
        maxDeliveryTime: number,
        minDeliveryTime: number,
        rating?: number | null,
        address: string,
        latitude: number,
        longitude: number,
        adminSub?: string | null,
        icon?: string | null,
        images?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID: string,
      OrderDishes?:  {
        __typename: "ModelOrderDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderCourierId?: string | null,
      orderRestaurantId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      total: number,
      status?: OrderStatus | null,
      Courier?:  {
        __typename: "Courier",
        id: string,
        name?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        transportationMode?: TransportationModes | null,
        sub: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Restaurant?:  {
        __typename: "Restaurant",
        id: string,
        name: string,
        deliveryFee: number,
        maxDeliveryTime: number,
        minDeliveryTime: number,
        rating?: number | null,
        address: string,
        latitude: number,
        longitude: number,
        adminSub?: string | null,
        icon?: string | null,
        images?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID: string,
      OrderDishes?:  {
        __typename: "ModelOrderDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderCourierId?: string | null,
      orderRestaurantId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OrdersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserIDQuery = {
  ordersByUserID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      total: number,
      status?: OrderStatus | null,
      Courier?:  {
        __typename: "Courier",
        id: string,
        name?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        transportationMode?: TransportationModes | null,
        sub: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      Restaurant?:  {
        __typename: "Restaurant",
        id: string,
        name: string,
        deliveryFee: number,
        maxDeliveryTime: number,
        minDeliveryTime: number,
        rating?: number | null,
        address: string,
        latitude: number,
        longitude: number,
        adminSub?: string | null,
        icon?: string | null,
        images?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userID: string,
      OrderDishes?:  {
        __typename: "ModelOrderDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderCourierId?: string | null,
      orderRestaurantId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCourierQueryVariables = {
  id: string,
};

export type GetCourierQuery = {
  getCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCouriersQueryVariables = {
  filter?: ModelCourierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCouriersQuery = {
  listCouriers?:  {
    __typename: "ModelCourierConnection",
    items:  Array< {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCouriersQueryVariables = {
  filter?: ModelCourierFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCouriersQuery = {
  syncCouriers?:  {
    __typename: "ModelCourierConnection",
    items:  Array< {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      address: string,
      latitude: number,
      longitude: number,
      sub: string,
      avatar?: string | null,
      Orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      address: string,
      latitude: number,
      longitude: number,
      sub: string,
      avatar?: string | null,
      Orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDishQueryVariables = {
  id: string,
};

export type GetDishQuery = {
  getDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDishesQuery = {
  listDishes?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDishesQueryVariables = {
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDishesQuery = {
  syncDishes?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DishesByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DishesByRestaurantIDQuery = {
  dishesByRestaurantID?:  {
    __typename: "ModelDishConnection",
    items:  Array< {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRestaurantsQuery = {
  syncRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateOrderDishSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDishFilterInput | null,
};

export type OnCreateOrderDishSubscription = {
  onCreateOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type OnUpdateOrderDishSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDishFilterInput | null,
};

export type OnUpdateOrderDishSubscription = {
  onUpdateOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type OnDeleteOrderDishSubscriptionVariables = {
  filter?: ModelSubscriptionOrderDishFilterInput | null,
};

export type OnDeleteOrderDishSubscription = {
  onDeleteOrderDish?:  {
    __typename: "OrderDish",
    id: string,
    quantity?: number | null,
    orderID: string,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderDishDishId?: string | null,
  } | null,
};

export type OnCreateBasketDishSubscriptionVariables = {
  filter?: ModelSubscriptionBasketDishFilterInput | null,
};

export type OnCreateBasketDishSubscription = {
  onCreateBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type OnUpdateBasketDishSubscriptionVariables = {
  filter?: ModelSubscriptionBasketDishFilterInput | null,
};

export type OnUpdateBasketDishSubscription = {
  onUpdateBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type OnDeleteBasketDishSubscriptionVariables = {
  filter?: ModelSubscriptionBasketDishFilterInput | null,
};

export type OnDeleteBasketDishSubscription = {
  onDeleteBasketDish?:  {
    __typename: "BasketDish",
    id: string,
    quantity: number,
    Dish?:  {
      __typename: "Dish",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      salePrice: number,
      images?: Array< string | null > | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    basketID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    basketDishDishId?: string | null,
  } | null,
};

export type OnCreateBasketSubscriptionVariables = {
  filter?: ModelSubscriptionBasketFilterInput | null,
};

export type OnCreateBasketSubscription = {
  onCreateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBasketSubscriptionVariables = {
  filter?: ModelSubscriptionBasketFilterInput | null,
};

export type OnUpdateBasketSubscription = {
  onUpdateBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBasketSubscriptionVariables = {
  filter?: ModelSubscriptionBasketFilterInput | null,
};

export type OnDeleteBasketSubscription = {
  onDeleteBasket?:  {
    __typename: "Basket",
    id: string,
    BasketDishes?:  {
      __typename: "ModelBasketDishConnection",
      items:  Array< {
        __typename: "BasketDish",
        id: string,
        quantity: number,
        basketID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        basketDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    userID: string,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    total: number,
    status?: OrderStatus | null,
    Courier?:  {
      __typename: "Courier",
      id: string,
      name?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      transportationMode?: TransportationModes | null,
      sub: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    Restaurant?:  {
      __typename: "Restaurant",
      id: string,
      name: string,
      deliveryFee: number,
      maxDeliveryTime: number,
      minDeliveryTime: number,
      rating?: number | null,
      address: string,
      latitude: number,
      longitude: number,
      adminSub?: string | null,
      icon?: string | null,
      images?: Array< string | null > | null,
      Dishes?:  {
        __typename: "ModelDishConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Baskets?:  {
        __typename: "ModelBasketConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    OrderDishes?:  {
      __typename: "ModelOrderDishConnection",
      items:  Array< {
        __typename: "OrderDish",
        id: string,
        quantity?: number | null,
        orderID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderDishDishId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderCourierId?: string | null,
    orderRestaurantId?: string | null,
  } | null,
};

export type OnCreateCourierSubscriptionVariables = {
  filter?: ModelSubscriptionCourierFilterInput | null,
};

export type OnCreateCourierSubscription = {
  onCreateCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCourierSubscriptionVariables = {
  filter?: ModelSubscriptionCourierFilterInput | null,
};

export type OnUpdateCourierSubscription = {
  onUpdateCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCourierSubscriptionVariables = {
  filter?: ModelSubscriptionCourierFilterInput | null,
};

export type OnDeleteCourierSubscription = {
  onDeleteCourier?:  {
    __typename: "Courier",
    id: string,
    name?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    transportationMode?: TransportationModes | null,
    sub: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    sub: string,
    avatar?: string | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        total: number,
        status?: OrderStatus | null,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        orderCourierId?: string | null,
        orderRestaurantId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnCreateDishSubscription = {
  onCreateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnUpdateDishSubscription = {
  onUpdateDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDishSubscriptionVariables = {
  filter?: ModelSubscriptionDishFilterInput | null,
};

export type OnDeleteDishSubscription = {
  onDeleteDish?:  {
    __typename: "Dish",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    salePrice: number,
    images?: Array< string | null > | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    deliveryFee: number,
    maxDeliveryTime: number,
    minDeliveryTime: number,
    rating?: number | null,
    address: string,
    latitude: number,
    longitude: number,
    adminSub?: string | null,
    icon?: string | null,
    images?: Array< string | null > | null,
    Dishes?:  {
      __typename: "ModelDishConnection",
      items:  Array< {
        __typename: "Dish",
        id: string,
        name: string,
        description?: string | null,
        price: number,
        salePrice: number,
        images?: Array< string | null > | null,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Baskets?:  {
      __typename: "ModelBasketConnection",
      items:  Array< {
        __typename: "Basket",
        id: string,
        userID: string,
        restaurantID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
