import ContactFormController from './ContactFormController'
import MembershipFormController from './MembershipFormController'

const Forms = {
    ContactFormController: Object.assign(ContactFormController, ContactFormController),
    MembershipFormController: Object.assign(MembershipFormController, MembershipFormController),
}

export default Forms