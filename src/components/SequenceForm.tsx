import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Alert, Snackbar } from '@mui/material';
import type { SequenceFormData } from '../types/types';

const AMINO_ACID_PATTERN = /^[ARNDCEQGHILKMFPSTWYV-]+$/;

interface Props {
  onSubmit: (data: SequenceFormData) => void;
}

export const SequenceForm = ({ onSubmit }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<SequenceFormData>();

  const validateSequences = (data: SequenceFormData) => {
    if (data.sequence1.length !== data.sequence2.length) {
      setError('Последовательности должны быть одинаковой длины');
      return false;
    }
    setError(null);
    return true;
  };

  const onFormSubmit = (data: SequenceFormData) => {
    if (validateSequences(data)) {
      onSubmit(data);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onFormSubmit)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: 2,
      }}
    >
      <TextField
        label="Первая последовательность"
        fullWidth
        {...register('sequence1', {
          required: 'Это поле обязательно',
          pattern: {
            value: AMINO_ACID_PATTERN,
            message: 'Допустимы только буквы аминокислот (A-Z) и символ -'
          }
        })}
        error={!!errors.sequence1}
        helperText={errors.sequence1?.message}
      />

      <TextField
        label="Вторая последовательность"
        fullWidth
        {...register('sequence2', {
          required: 'Это поле обязательно',
          pattern: {
            value: AMINO_ACID_PATTERN,
            message: 'Допустимы только буквы аминокислот (A-Z) и символ -'
          }
        })}
        error={!!errors.sequence2}
        helperText={errors.sequence2?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Выровнять последовательности
      </Button>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}; 