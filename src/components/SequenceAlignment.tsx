import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import type { AminoAcid } from '../types/types';
import { AMINO_ACID_COLORS } from '../types/types';

interface Props {
  sequence1: string;
  sequence2: string;
}

export const SequenceAlignment = ({ sequence1, sequence2 }: Props) => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const alignmentRef = useRef<HTMLDivElement>(null);

  const handleCopySelection = () => {
    const selection = window.getSelection()?.toString();
    if (selection) {
      navigator.clipboard.writeText(selection);
      setShowCopyNotification(true);
    }
  };

  useEffect(() => {
    const element = alignmentRef.current;
    if (element) {
      element.addEventListener('mouseup', handleCopySelection);
      return () => element.removeEventListener('mouseup', handleCopySelection);
    }
  }, []);

  const renderSequence = (sequence: string, isUpperSequence: boolean) => {
    return (
      <pre
        style={{
          margin: 0,
          padding: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '1.2rem',
          lineHeight: '2',
          letterSpacing: '0.2rem',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          backgroundColor: 'transparent',
          position: 'relative',
          display: 'block',
          textAlign: 'left'
        }}
      >
        {sequence.split('').map((char, index) => {
          const aminoAcid = char.toUpperCase() as AminoAcid;
          const isDifferent = sequence1[index].toUpperCase() !== sequence2[index].toUpperCase();
          const shouldBeColored = isUpperSequence || (!isUpperSequence && isDifferent);
          const backgroundColor = shouldBeColored ? AMINO_ACID_COLORS[aminoAcid] : 'transparent';
          
          return (
            <span
              key={index}
              style={{
                backgroundColor,
                padding: '0.2rem 0.4rem',
                margin: '0 0.1rem',
                borderRadius: '2px',
              }}
            >
              {char}
            </span>
          );
        })}
      </pre>
    );
  };

  return (
    <Box
      ref={alignmentRef}
      sx={{
        padding: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: 1,
        margin: '1rem 0',
        '& pre': {
          margin: '0.5rem 0',
        }
      }}
    >
      {renderSequence(sequence1, true)}
      {renderSequence(sequence2, false)}
      
      <Snackbar
        open={showCopyNotification}
        autoHideDuration={1000}
        onClose={() => setShowCopyNotification(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setShowCopyNotification(false)}>
          Последовательность скопирована
        </Alert>
      </Snackbar>
    </Box>
  );
}; 