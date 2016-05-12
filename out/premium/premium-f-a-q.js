import Model from 'app/api/NotTerribleModel';

export default class PremiumFAQ extends Model {
  static schema = {
    /**
     * @property question
     * The question related to a plan or plans
     */
    question: Model.STRING,

    /**
     * @property answer
     * The answer for the question
     */
    answer: Model.STRING,

    /**
     * @property attributedAnswer
     * Attributed Text for Answer
     */
    attributedAnswer: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "premium/premium-f-a-q"
  }
}
