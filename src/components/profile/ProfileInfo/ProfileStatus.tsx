import {useState} from 'react';

export type StatusPropsType = {
    status: string
}

export const ProfileStatus = (props: StatusPropsType) => {

    const [status, setStatus] = useState<string>(props.status)
    const [statusToggle, setStatusToggle] = useState<boolean>(false)

    const toggleEditMode = () => {
        setStatusToggle(!statusToggle)
    }

    return (
        <div>
            {!statusToggle &&
                <div>
                    <span onDoubleClick={toggleEditMode}>{status}</span>
                </div>
            }
            {statusToggle &&
                <div>
                    <input onBlur={toggleEditMode} value={status} autoFocus/>
                </div>
            }
        </div>
    )

}