import 'vite/client'

declare module 'configs' {
  export default interface AppConfig {
    name: string
    version: string
    environment: string
  }
}

declare module 'dApp' {
  //
}
