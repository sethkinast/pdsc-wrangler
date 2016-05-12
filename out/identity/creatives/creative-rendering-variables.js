import Model from 'app/api/NotTerribleModel';
import CreativeVariables from "app/models/identity/creatives/creative-variables";
import WorkWithUsCreativeRenderingVariables from "app/models/identity/creatives/work-with-us-creative-rendering-variables";
import PictureYourselfJobCreativeRenderingVariables from "app/models/identity/creatives/picture-yourself-job-creative-rendering-variables";

export default class CreativeRenderingVariables extends Model {
  static schema = Object.assign({}, CreativeVariables.schema, {
    /**
     * @property renderingSubType
     * This will tell you what type of rendering variables you have.
     */
    renderingSubType: Model.oneOf(WorkWithUsCreativeRenderingVariables, PictureYourselfJobCreativeRenderingVariables),

    /**
     * @property internalClickTrackingUrls
     * List of urls used for internal(LinkedIn owned) click tracking
     */
    internalClickTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property externalClickTrackingUrls
     * List of urls used for external click tracking
     */
    externalClickTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property internalImpressionTrackingUrls
     * List of urls used for internal(LinkedIn owned) impression tracking
     */
    internalImpressionTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property externalImpressionTrackingUrls
     * List of urls used for external impression tracking
     */
    externalImpressionTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/creatives/creative-rendering-variables"
  })
}
