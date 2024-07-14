import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let c = [...state]

            return action.payload === 'up' ? c.sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                } else if (a.name > b.name) {
                    return 1
                }
                return 0;

            }) : c.sort((a, b) => {
                if (a.name > b.name) {
                    return -1
                } else if (a.name < b.name) {
                    return 1
                }
                return 0;
            })

        }
        case 'check': {

            return state.filter((it: UserType) => it.age >= action.payload)
        }
        default:
            return state
    }
}
