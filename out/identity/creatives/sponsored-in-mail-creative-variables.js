import Model from 'app/api/NotTerribleModel';

export default class SponsoredInMailCreativeVariables extends Model {
  static schema = {
    /**
     * @property content
     * Reference to the content of the InMail.
     */
    content: Model.STRING,

    modelType: "identity/creatives/sponsored-in-mail-creative-variables"
  }
}
