import React, {Component} from 'react';
import jump from './jump'

class Entry extends Component {
    componentDidMount() {
        if(this.props.routeParams && this.props.routeParams.num > 0){
            jump.set(this.props.routeParams.num)
            this.props.router.push('/page/5')
        }
    }
    
    render() {
        return (
            <div>
                <h1>This is Entry</h1>
                <button onClick={(e)=>{
                    e.preventDefault()
                    this.props.router.push('/page/5')
                }}>next</button>
            </div>
        );
    }
}

export default Entry;