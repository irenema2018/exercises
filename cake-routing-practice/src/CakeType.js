import React from 'react'

export default function CakeType (props) {
    console.log(props.match)    // an object in the Route. It has 
                                // isExact: true
                                // params: {filling: "buttercream"}
                                // path: "/caketypes/:filling"
                                // url: "/caketypes/buttercream"
    console.log(props.match.params) //  {filling: "buttercream"}

    var cakeTypeVoted = props.cakeTypes.filter( (cakeType) => props.match.params.filling === cakeType.name) // an array, eg: {name: "buttercream", cakeBase: "sponge cake"}
    
    return (
        <section>
            <h2>A single cake type</h2>
            <p>{cakeTypeVoted[0].name}</p>
            <p>{cakeTypeVoted[0].cakeBase}</p>
        </section>

    )
}