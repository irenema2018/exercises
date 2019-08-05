import React from 'react'
import { Link } from 'react-router-dom'


export default function CakeTypes (props) {
    // console.log(props) // props is an object which contains an array. same as state object
    // console.log(props.cakeTypes)// an array
    // console.log(props.cakeTypes[1].name)//lightcream

    return (
        <section>
         
            {props.cakeTypes.map( (cakeType, index) =>
                <p key = {index}>
                    <Link to={`/caketypes/${cakeType.name}`}>{cakeType.name}</Link>
                </p>
            )}
        </section>
    )

}