import memberGroups from './member-groups'
import members from './members'
import memberships from './memberships'
import packages from './packages'

const resources = {
    memberGroups: Object.assign(memberGroups, memberGroups),
    members: Object.assign(members, members),
    memberships: Object.assign(memberships, memberships),
    packages: Object.assign(packages, packages),
}

export default resources