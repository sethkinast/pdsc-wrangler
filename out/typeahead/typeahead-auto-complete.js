import Model from 'app/api/NotTerribleModel';

export default class TypeaheadAutoComplete extends Model {
  static schema = {
    /**
     * @property displayText
     * Optional display text for auto-complete search suggestion. Adds context to the TypeaheadHit text to let users know that this is a query completion. e.g. "See all results for <autocompletion>"
     */
    displayText: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "typeahead/typeahead-auto-complete"
  }
}
