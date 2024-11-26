import { useForm, SubmitHandler /*Controller*/ } from "react-hook-form";

import { useCustomFetch } from "../../Hooks/CustomFetch";
import { useCartContext } from "../Cart/cartContext";
import { ActionType } from "../Cart/cartContext";
import Button from "../../Components/Button";

// export type Customer = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   deliveryAddress?: {
//     street: string;
//     city: string;
//     state: string;
//     zipCode: string;
//   };
// };

// type OrderItem = {
//   id: string;
//   pizza: Pizza;
// };

// export enum HiringFrontendTakeHomePaymentMethod {
//   CreditCard = "credit_card",
//   Cash = "cash",
// }

// export enum HiringFrontendTakeHomeOrderType {
//   Delivery = "delivery",
//   Pickup = "pickup",
// }

// export type HiringFrontendTakeHomeOrderRequest = {
//   //IMPORTANT: unique identifier for this pizza location (and your test)
//   locationId: string;
//   items: OrderItem[];
//   customer: Customer;
//   totalAmount: number;
//   paymentMethod: HiringFrontendTakeHomePaymentMethod;
//   creditCardNumber?: string;
//   type: HiringFrontendTakeHomeOrderType;
// };

// type: HiringFrontendTakeHomePizzaType;
//   size: HiringFrontendTakeHomePizzaSize;
//   // For specialty pizzas, we only add extra toppings in the toppings array
//   // For custom pizzas, we charge for all toppings
//   toppings?: PizzaTopping[];
//   // For specialty pizzas, we can exclude toppings that are already included in the pizza
//   toppingExclusions?: HiringFrontendTakeHomePizzaToppings[];
//   quantity: number;
//   totalPrice: number;

export type FormData = {
  order: {
    locationId: string;
    items: [
      {
        id: string;
        pizza: {
          size: string;
          toppings?: [{ name: string; quantity: string }];
          toppingExclusions?: string[];
          quantity: number;
          totalPrice: number;
          type: string;
        };
      }
    ];
    customer: {
      firstName: string;
      lastName: string;
      email: string;
      deliveryAddress: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
      };
    };
    totalAmount: number;
    paymentMethod: string;
    creditcardnumber?: number;
    type: string;
  };
};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  locationState: string;
  zipCode: string;
  phoneNumber: string;
};

const CheckoutForm = () => {
  const { state, dispatch } = useCartContext();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    //control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (formData) => buildFormData(formData);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/pizza`;
  const { pizzaFetch, data, isLoading } = useCustomFetch();

  const buildFormData = (formData: Inputs) => {
    // type FormData = {
    //   locationId: string;
    //   items: [
    //     {
    //       id: string;
    //       pizza: string;
    //     }
    //   ];
    //   customer: {
    //     firstname: string;
    //     lastname: string;
    //     email: string;
    //     deliveryAddress: {
    //       street: string;
    //       city: string;
    //       state: string;
    //       zipcode: string;
    //     };
    //   };
    //   totalAmount: number;
    //   paymentMethod: string;
    //   creditcardnumber: number;
    //   type: string;
    // };

    const {
      firstName,
      lastName,
      email,
      address,
      city,
      locationState,
      zipCode,
    } = formData;

    const {
      //extraToppings,
      id,
      excludedToppings,
      size,
      quantity,
      totalPrice,
      type,
    } = state;

    const requestData: FormData = {
      order: {
        locationId: "r-romano",
        items: [
          {
            id,
            pizza: {
              size,
              quantity,
              toppingExclusions: excludedToppings,
              // toppings: extraToppings,
              totalPrice,
              type,
            },
          },
        ],
        customer: {
          firstName,
          lastName,
          email,
          deliveryAddress: {
            street: address,
            city,
            state: locationState,
            zipCode,
          },
        },
        totalAmount: totalPrice,
        paymentMethod: "cash",
        type: "delivery",
      },
    };

    console.log(requestData);
    handleSubmitRequest(requestData);
  };

  const handleSubmitRequest = (requestData: FormData) => {
    pizzaFetch(url, {
      method: "POST",
      body: JSON.stringify(requestData),
    });
  };

  const handleCancelCheckout = () => {
    reset();
    clearErrors();
    dispatch({
      type: ActionType.CANCEL,
      payload: { ...state },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 gap-2">
      {/* <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input {...field} />}
      /> */}
      <label className="font-bold text-md">Contact Information:</label>
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Email"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.email && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">First name:</label>
      <input
        type="text"
        {...register("firstName", { required: true })}
        placeholder="First name"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.firstName && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">Last name:</label>
      <input
        type="text"
        {...register("lastName", { required: true })}
        placeholder="Last name"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.lastName && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">Address:</label>
      <input
        type="text"
        {...register("address", { required: true })}
        placeholder="Address"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.address && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">City:</label>
      <input
        type="text"
        {...register("city", { required: true })}
        placeholder="City"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.city && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">State:</label>
      <input
        type="text"
        {...register("locationState", { required: true })}
        placeholder="State"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.locationState && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">ZIP code:</label>
      <input
        type="text"
        {...register("zipCode", { required: true })}
        placeholder="Zip Code"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.zipCode && (
        <span className="text-red-600">This field is required</span>
      )}
      <label className="font-bold text-md">Phone Number (Optional):</label>
      <input
        type="text"
        {...register("phoneNumber")}
        placeholder="Phone number"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />

      <div className="flex justify-around mt-32">
        <Button
          type="submit"
          className="bg-white w-52 text-black p-2 rounded-lg border border-black hover:bg-black hover:text-white"
          onClick={handleCancelCheckout}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-white w-96 text-black p-2 rounded-lg border border-black hover:bg-black hover:text-white"
        >
          Checkout
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
