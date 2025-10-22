import Auth from './Auth'
import Settings from './Settings'
import Forms from './Forms'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    Settings: Object.assign(Settings, Settings),
    Forms: Object.assign(Forms, Forms),
}

export default Controllers