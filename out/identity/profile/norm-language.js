import Model from 'app/api/NotTerribleModel';
import LanguageUrn from "app/models/common/language-urn";
import LanguageProficiency from "app/models/identity/profile/language-proficiency";

export default class NormLanguage extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this language
     */
    entityUrn: LanguageUrn,

    /**
     * @property name
     * Name of the language as entered by the user.
     */
    name: Model.STRING,

    /**
     * @property proficiency
     * Proficiency attained by the member in this language.
     */
    proficiency: LanguageProficiency,

    modelType: "identity/profile/norm-language"
  }
}
