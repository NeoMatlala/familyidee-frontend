import useWretch from "~/composables/use-wretch";
import type { RegisterRequest, RegisterResponse } from "./types";
import { type UseMutationOptions, useMutation } from "@tanstack/vue-query";

const useRegister = (payload?: {
  options?: UseMutationOptions<
    RegisterResponse,
    unknown,
    RegisterRequest,
    unknown
  >;
}) =>
  useMutation({
    mutationFn: async (payload: RegisterRequest): Promise<RegisterResponse> =>
      await useWretch("base")
        .url("/api/auth/register")
        .json(payload)
        .post()
        .json<RegisterResponse>()
        .then((res) => res)
        .catch((err) => {
          throw err;
        }),
    ...payload?.options,
  });

const mutations = { useRegister };

export const authApiFactory = { mutations };
