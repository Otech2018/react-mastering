import React from 'react'

function ListData({be, info}) {
    return (
        <div>
            <h2>
         {be}   My name is {info.name}, i am a {info.skill}, and my age is {info.age}
        </h2>
        </div>
    )
}

export default ListData



