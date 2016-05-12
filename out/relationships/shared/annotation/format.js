import Model from 'app/api/NotTerribleModel';
import FormatType from "app/models/relationships/shared/annotation/format-type";

export default class Format extends Model {
  static schema = {
    /**
     * @property type
     * Type of the formatting to apply
     */
    type: FormatType,

    modelType: "relationships/shared/annotation/format"
  }
}
