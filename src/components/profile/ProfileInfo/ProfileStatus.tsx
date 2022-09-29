import {ChangeEvent, useState} from 'react';

export type StatusPropsType = {
    status: string
    updateStatus: any
}

export const ProfileStatus = (props: StatusPropsType) => {

    const [status, setStatus] = useState<string>(props.status)
    const [statusToggle, setStatusToggle] = useState<boolean>(false)

    const toggleEditMode = () => {
        setStatusToggle(!statusToggle)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        props.updateStatus(status)
    }

    return (
        <div>
            {!statusToggle &&
                <div>
                    <span onDoubleClick={toggleEditMode}>{status || '-----'}</span>
                </div>
            }
            {statusToggle &&
                <div>
                    <input onChange={onChangeStatus} onBlur={toggleEditMode} value={status} autoFocus/>
                </div>
            }
        </div>
    )

}