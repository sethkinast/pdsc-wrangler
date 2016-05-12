import Model from 'app/api/NotTerribleModel';

export default class Credits extends Model {
  static schema = {
    /**
     * @property inMail
     * Number of InMail credits a premium member has.
     */
    inMail: Model.INT,

    modelType: "messaging/credits"
  }
}
