import React, {useCallback} from 'react';
import {AddItemForm} from "./components/AddItemForm";
import {ButtonBody} from "./components/Button";
import {EditableSpan} from "./components/EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {createTaskTC, deleteTaskTC, TaskStatus, TaskType, TaskTypeHandler, updateTaskTC} from "./reducer/TaskReducer";
import {
    changeTadoListAC,
    deleteTodolistTC,
    TodolistTypeHandler,
    updateTodolistTC,
    valueType
} from "./reducer/TodoListReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducersType} from "./reducerRedux/ReducerRedux";
import {Tasks} from "./components/Task";


type PropsType = {
    id: string
}

export const Todolist = React.memo(({...props}: PropsType) => {

    const dispatch = useDispatch();
    const todolist = useSelector<rootReducersType, TodolistTypeHandler>(state => state.todolist.filter(el => el.id === props.id)[0]);
    const tasks = useSelector<rootReducersType, Array<TaskTypeHandler>>(state => state.tasks[props.id]);


    let taskForRender = tasks
    if (todolist.filter === 'Active') {
        taskForRender = tasks.filter(t => t.status === TaskStatus.New)
    }
    if (todolist.filter === 'Completed') {
        taskForRender = tasks.filter(t => t.status === TaskStatus.Completed)
    }

    const removeTask = useCallback((taskId: string, todolistID: string) => {
        dispatch(deleteTaskTC(taskId,todolistID))
    }, [dispatch])

    const addTask = useCallback( (title: string, todolistID: string) => {
       dispatch(createTaskTC(title,todolistID))
    }, [dispatch])
    const changeFilter = useCallback((value: valueType, todolistID: string) => {
        dispatch(changeTadoListAC(value, todolistID));
    }, [dispatch])
    const changeTodolistTitle = useCallback( (title: string, todolistID: string) => {
      dispatch(updateTodolistTC(title,todolistID))
    }, [dispatch])
    const removeTodolist = useCallback( (todolistID: string) => {
       dispatch(deleteTodolistTC(todolistID))
    }, [dispatch])
    const changeTaskTitleHandler = useCallback((task:TaskType) => {
        dispatch(updateTaskTC(task))
    }, [dispatch])
    const onChangeHandler = useCallback((task:TaskType) => {
        dispatch(updateTaskTC(task));
    }, [dispatch])

    const removeTodolistHandler = useCallback(() => {
        removeTodolist(props.id)
    },[removeTodolist,props.id]);
    const onAllClickHandler = useCallback(() => changeFilter("All", props.id),[changeFilter,props.id]);
    const onActiveClickHandler = useCallback(() => changeFilter("Active", props.id),[changeFilter,props.id]);
    const onCompletedClickHandler = useCallback(() => changeFilter("Completed", props.id),[changeFilter,props.id]);

    const addTaskHandler = useCallback((title: string) => {
        addTask(title, props.id)
    }, [addTask, props.id])
    const changeTodolistTitleHandler = useCallback((title: string) => {
        changeTodolistTitle(title, props.id)
    }, [changeTodolistTitle, props.id])
    const onClickHandler = useCallback((id: string) => removeTask(id, props.id), [removeTask, props.id])


    return <div>
        <h3><EditableSpan spanTitle={todolist.title} callback={changeTodolistTitleHandler}/>
            <IconButton onClick={removeTodolistHandler} disabled={todolist.entityStatus === 'loading'} size="small">
                <Delete fontSize="small"/>
            </IconButton>
        </h3>
        <AddItemForm callBack={addTaskHandler} todolistStatus={todolist.entityStatus}/>
        <ul style={{listStyleType: 'none'}}>
            {taskForRender && taskForRender.map(t => <Tasks
              key={t.id}
              task={t}
              onClickHandler={onClickHandler}
              onChangeHandler={onChangeHandler}
              changeTaskTitleHandler={changeTaskTitleHandler}
            />)}
        </ul>
        <div>
            <ButtonBody onClick={onAllClickHandler} name={'All'} filter={todolist.filter}/>
            <ButtonBody onClick={onActiveClickHandler} name={'Active'} filter={todolist.filter}/>
            <ButtonBody onClick={onCompletedClickHandler} name={'Completed'} filter={todolist.filter}/>
        </div>
    </div>
})


