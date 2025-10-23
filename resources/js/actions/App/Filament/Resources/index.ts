import MemberGroups from './MemberGroups'
import Members from './Members'
import Memberships from './Memberships'
import Packages from './Packages'
import Services from './Services'

const Resources = {
    MemberGroups: Object.assign(MemberGroups, MemberGroups),
    Members: Object.assign(Members, Members),
    Memberships: Object.assign(Memberships, Memberships),
    Packages: Object.assign(Packages, Packages),
    Services: Object.assign(Services, Services),
}

export default Resources