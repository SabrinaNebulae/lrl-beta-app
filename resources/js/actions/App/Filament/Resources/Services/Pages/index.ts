import ListServices from './ListServices'
import CreateService from './CreateService'
import EditService from './EditService'

const Pages = {
    ListServices: Object.assign(ListServices, ListServices),
    CreateService: Object.assign(CreateService, CreateService),
    EditService: Object.assign(EditService, EditService),
}

export default Pages