import ListMemberships from './ListMemberships'
import CreateMembership from './CreateMembership'
import EditMembership from './EditMembership'

const Pages = {
    ListMemberships: Object.assign(ListMemberships, ListMemberships),
    CreateMembership: Object.assign(CreateMembership, CreateMembership),
    EditMembership: Object.assign(EditMembership, EditMembership),
}

export default Pages