import Model from 'app/api/NotTerribleModel';

export default class CopyLink extends Model {
  static schema = {
    /**
     * @property permalink
     * Permalink to copy
     */
    permalink: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "feed/actions/copy-link"
  }
}
