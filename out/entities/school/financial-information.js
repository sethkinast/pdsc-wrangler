import Model from 'app/api/NotTerribleModel';

export default class FinancialInformation extends Model {
  static schema = {
    /**
     * @property financialAidAvailable
     * Financial aid availability.
     */
    financialAidAvailable: Model.BOOL,

    /**
     * @property financialAidPercentage
     * Percentage of the student population receiving financial aid.
     */
    financialAidPercentage: Model.FLOAT,

    /**
     * @property inStateTuition
     * In-state tuition cost.
     */
    inStateTuition: Model.STRING,

    /**
     * @property outOfStateTuition
     * Out-of-state tuition cost.
     */
    outOfStateTuition: Model.STRING,

    modelType: "entities/school/financial-information"
  }
}
