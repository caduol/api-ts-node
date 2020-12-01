import { Server } from '../server/server'
import { usersRouter } from '../users/users.router'


const server = new Server()

// inicia a aplicacao
server.bootstrap([usersRouter]).then(server => {
    console.log(`Server is running on: `, server.application.address())
}).catch(error => { // caso de erro
    console.log('Server failed to start')
    console.error(error)
    // indica uma saida anormal
    process.exit(1)
})

