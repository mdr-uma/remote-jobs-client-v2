import React from 'react'

class LikeButton extends React.Component{
    state = {
        like: 0
    }

    handleClick = () => {
        this.setState({
            like: this.state.like +1
        })
    }

    render(){
        return(
            <div>
                {this.state.like}
                <i className="fas fa-heart" onClick={this.handleClick}></i>
            </div>
        )
    }
}

export default LikeButton