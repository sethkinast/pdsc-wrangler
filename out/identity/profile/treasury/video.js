import Model from 'app/api/NotTerribleModel';

export default class Video extends Model {
  static schema = {
    /**
     * @property html
     * The html embed for this video.
     */
    html: Model.STRING,

    /**
     * @property width
     * width of video
     */
    width: Model.INT,

    /**
     * @property height
     * height of video
     */
    height: Model.INT,

    /**
     * @property duration
     * duration of the video
     */
    duration: Model.STRING,

    /**
     * @property url
     * The url for this video
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/profile/treasury/video"
  }
}
