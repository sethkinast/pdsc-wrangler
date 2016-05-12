import Model from 'app/api/NotTerribleModel';
import MemberActor from "app/models/feed/member-actor";
import CompanyActor from "app/models/feed/company-actor";
import SchoolActor from "app/models/feed/school-actor";
import InfluencerActor from "app/models/feed/influencer-actor";
import AppActor from "app/models/feed/app-actor";

export default Model.oneOf(MemberActor, CompanyActor, SchoolActor, InfluencerActor, AppActor);
