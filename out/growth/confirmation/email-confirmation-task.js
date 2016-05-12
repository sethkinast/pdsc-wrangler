import Model from 'app/api/NotTerribleModel';

export default class EmailConfirmationTask extends Model {
  static schema = {
    /**
     * @property email
     * If present, the user needs to confirm an email and this is the suggested email to confirm. If missing, it means there is no need to confirm an email or it could not be determined.
     */
    email: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    modelType: "growth/confirmation/email-confirmation-task"
  }
}
