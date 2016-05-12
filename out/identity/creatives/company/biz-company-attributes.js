import Model from 'app/api/NotTerribleModel';

export default class BizCompanyAttributes extends Model {
  static schema = {
    /**
     * @property showNews
     * Show news about the company
     */
    showNews: Model.BOOL,

    /**
     * @property showPastEmployees
     * Show past employees in the employees list
     */
    showPastEmployees: Model.BOOL,

    /**
     * @property owns300x250RightAdSlot
     * Whether the company owns an ad slot in the right panel
     */
    owns300x250RightAdSlot: Model.BOOL,

    /**
     * @property paidCareers
     * Whether the company uses paid careers feature.
     */
    paidCareers: Model.BOOL,

    /**
     * @property showAnalytics
     * Whether analytics will be shown for this company page.
     */
    showAnalytics: Model.BOOL,

    /**
     * @property paidSilverCareers
     * Whether the company has bought paid silver careers, with more features than paid careers.
     */
    paidSilverCareers: Model.BOOL,

    /**
     * @property paidProducts
     * Whether the company has bought paid products.
     */
    paidProducts: Model.BOOL,

    /**
     * @property silverProducts
     * Whether the company has bought silver products, with more features than paid products.
     */
    silverProducts: Model.BOOL,

    /**
     * @property paidPlatinumCareers
     * Whether the company has bought paid platinum careers, with more features than paid silver careers.
     */
    paidPlatinumCareers: Model.BOOL,

    /**
     * @property enableStatusUpdate
     * Whether the company has enabled status update.
     */
    enableStatusUpdate: Model.BOOL,

    /**
     * @property showBrandTree
     * Whether the company page shows their brand tree.
     */
    showBrandTree: Model.BOOL,

    /**
     * @property useParentCareers
     * Whether the company page displays jobs from parent company page.
     */
    useParentCareers: Model.BOOL,

    /**
     * @property disableThirdPartyNews
     * Whether the company disables third party news on its company page.
     */
    disableThirdPartyNews: Model.BOOL,

    /**
     * @property paidSilverPlusCareers
     * Whether the company bought paid silver plus careers.
     */
    paidSilverPlusCareers: Model.BOOL,

    /**
     * @property paidGoldPlusCareers
     * Whether the company bought paid gold plus careers.
     */
    paidGoldPlusCareers: Model.BOOL,

    modelType: "identity/creatives/company/biz-company-attributes"
  }
}
