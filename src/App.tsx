import { useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import { SequenceForm } from './components/SequenceForm'
import { SequenceAlignment } from './components/SequenceAlignment'
import type { SequenceFormData } from './types/types'

function App() {
  const [sequences, setSequences] = useState<SequenceFormData | null>(null)

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            color: '#1a237e',
            fontWeight: 600,
            mb: 4,
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem'
            }
          }}
        >
          Визуализация выравнивания аминокислотных последовательностей
        </Typography>
        
        <SequenceForm onSubmit={setSequences} />
        
        {sequences && (
          <SequenceAlignment
            sequence1={sequences.sequence1}
            sequence2={sequences.sequence2}
          />
        )}
      </Box>
    </Container>
  )
}

export default App
