import Model from 'app/api/NotTerribleModel';

export default class CompanyCareerSlidesCode extends Model {
  static schema = {
    /**
     * @property code
     * Contains a unique identifier for the slideshare.
     */
    code: Model.STRING,

    modelType: "entities/company/company-career-slides-code"
  }
}
