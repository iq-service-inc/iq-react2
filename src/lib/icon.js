import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import {
    faPen,
    //...
} from '@fortawesome/free-solid-svg-icons'

import {
    faEye as farEye,
    // ...
} from '@fortawesome/free-regular-svg-icons'

export default () => library.add(
    fab,
    farEye,
    faPen,
)