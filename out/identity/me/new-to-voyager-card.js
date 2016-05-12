import Model from 'app/api/NotTerribleModel';

export default class NewToVoyagerCard extends Model {
  static schema = {
    /**
     * @property legoTrackingToken
     * The Lego tracking token used to send Lego tracking events when this card is shown or interacted with.
     */
    legoTrackingToken: Model.STRING,

    modelType: "identity/me/new-to-voyager-card"
  }
}
