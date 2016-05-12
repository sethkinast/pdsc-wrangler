import Model from 'app/api/NotTerribleModel';
import PremiumFeatureType from "app/models/premium/premium-feature-type";

export default class PremiumFeature extends Model {
  static schema = {
    /**
     * @property title
     * The one-line summary of the feature
     */
    title: Model.STRING,

    /**
     * @property desc
     * The detail description of the feature
     */
    desc: Model.STRING,

    /**
     * @property summarized
     * Whether or not this feature is summarized from two or more individual features
     */
    summarized: Model.BOOL,

    /**
     * @property type
     * The type of this feature
     */
    type: PremiumFeatureType,

    modelType: "premium/premium-feature"
  }
}
