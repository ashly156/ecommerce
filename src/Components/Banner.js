import React from 'react'
import { Container } from 'react-bootstrap'

const Banner = () => {
    return (
        <Container>
            <div className='banner'>
                <h1>Happiness Is Our Culture</h1>
                <p>The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
                <img src="/image/banner.png" alt='banner' className='img-fluid' />
            </div>
        </Container>
    )
}

export default Banner