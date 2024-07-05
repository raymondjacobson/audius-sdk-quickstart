import { sdk } from '@audius/sdk'

const API_KEY = ''
const API_SECRET = ''
const MY_HANDLE = ''

const audiusSdk = sdk({
  apiKey: API_KEY,
  apiSecret: API_SECRET
})

const main = async () => {
  const { data: user } = await audiusSdk.users.getUserByHandle({ handle: MY_HANDLE })
  if (!user) {
    throw new Error(`User with handle ${MY_HANDLE} not found`)
  }
  await audiusSdk.users.updateProfile({ userId: user?.id, metadata: { name: 'it worked!' }})
  
  console.log('User name updated!');
}

main()
