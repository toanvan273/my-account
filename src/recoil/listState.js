import { atom, selector } from 'recoil';

const defaultData = [
    {
        id: 1,
        content: 'Action 1',
        status : 'new'
    },
    {
        id: 2,
        content: 'Action 2',
        status: 'inprogress'
    }
]

const listTodoState = atom({
    key: 'listTodo',
    default: defaultData
})

export const newListState = selector({
    key: 'newList',
    get: ({get}) => {
        const list = get(listTodoState)
        return list.filter(item=>item.status==='new')
    },
    set: ({get, set}, newValue) => {
        console.log('newValue',newValue)
        const list = get(listTodoState)
        const newTodo = {
            id: new Date().getTime(),
            content: newValue,
            status: 'new'
        }
        set(listTodoState, [...list, newTodo])
    },
})

export const inprogressListState = selector({
    key: 'inprogressList',
    get: ({get}) => {
        const list = get(listTodoState)
        return list.filter(item => item.status==='inprogress')
    }
})

export const completedListState = selector({
    key: 'completedList',
    get: ({get}) => {
        const list = get(listTodoState)
        return list.filter(item => item.status==='completed')
    }
})