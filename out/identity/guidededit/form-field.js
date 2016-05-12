import Model from 'app/api/NotTerribleModel';
import FieldNames from "app/models/identity/guidededit/field-names";
import Industry from "app/models/common/industry";

export default class FormField extends Model {
  static schema = {
    /**
     * @property fieldName
     * An identifier for the form field. (Ex: company)
     */
    fieldName: FieldNames,

    /**
     * @property prefillValues
     * A dictionary of values to prefill for the form field. (Ex: {companyName:"Linkedin", companyId:1337}) Used to have a ticket VOY-994 to comment this field out.
     */
    prefillValues: Industry,

    modelType: "identity/guidededit/form-field"
  }
}
