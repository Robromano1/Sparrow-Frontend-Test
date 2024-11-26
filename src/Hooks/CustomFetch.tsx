import { useState } from "react";

export type HTTPMethods = "PUT" | "POST" | "GET" | "DELETE";

interface ApiOptions {
  method?: HTTPMethods;
  headers?: Record<string, string>;
  body?: BodyInit | null | undefined;
}

interface ApiResponse {
  // @ts-expect-error: Generic type
  data: T | null;
  isLoading: boolean;
  error: unknown | null;
  pizzaFetch: (url: string, options?: ApiOptions) => Promise<void>;
}

export const useCustomFetch = (): ApiResponse => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const pizzaFetch = async (url: string, options?: ApiOptions) => {
    if (url.length) {
      setIsLoading(true);

      try {
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

  return { pizzaFetch, data, error, isLoading };
};
