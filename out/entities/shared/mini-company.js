import Model from 'app/api/NotTerribleModel';
import TrackingObject from "app/models/common/tracking-object";
import MiniCompanyUrn from "app/models/common/mini-company-urn";
import Image from "app/models/common/image";

export default class MiniCompany extends Model {
  static schema = Object.assign({}, TrackingObject.schema, {
    /**
     * @property entityUrn
     * Identifier for this mini company.
     */
    entityUrn: MiniCompanyUrn,

    /**
     * @property name
     * Name of the company.
     */
    name: Model.STRING,

    /**
     * @property logo
     * Logo image
     */
    logo: Image,

    /**
     * @property showcase
     * Whether this company is a showcase
     */
    showcase: Model.BOOL,

    modelType: "entities/shared/mini-company"
  })
}
