import React, {ChangeEvent, KeyboardEvent,useState} from "react";
import {Fab, TextField} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {RequestStatusType} from "../reducer/TodoListReducer";

type AddItemFormType = {
  callBack: (title: string) => void
  todolistStatus?: RequestStatusType
}

export const AddItemForm = React.memo(({callBack,todolistStatus}:AddItemFormType)=>{
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
           callBack(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if(error !== null) setError(null);
        if (e.charCode === 13 && todolistStatus === 'idle' ) {
          addTask();
        }
    }
  return (
    <div>
      <TextField value={title}
                 onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}
                 error={!!error}
                 label={error ? error : 'Type value'}
      />
      <Fab color="secondary" size="small" onClick={addTask} disabled={todolistStatus === 'loading'}>
        <Add/>
      </Fab>
    </div>
  )
})