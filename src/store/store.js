import { createStore } from 'redux'

const initialState = {
    tasks: [ { text: "sample task",dateTime: new Date(),active: false,id: 20 } ],
    darkMode: true,
}

const tasksReducer = (state = initialState,action) => {
    if (action.type === "add") {
        return {
            ...state,
            tasks: [ action.task,...state.tasks ],
        }
    }
    else if (action.type === "remove") {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.id)
        }
    }
    else if (action.type === "clear") {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.active)
        }
    }
    else if (action.type === "status") {
        let temp = state.tasks;
        for (let task of temp) {
            if (task.id === action.id) {
                task.active = !task.active
            }
        }
        return {
            ...state,
            tasks: temp
        }

    }
    else if (action.type === "changeTheme") {
        return {
            ...state,
            darkMode: !state.darkMode
        }
    }
    return state;
}

const store = createStore(tasksReducer);

export default store;
