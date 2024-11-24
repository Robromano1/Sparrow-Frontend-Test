import { useEffect, useState /*useEffect*/ } from "react";

// import {
//   HiringFrontendTakeHomeOrderRequest,
//   HiringFrontendTakeHomeOrderResponse,
//   HiringFrontendTakeHomeOrderStatus,
//   HiringFrontendTakeHomePizzaSize,
//   HiringFrontendTakeHomePizzaToppings,
//   HiringFrontendTakeHomeToppingQuantity,
//   SpecialtyPizza,
// } from "../types/index";

export type HTTPMethods = "PUT" | "POST" | "GET" | "DELETE";

interface ApiOptions {
  method?: HTTPMethods;
  headers?: Record<string, string>;
  body?: BodyInit | null | undefined;
}

interface ApiResponse {
  data: T | null;
  isLoading: boolean;
  error: unknown | null;
  //pizzaFetch: (url: string, method: HTTPMethods) => Promise<void>;
}

export const useCustomFetch = (
  url: string,
  options?: ApiOptions
): ApiResponse => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  useEffect(() => {
    const pizzaFetch = async () => {
      if (url.length) {
        setIsLoading(true);

        try {
          //let response;
          // switch (method) {
          //   case "GET":
          //     response = await fetch(url);
          //     break;
          //   default:
          //     response = await fetch(url, {
          //       method,
          //       body,
          //     });
          //     break;
          // }
          const response = await fetch(url, options);
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    pizzaFetch();
  }, [url, options]);

  return { data, error, isLoading };

  // const pizzaFetch = async (url: string, method: HTTPMethods) => {
  //   if (url.length) {
  //     setIsLoading(true);

  //     try {
  //       let response;

  //       switch (method) {
  //         case "GET":
  //           response = await fetch(url);
  //           break;
  //         default:
  //           response = await fetch(url, {
  //             method,
  //             body,
  //           });
  //           break;
  //       }
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  // };

  // return { data, isLoading, error, pizzaFetch };
  //return { data, error, isLoading };
};
