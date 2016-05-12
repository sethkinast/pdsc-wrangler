import Model from 'app/api/NotTerribleModel';
import IndustryUrn from "app/models/common/industry-urn";

export default class Industry extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this industry.
     */
    entityUrn: IndustryUrn,

    /**
     * @property localizedName
     * The localized name corresponding to this industry.
     */
    localizedName: Model.STRING,

    modelType: "common/industry"
  }
}
