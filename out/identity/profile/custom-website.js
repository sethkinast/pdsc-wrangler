import Model from 'app/api/NotTerribleModel';

export default class CustomWebsite extends Model {
  static schema = {
    /**
     * @property label
     * This label is used to give a succinct description of the type of link.
     */
    label: Model.STRING,

    modelType: "identity/profile/custom-website"
  }
}
