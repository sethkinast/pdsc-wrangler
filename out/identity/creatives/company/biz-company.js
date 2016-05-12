import Model from 'app/api/NotTerribleModel';
import BizMetadata from "app/models/identity/creatives/company/biz-metadata";
import BizDescription from "app/models/identity/creatives/company/biz-description";
import BizEmployeeCountRange from "app/models/identity/creatives/company/biz-employee-count-range";
import BizExchangeSymbol from "app/models/identity/creatives/company/biz-exchange-symbol";
import BizIndustry from "app/models/identity/creatives/company/biz-industry";
import BizLocation from "app/models/identity/creatives/company/biz-location";
import BizName from "app/models/identity/creatives/company/biz-name";
import BizRelationship from "app/models/identity/creatives/company/biz-relationship";
import BizRevenue from "app/models/identity/creatives/company/biz-revenue";
import BizCroppedImage from "app/models/identity/creatives/company/biz-cropped-image";
import BizCompanyAttributes from "app/models/identity/creatives/company/biz-company-attributes";
import BizImage from "app/models/identity/creatives/company/biz-image";

export default class BizCompany extends Model {
  static schema = {
    /**
     * @property companyId
     * unique id of company
     */
    companyId: Model.INT,

    /**
     * @property universalName
     * canonical name
     */
    universalName: Model.STRING,

    /**
     * @property allEmployeesAsAdmins
     * setting for whether all employees will automatically be admins of the company page
     */
    allEmployeesAsAdmins: Model.BOOL,

    /**
     * @property blogRssUrl
     * blog url
     */
    blogRssUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property creationTime
     * time the company was created
     */
    creationTime: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property creator
     * member urn of company page's creator
     */
    creator: Model.STRING,

    /**
     * @property dateRange
     * date range
     */
    dateRange: Model.foreignUrn('com.linkedin.common.DateRange'),

    /**
     * @property largeGraphic
     * urn of big graphic on company page
     */
    largeGraphic: Model.STRING,

    /**
     * @property lastEditor
     * urn of last person who edited the company page
     */
    lastEditor: Model.STRING,

    /**
     * @property lastModifiedTime
     * time of the last modification of the company page
     */
    lastModifiedTime: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property logo
     * urn of the company logo (media)
     */
    logo: Model.STRING,

    /**
     * @property dataVersion
     * This is incremented each time this company is updated and is for optimistic locking.
     */
    dataVersion: Model.INT,

    /**
     * @property squareLogo
     * urn of the square logo for the company.
     */
    squareLogo: Model.STRING,

    /**
     * @property stockSymbol
     * company's stock symbol, if it has one.
     */
    stockSymbol: Model.STRING,

    /**
     * @property twitterId
     * Twitter handle for the company, if it has one.
     */
    twitterId: Model.STRING,

    /**
     * @property websiteUrl
     * Official website url for the company.
     */
    websiteUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property administrators
     * Member urns of company admins.
     */
    administrators: Model.STRING,

    /**
     * @property metaData
     * Other metadata about the company
     */
    metaData: BizMetadata,

    /**
     * @property specialities
     * Things this company specializes in
     */
    specialities: Model.STRING,

    /**
     * @property status
     * Status of the company
     */
    status: Model.STRING,

    /**
     * @property companyType
     * type of company
     */
    companyType: Model.STRING,

    /**
     * @property descriptions
     * alternative descriptions of the company
     */
    descriptions: BizDescription,

    /**
     * @property employeeCountRange
     * company size, in ranges instead of exact count.
     */
    employeeCountRange: BizEmployeeCountRange,

    /**
     * @property exchangeSymbol
     * exchange symbol.
     */
    exchangeSymbol: BizExchangeSymbol,

    /**
     * @property industries
     * industry this company belongs to.
     */
    industries: BizIndustry,

    /**
     * @property locations
     * locations this company is in.
     */
    locations: BizLocation,

    /**
     * @property names
     * Alternative names for this company.
     */
    names: BizName,

    /**
     * @property relationships
     * relationships with other companies on LinkedIn
     */
    relationships: BizRelationship,

    /**
     * @property revenues
     * revenues of this company
     */
    revenues: BizRevenue,

    /**
     * @property heroImage
     * hero image
     */
    heroImage: BizCroppedImage,

    /**
     * @property attributes
     * This field contains boolean attributes represented in the 'attributes' bitmap of a BizProfile object
     */
    attributes: BizCompanyAttributes,

    /**
     * @property active
     * Whether the company page is still active.
     */
    active: Model.BOOL,

    /**
     * @property featuredUpdates
     * Urns of the company page's featured updates.
     */
    featuredUpdates: Model.STRING,

    /**
     * @property emailDomains
     * company email domains
     */
    emailDomains: Model.STRING,

    /**
     * @property groups
     * urns of groups related to this company.
     */
    groups: Model.STRING,

    /**
     * @property localizedName
     * This field contains the derived localized company name.
     */
    localizedName: Model.STRING,

    /**
     * @property images
     * Company images, including logos
     */
    images: BizImage,

    /**
     * @property ContentCertToken
     * Content Certification Token for use in UCF
     */
    ContentCertToken: Model.STRING,

    modelType: "identity/creatives/company/biz-company"
  }
}
