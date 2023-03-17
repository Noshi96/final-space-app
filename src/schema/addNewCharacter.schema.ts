import { IAddNewCharacterSchemaModel } from "models";

export const AddNewCharacterSchema: IAddNewCharacterSchemaModel = {
  type: "object",
  properties: {
    name: {
      type: "string",
      maxLength: 20,
    },
    img_url: {
      type: "string",
      maxLength: 200,
    },
    status: {
      type: "string",
      maxLength: 20,
    },
    species: {
      type: "string",
      maxLength: 20,
    },
    origin: {
      type: "string",
      maxLength: 20,
    },
    occurrence: {
      type: "string",
      maxLength: 20,
    },
    gender: {
      type: "string",
      maxLength: 20,
    },
  },
};
