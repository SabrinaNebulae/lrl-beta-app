import memberGroups from './member-groups'
import members from './members'
import memberships from './memberships'
import packages from './packages'
import services from './services'
import users from './users'

const resources = {
    memberGroups: Object.assign(memberGroups, memberGroups),
    members: Object.assign(members, members),
    memberships: Object.assign(memberships, memberships),
    packages: Object.assign(packages, packages),
    services: Object.assign(services, services),
    users: Object.assign(users, users),
}

export default resources