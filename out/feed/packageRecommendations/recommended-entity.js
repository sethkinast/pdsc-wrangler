import Model from 'app/api/NotTerribleModel';
import RecommendedCompany from "app/models/feed/packageRecommendations/recommended-company";
import RecommendedChannel from "app/models/feed/packageRecommendations/recommended-channel";
import RecommendedMember from "app/models/feed/packageRecommendations/recommended-member";

export default Model.oneOf(RecommendedCompany, RecommendedChannel, RecommendedMember);
