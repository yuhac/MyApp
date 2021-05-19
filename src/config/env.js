const devConfig = {
  API_URL: 'http://jsonplaceholder.typicode.com/'
}
const prodConfig = {
  API_URL: 'http://jsonplaceholder.typicode.com/'
}

export default __DEV__ ? devConfig : prodConfig