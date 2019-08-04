import React from 'react'
import './TweetBox.css'
import ProgressBar from './ProgressBar'
// import { directive } from '@babel/types';

export default class TweetBox extends React.Component {
    state = {
        content: '',
    }

    handleChange = event => {
        this.setState({
          content: event.target.value
        })
        console.log(this.state.content)
      }
    
       
    render = () => {
        const maxContentLength = 140
        const {content} = this.state 
        const isDisabled = content.length === 0 || content.length > maxContentLength
        const spanClass = content.length > 110 ?  'warning' : '' 
    
        return (
            <div style = {{ width: "200px" }}>
                            {/* parameter percent  */}
                {ProgressBar(content.length / maxContentLength * 100)} 
                <textarea
                    onChange = {this.handleChange}
                    placeholder = "type something..."
                    row = "2"
                ></textarea>
                <footer>
                    <span className={spanClass}>{maxContentLength - content.length}</span>
                    <button disabled={isDisabled}>tweet</button>
                </footer>
            </div>
        )
    
    
    }


}