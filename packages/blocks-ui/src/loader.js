/** @jsx jsx */
import { jsx } from 'theme-ui'
export const Loader = () => (
  <div
    sx={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <img src="./images/block.png" width = "200" />
  </div>
)
