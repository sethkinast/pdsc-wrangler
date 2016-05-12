import Model from 'app/api/NotTerribleModel';

export default class CustomCreativeVariables extends Model {
  static schema = {
    /**
     * @property attributes
     * Custom attributes
     */
    attributes: Model.foreignUrn('[object Object]'),

    modelType: "identity/creatives/custom-creative-variables"
  }
}
