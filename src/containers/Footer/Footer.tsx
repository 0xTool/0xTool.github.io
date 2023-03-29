import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Footer: React.FC = () => {
  return (
    <Stack component="footer" width="100%" spacing={2} direction="row" justifyContent="space-between" alignItems="center">
      <Box width={200} />
      <Box flexGrow={1} pt={1}>
        <Typography color="#FFF6" textAlign="center" component="p">
          ETH Rotom alpha version
        </Typography>
      </Box>
      <Box py={0.5}><ConnectButton /></Box>
    </Stack>
  )
}

export default Footer
