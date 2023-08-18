import {ChangeEvent, useEffect, useState} from 'react';

export const ProfileStatusHooks = (props: any) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(!editMode)
    }
    const deactivateMode = () => {
        setEditMode(!editMode)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}> {props.status || '-------'} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateMode} value={status}/>
                </div>}
        </div>
    )
}