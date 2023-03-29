import React from 'react'

import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { WagmiConfig, configureChains, createClient } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

// import { Config, DAppProvider, DEFAULT_SUPPORTED_CHAINS } from '@usedapp/core'
// import { FindoraMainnet, FindoraTestnet } from './chains'

const {
  chains,
  provider,
  // webSocketProvider,
} = configureChains(
  [mainnet, polygon, arbitrum],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Web3 Tools',
  chains
})

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  // webSocketProvider,
})

const DAppProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[]
}> = ({ children }) => (
  <WagmiConfig client={client}>
    <RainbowKitProvider chains={chains}>
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
)

export default DAppProvider
