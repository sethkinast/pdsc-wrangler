import Model from 'app/api/NotTerribleModel';

export default class NativeArticle extends Model {
  static schema = {
    /**
     * @property linkedinArticleUrn
     * Publishing article urn (ex: urn:li:linkedInArticle:123) of the article.
     */
    linkedinArticleUrn: Model.foreignUrn('com.linkedin.common.LinkedInArticleUrn'),

    /**
     * @property permalink
     * Permalink for the article.
     */
    permalink: Model.STRING,

    /**
     * @property fullTextWithMarkup
     * Full text of the content with HTML markup.
     */
    fullTextWithMarkup: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "publishing/native-article"
  }
}
