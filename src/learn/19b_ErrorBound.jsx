import React from 'react'


function ErrorBound({heroName}) {

    if(heroName === 'jack'){
     throw new Error('Not a Hero')
    }
    return (
        <div>
            Hero Name {heroName}
        </div>
    )
}

export default ErrorBound
