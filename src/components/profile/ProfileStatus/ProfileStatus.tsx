import {ChangeEvent, Component} from 'react';

export class ProfileStatus extends Component<any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateMode }>
                                {this.props.status || '-------'}
                            </span>
                        </div>}
                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onStatusChange}
                                   value={this.state.status}
                                   onBlur={this.deactivateMode }
                                   autoFocus/>
                        </div>}
                </div>
            </>
        )
    }
}