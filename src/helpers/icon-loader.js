import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faUser,
    faLock,
    faUserGraduate,
    faUsers,
    faSearch,
    faEye,
    faPencilAlt,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
export const loadIcons = () => {
    library.add(
        faUser,
        faLock,
        faUserGraduate,
        faUsers,
        faSearch,
        faEye,
        faPencilAlt,
        faTrash
    )
}