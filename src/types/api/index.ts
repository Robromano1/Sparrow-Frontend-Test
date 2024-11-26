/**
 * Pizza API Documentation
 * Base URL: https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home
 */

import {
  HiringFrontendTakeHomeOrderRequest,
  HiringFrontendTakeHomeOrderResponse,
  HiringFrontendTakeHomeOrderStatus,
  HiringFrontendTakeHomePizzaSize,
  HiringFrontendTakeHomePizzaToppings,
  HiringFrontendTakeHomeToppingQuantity,
  SpecialtyPizza,
} from "..";

/**
 * Response type for pizza pricing endpoint
 */
interface GetPizzaPricingResponse {
  size: Record<HiringFrontendTakeHomePizzaSize, number>;
  toppingPrices: Record<
    HiringFrontendTakeHomePizzaToppings,
    Record<HiringFrontendTakeHomeToppingQuantity, number>
  >;
}

/**
 * API Endpoint Types
 */

/**
 * GET /specialty-pizzas
 * Retrieves the list of specialty pizzas
 */
// Ignoring these errors for now since these types are defined but never used.
// @ts-expect-error: Not being used
type GetAllSpecialtyPizzasRequest = () => Promise<{
  specialtyPizzas: SpecialtyPizza[];
}>;

/**
 * GET /pizza-pricing
 * Retrieves pizza pricing information
 */
// @ts-expect-error: Not being used
type GetPizzaPricingRequest = () => Promise<GetPizzaPricingResponse>;

/**
 * POST /pizza
 * Creates a new order in the Checkout view
 */
// @ts-expect-error: Not being used
type CreatePizzaOrderRequest = (
  order: HiringFrontendTakeHomeOrderRequest
) => Promise<{
  order: HiringFrontendTakeHomeOrderRequest;
}>;

/**
 * GET /pizzas
 * Retrieves all orders for a specific location in the Pizza Orders Table view
 */
// @ts-expect-error: Not being used
type GetAllOrdersRequest = (locationId: string) => Promise<{
  orders: HiringFrontendTakeHomeOrderResponse[];
}>;

/**
 * GET /pizza
 * Retrieves customer's order details by orderId for the Check on your order view
 */
// @ts-expect-error: Not being used
type GetPizzaOrderByIdRequest = (orderId: string) => Promise<{
  order: HiringFrontendTakeHomeOrderRequest;
}>;

/**
 * PUT /pizza/status
 * Updates the order status by the restaurant
 */
// @ts-expect-error: Not being used
type UpdatePizzaOrderStatusRequest = (
  orderId: string,
  status: HiringFrontendTakeHomeOrderStatus
) => Promise<{
  order: HiringFrontendTakeHomeOrderResponse;
}>;

/**
 * POST /pizza/cancel
 * Cancels an order by the customer
 * Note: Only orders with status "pending" can be cancelled
 */
// @ts-expect-error: Not being used
type CancelPizzaOrderRequest = (orderId: string) => Promise<{
  order: HiringFrontendTakeHomeOrderResponse;
}>;
