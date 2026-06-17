import { render,screen } from '@testing-library/react'
import { AgentUnlock } from './AgentUnlock'


test('AgentUnlockがあるか', () => {
  render(<AgentUnlock
    Sentinel={[]}
    duelist={[]}
    Initiater={[]}
    controller={[]}
  />)
   const DivTest = screen.getByTestId('test')
   expect(DivTest).toBeInTheDocument()
})  