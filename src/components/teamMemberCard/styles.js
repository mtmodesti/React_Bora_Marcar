import styled from 'styled-components'

export const Container = styled.div`
display: flex;
min-width: 200px;
flex-wrap: wrap;
background-color: var(--color-middleBluePurple);
margin: 10px;
text-align: left;
border-radius: 4px;
flex-direction: column;
align-items: center;
a{
    color: var(--color-darkPurple);
    text-decoration: none;
    margin: 5px;
    :visited{
        color: var(--color-darkPurple);
    }
}
p{
    margin: 5px;
}

img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 20px;
}
div{
    display: flex;
    flex-direction: column;
    height: 150px;
    justify-content: space-evenly;
}
`