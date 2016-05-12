import Model from 'app/api/NotTerribleModel';
import Duration from "app/models/common/duration";
import DateRange from "app/models/common/date-range";
import OverlapType from "app/models/identity/shared/profileHighlights/overlap-type";

export default class OverlapInfo extends Model {
  static schema = {
    /**
     * @property detail
     * DEPRECATED: Please use overlapDetail instead. The overlap date range or gap duration. This could be a date range like MM/YYYY to MM/YYYY or a duration like X years and Y months.
     */
    detail: Model.oneOf(Model.foreignUrn('com.linkedin.common.DateRange'), Duration),

    /**
     * @property overlapDetail
     * The overlap date range or gap duration. This could be a date range like MM/YYYY to MM/YYYY or a duration like X years and Y months.
     */
    overlapDetail: Model.oneOf(DateRange, Duration),

    /**
     * @property overlapType
     * Type of overlap. Please see the documentation of OverlapType for details.
     */
    overlapType: OverlapType,

    modelType: "identity/shared/profileHighlights/overlap-info"
  }
}
