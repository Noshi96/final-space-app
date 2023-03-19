export interface IAddNewCharacterSchemaModel {
  type: string;
  properties: {
    [value: string]: IProperties;
  };
}

interface IProperties {
  type: string;
  maxLength: number;
}
