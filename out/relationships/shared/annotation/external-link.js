import Model from 'app/api/NotTerribleModel';

export default class ExternalLink extends Model {
  static schema = {
    /**
     * @property link
     * an external link to some web page
     */
    link: Model.foreignUrn('com.linkedin.restli.common.Link'),

    modelType: "relationships/shared/annotation/external-link"
  }
}
