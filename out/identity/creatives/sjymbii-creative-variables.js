import Model from 'app/api/NotTerribleModel';

export default class SjymbiiCreativeVariables extends Model {
  static schema = {
    /**
     * @property title
     * Title of the creative
     */
    title: Model.STRING,

    /**
     * @property image
     * Image for the creative
     */
    image: Model.STRING,

    /**
     * @property job
     * The job
     */
    job: Model.STRING,

    /**
     * @property jobText
     * Text about the job
     */
    jobText: Model.STRING,

    /**
     * @property companyText
     * Text about the company
     */
    companyText: Model.STRING,

    /**
     * @property activity
     * URN of the sponsored activity
     */
    activity: Model.STRING,

    modelType: "identity/creatives/sjymbii-creative-variables"
  }
}
