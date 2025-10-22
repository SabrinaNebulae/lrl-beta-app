import MemberGroups from './MemberGroups'
import Members from './Members'
import Memberships from './Memberships'
import Packages from './Packages'

const Resources = {
    MemberGroups: Object.assign(MemberGroups, MemberGroups),
    Members: Object.assign(Members, Members),
    Memberships: Object.assign(Memberships, Memberships),
    Packages: Object.assign(Packages, Packages),
}

export default Resources