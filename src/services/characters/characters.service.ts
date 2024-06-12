import { HTTP } from "../instance";

export interface ICharParams {
  name?: string;
}

export const getCharacters = (params: ICharParams) => {
  return HTTP.get("/character", {
    params: {
      ...params,
    },
  });
};
