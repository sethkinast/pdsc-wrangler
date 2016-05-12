import Model from 'app/api/NotTerribleModel';

export default class SlideshareLeadgenCreativeVariables extends Model {
  static schema = {
    /**
     * @property slideshareLeadCampaign
     * Reference to the slideshare lead campaign.
     */
    slideshareLeadCampaign: Model.STRING,

    /**
     * @property customText
     * Custom text for the lead form
     */
    customText: Model.STRING,

    modelType: "identity/creatives/slideshare-leadgen-creative-variables"
  }
}
