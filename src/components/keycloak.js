import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    realm: "Realm", // realm as configured in Keycloak
    url: "http://localhost:8080/auth/", // URL of the Keycloak server
    clientId: "User", // client id as configured in the realm in Keycloak
})

export default keycloak