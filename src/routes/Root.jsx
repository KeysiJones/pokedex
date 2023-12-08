import styled from 'styled-components'

const HomepageWrapper = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    width: 90vw;
    font-size: 30px;
`
function Root() {
    return (
        <HomepageWrapper className='vertical'>
            <a href='/pokemons'>Lista de pokemons</a>
        </HomepageWrapper>
    )
}

export default Root