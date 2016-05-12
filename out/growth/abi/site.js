import Model from 'app/api/NotTerribleModel';

export default class Site extends Model {
  static schema = {
    /**
     * @property url
     * Url of the website.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property name
     * Name of the website.
     */
    name: Model.STRING,

    /**
     * @property siteType
     * Type of the site - blog, homepage, company.
     */
    siteType: Model.STRING,

    modelType: "growth/abi/site"
  }
}
