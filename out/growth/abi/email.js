import Model from 'app/api/NotTerribleModel';

export default class Email extends Model {
  static schema = {
    /**
     * @property emailAddress
     * Using the Email address record already defined in commons.
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property primary
     * Indicates if this email is the primary email address.
     */
    primary: Model.BOOL,

    /**
     * @property type
     * The user generated types of the email like Home, Work, custom etc.
     */
    type: Model.STRING,

    modelType: "growth/abi/email"
  }
}
