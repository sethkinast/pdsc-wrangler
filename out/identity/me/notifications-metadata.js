import Model from 'app/api/NotTerribleModel';

export default class NotificationsMetadata extends Model {
  static schema = {
    /**
     * @property numUnseen
     * Number of unseen cards.
     */
    numUnseen: Model.INT,

    /**
     * @property latestPublishedAt
     * The timestamp when the latest notification card was published on this page. This is optional, because once this is used on the first page, all subsequent cards on the next pages are already marked as seen.
     */
    latestPublishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property nextStart
     * Appropriate next value of the start parameter to supply to request the next page of notifications. When missing, there is no next page.
     */
    nextStart: Model.INT,

    modelType: "identity/me/notifications-metadata"
  }
}
