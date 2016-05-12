import Model from 'app/api/NotTerribleModel';

export default class TextAdCreativeVariables extends Model {
  static schema = {
    /**
     * @property title
     * Title of the creative
     */
    title: Model.STRING,

    /**
     * @property text
     * Body text of the creative
     */
    text: Model.STRING,

    /**
     * @property image
     * Image for the creative
     */
    image: Model.STRING,

    modelType: "identity/creatives/text-ad-creative-variables"
  }
}
