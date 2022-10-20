import React from "react"
import { useKeycloak } from '@react-keycloak/web'
import { Redirect } from '@reach/router'

const Home = () => {
  const { keycloak } = useKeycloak()
  /* Gastby build code. Used to create the pdf exports
  const parsed = keycloak?.tokenParsed
  console.log(JSON.stringify(parsed))
  if (!parsed) {
    return <p>Failed to parse token</p>
  } else {
   let access = parsed?.downloadAccess
   console.log(JSON.stringify(access))
    if (!access | !access.includes('nda')) {
      return <Redirect noThrow to="/resourceBlocked/" />
    }
  } */

  // Note: This is for develop only. To build uncomment the block of code above and comment out the code below. This code will not work with gastby build.
  const access = keycloak.tokenParsed
  console.log(JSON.stringify(access))
  if (!access.resource_access.User.roles.includes('permission')) {
    return <Redirect noThrow to="/resourceBlocked/" />
  }
  return (<main />)
}

export default Home