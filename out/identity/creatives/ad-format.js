import Model from 'app/api/NotTerribleModel';

export default class AdFormat extends Model {
  static schema = {
    /**
     * @property name
     * Name of the format (e.g. f300x250_exp_1_1).  This is the primary key.
     */
    name: Model.STRING,

    /**
     * @property filename
     * Filename of the format (e.g. f300x250_exp_1_1.tl)
     */
    filename: Model.STRING,

    /**
     * @property campaignCounts
     * Count of each campaign type this format can render.  Key is campaign type (e.g. CUSTOM)
     */
    campaignCounts: Model.foreignUrn('[object Object]'),

    /**
     * @property fkMinCampaignCounts
     * Minimum count of each campaign type this format needs to render. If not specified fkMinCampaignCount == campaignCount
     */
    fkMinCampaignCounts: Model.foreignUrn('[object Object]'),

    /**
     * @property version
     * Version of this format
     */
    version: Model.FLOAT,

    /**
     * @property size
     * Size of format in form width x height (e.g. 300x250)
     */
    size: Model.STRING,

    modelType: "identity/creatives/ad-format"
  }
}
