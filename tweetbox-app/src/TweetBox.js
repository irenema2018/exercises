import React, { useState } from 'react'
import './TweetBox.css'
import ProgressBar from './ProgressBar'
// import { directive } from '@babel/types';

// export default class TweetBox extends React.Component {
export default function TweetBox () {
    // state = {
    //     content: '',
    // }

    // use state hook useState
    //     varible  function to set varible             default value  
    const [content, setContent]              = useState('')

    const handleChange = event => {
        // this.setState({
        //   content: event.target.value
        // })
        // console.log(this.state.content)
        setContent(event.target.value);
      }
    
       
    // render = () => {
        const maxContentLength = 140
        // const {content} = this.state //const content = this.state.content
        const isDisabled = content.length === 0 || content.length > maxContentLength
        const spanClass = content.length > 110 ?  'warning' : '' 
    
        return (
            <div style = {{ width: "160px" }}>
                            {/* parameter percent  */}
                {ProgressBar(content.length / maxContentLength * 100)} 
                <textarea
                    // onChange = {this.handleChange}
                    onChange = {handleChange}
                    placeholder = "type something..."
                    rows = "2"
                ></textarea>
                <footer>
                    <span className={spanClass}>{maxContentLength - content.length}</span>
                    <button disabled={isDisabled}>tweet</button>
                </footer>
            </div>
        )       
    // }
}