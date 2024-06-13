import { HTTP } from "../instance";

export interface ICharParams {
  name?: string;
  type?: string;
  status?: string;
  gender?: string;
}

export const getCharacters = (params: ICharParams) => {
  return HTTP.get("/character", {
    params: {
      ...params,
    },
  });
};