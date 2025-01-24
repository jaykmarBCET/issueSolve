import env from '@/app/env'

import {Databases,Client,Avatars,Storage,Users} from 'node-appwrite';

const client = new Client()
client
    .setEndpoint(env.appwrite.endpoint) 
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey)
    
;

const databases = new Databases(client)
const avatars = new Avatars(client)
const storage  = new Storage(client)
const users = new Users(client)

export {databases,avatars,storage,users}