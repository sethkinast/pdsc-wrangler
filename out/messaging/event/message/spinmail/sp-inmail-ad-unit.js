import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class SpInmailAdUnit extends Model {
  static schema = {
    /**
     * @property adUnit
     * The ad to be displayed with this sponsored inmail
     */
    adUnit: Image,

    /**
     * @property adUnitTracking
     * Ad click tracking url for adUnit
     */
    adUnitTracking: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "messaging/event/message/spinmail/sp-inmail-ad-unit"
  }
}
