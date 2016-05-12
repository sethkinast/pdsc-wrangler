import Model from 'app/api/NotTerribleModel';
import TrackableEntity from "app/models/common/trackable-entity";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class MiniPosition extends Model {
  static schema = Object.assign({}, TrackableEntity.schema, {
    /**
     * @property miniCompany
     * Company for the position
     */
    miniCompany: MiniCompany,

    /**
     * @property localizedTitle
     * Localized version of title
     */
    localizedTitle: Model.STRING,

    /**
     * @property startMonthYear
     * TODO: remove field. Start month and year at this position.
     */
    startMonthYear: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property startMonthYearOn
     * Start month and year at this position.
     */
    startMonthYearOn: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property endMonthYear
     * TODO: remove field. Last month and year at this position. Missing value means the position is current.
     */
    endMonthYear: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property endMonthYearOn
     * Last month and year at this position. Missing value means the position is current.
     */
    endMonthYearOn: Model.foreignUrn('com.linkedin.common.Date'),

    modelType: "entities/shared/mini-position"
  })
}
