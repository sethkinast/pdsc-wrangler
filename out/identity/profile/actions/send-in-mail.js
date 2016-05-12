import Model from 'app/api/NotTerribleModel';

export default class SendInMail extends Model {
  static schema = {
    /**
     * @property upsell
     * optional boolean value indicating if this SendInMail is an upsell or not.  true means it is an upsell and false or not present means it is not an upsell
     */
    upsell: Model.BOOL,

    modelType: "identity/profile/actions/send-in-mail"
  }
}
