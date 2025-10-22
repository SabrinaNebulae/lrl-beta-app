import ListMembers from './ListMembers'
import CreateMember from './CreateMember'
import EditMember from './EditMember'

const Pages = {
    ListMembers: Object.assign(ListMembers, ListMembers),
    CreateMember: Object.assign(CreateMember, CreateMember),
    EditMember: Object.assign(EditMember, EditMember),
}

export default Pages