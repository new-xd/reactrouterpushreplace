import React, { Component } from 'react';
import jump from './jump'
class Page extends Component {

    componentDidMount() {
        if (jump.get() > 0) {
                this.props.router.push('/page/' + (this.props.routeParams.num - 1))
            // setTimeout(() => {
            //     this.props.router.push('/page/' + (this.props.routeParams.num - 1))
            // }, 1000)
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.routeParams.num != prevProps.routeParams.num) {
            if (jump.get() > 0) {
                    this.props.router.push('/page/' + (this.props.routeParams.num - 1))
                // setTimeout(() => {
                //     this.props.router.push('/page/' + (this.props.routeParams.num - 1))
                // }, 1000)
            }
        }
    }



    render() {
        return (
            <div>
                <h1>{this.props.routeParams.num}</h1>
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.router.push('/page/' + (this.props.routeParams.num - 1))
                } }>next</button>
            </div>
        );
    }
}

export default Page;