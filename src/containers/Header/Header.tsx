import React from 'react'

import HomeIcon from '@mui/icons-material/Home'
import LinkOnIcon from '@mui/icons-material/Link'
import LinkOffIcon from '@mui/icons-material/LinkOff'
import WebIcon from '@mui/icons-material/Web'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { green, grey, pink } from '@mui/material/colors'
import { useAccount, useConnect, useEnsName } from 'wagmi'

const ButtonStyle = { width: 24, height: 24, bgcolor: '#000' }

const Header: React.FC = () => {
  // const { isLoading, isSuccess, isError, isIdle } = useConnect()
  const { isConnected } = useAccount()

  return (
    <Stack component="header" width="100%" direction="row" py={1}>
      <Stack width={100} direction="column" spacing={2}>
        <Avatar sx={ButtonStyle}>
          <HomeIcon fontSize="small" color="info" />
        </Avatar>
        <Avatar sx={ButtonStyle}>
          <WebIcon fontSize="small" color="info" />
        </Avatar>
      </Stack>
      <Box flexGrow={1} />
      <Stack width={100} direction="column" spacing={2} alignItems="end">
        <Avatar sx={ButtonStyle}>T</Avatar>
        <Avatar sx={ButtonStyle}>
          {isConnected ? (
            <LinkOnIcon fontSize="small" color="success" />
          ) : (
            <LinkOffIcon fontSize="small" color="error" />
          )}
        </Avatar>
      </Stack>
    </Stack>
  )
}

export default Header
