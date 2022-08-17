/**
 * @module @cyclonedx/ui/sbom/components/mui/chip
 */
import * as React from 'react'
import MuiChip from '@mui/material/Chip'
import useBgColor, { UseBgColorType } from '@/hooks/useBgColor'
import { CustomChipProps } from './types'

const Chip = (props: CustomChipProps) => {
  const { sx, skin, color } = props

  const bgColors = useBgColor()

  const colors: UseBgColorType = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight },
  }

  return (
    <MuiChip
      {...props}
      variant="filled"
      {...(skin === 'light' && { className: 'MuiChip-light' })}
      sx={skin === 'light' && color ? Object.assign(colors[color], sx) : sx}
    />
  )
}

export default Chip
