import Model from 'app/api/NotTerribleModel';

export default class CareerSlide extends Model {
  static schema = {
    /**
     * @property code
     * Contains a unique identifier for the slideshare.
     */
    code: Model.STRING,

    /**
     * @property richMediaUrl
     * Complete URL for the slideshare.
     */
    richMediaUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "entities/company/career-slide"
  }
}
