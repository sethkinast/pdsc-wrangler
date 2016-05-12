import Model from 'app/api/NotTerribleModel';
import PublicationUrn from "app/models/common/publication-urn";

export default class CorePublication extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this publication
     */
    entityUrn: PublicationUrn,

    /**
     * @property name
     * Name of the publication, provided by the user.
     */
    name: Model.STRING,

    /**
     * @property publisher
     * Publisher for this publication.
     */
    publisher: Model.STRING,

    /**
     * @property date
     * Start date of the publication.
     */
    date: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property url
     * End date of the project.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property description
     * Description of the project.
     */
    description: Model.STRING,

    modelType: "identity/profile/core-publication"
  }
}
