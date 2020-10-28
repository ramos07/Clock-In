import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        username: 'adminUser',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jorge Campos',
        username: 'jcampos001',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'John Wayne',
        username: 'jwayne002',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Lionel Messi',
        username: 'lmessi003',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'James Harden',
        username: 'jharden004',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users