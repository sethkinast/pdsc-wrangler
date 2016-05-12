import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/relationships/shared/annotation/annotated-text";
import TypeaheadProfile from "app/models/typeahead/typeahead-profile";
import TypeaheadAutoComplete from "app/models/typeahead/typeahead-auto-complete";
import TypeaheadCompany from "app/models/typeahead/typeahead-company";
import TypeaheadSchool from "app/models/typeahead/typeahead-school";
import TypeaheadTitle from "app/models/typeahead/typeahead-title";
import TypeaheadFieldOfStudy from "app/models/typeahead/typeahead-field-of-study";
import TypeaheadRegion from "app/models/typeahead/typeahead-region";
import TypeaheadDegree from "app/models/typeahead/typeahead-degree";
import TypeaheadGroup from "app/models/typeahead/typeahead-group";
import TypeaheadSiteFeature from "app/models/typeahead/typeahead-site-feature";
import TypeaheadShowcase from "app/models/typeahead/typeahead-showcase";
import TypeaheadSkill from "app/models/typeahead/typeahead-skill";
import TypeaheadSuggestion from "app/models/typeahead/typeahead-suggestion";
import TypeaheadCountry from "app/models/typeahead/typeahead-country";
import TypeaheadState from "app/models/typeahead/typeahead-state";
import TypeaheadCity from "app/models/typeahead/typeahead-city";
import TypeaheadPostalCode from "app/models/typeahead/typeahead-postal-code";
import TypeaheadIndustry from "app/models/typeahead/typeahead-industry";

export default class TypeaheadHit extends Model {
  static schema = {
    /**
     * @property text
     * The text of typeahead hit with highlight information.
     */
    text: AnnotatedText,

    /**
     * @property subtext
     * The subtext of typeahead hit
     */
    subtext: Model.STRING,

    /**
     * @property hitInfo
     * Typeahead hit infos specific to its type.
     */
    hitInfo: Model.oneOf(TypeaheadProfile, TypeaheadAutoComplete, TypeaheadCompany, TypeaheadSchool, TypeaheadTitle, TypeaheadFieldOfStudy, TypeaheadRegion, TypeaheadDegree, TypeaheadGroup, TypeaheadSiteFeature, TypeaheadShowcase, TypeaheadSkill, TypeaheadSuggestion, TypeaheadCountry, TypeaheadState, TypeaheadCity, TypeaheadPostalCode, TypeaheadIndustry),

    modelType: "typeahead/typeahead-hit"
  }
}
