import { useForm, SubmitHandler /*Controller*/ } from "react-hook-form";

import { useCartContext } from "../Cart/cartContext";
import { ActionType } from "../Cart/cartContext";
import Button from "../../Components/Button";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
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
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  const handleCancelCheckout = () => {
    reset();
    clearErrors(formState.errors);
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
        {...register("state", { required: true })}
        placeholder="State"
        className="bg-white border border-black rounded-md p-2 outline-none"
      />
      {errors.state && (
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
