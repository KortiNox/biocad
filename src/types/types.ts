export type AminoAcid = 'A' | 'R' | 'N' | 'D' | 'C' | 'E' | 'Q' | 'G' | 'H' | 'I' | 'L' | 'K' | 'M' | 'F' | 'P' | 'S' | 'T' | 'W' | 'Y' | 'V' | '-';

export const AMINO_ACID_COLORS: Record<AminoAcid, string> = {
  'A': '#80a0f0', // Hydrophobic - Blue
  'R': '#f01505', // Basic - Red
  'N': '#00ff00', // Polar - Green
  'D': '#c048c0', // Acidic - Purple
  'C': '#f08080', // Sulfur-containing - Pink
  'E': '#c048c0', // Acidic - Purple
  'Q': '#00ff00', // Polar - Green
  'G': '#f09048', // Special - Orange
  'H': '#15a4a4', // Basic - Cyan
  'I': '#80a0f0', // Hydrophobic - Blue
  'L': '#80a0f0', // Hydrophobic - Blue
  'K': '#f01505', // Basic - Red
  'M': '#80a0f0', // Hydrophobic - Blue
  'F': '#80a0f0', // Hydrophobic - Blue
  'P': '#c0c000', // Special - Yellow
  'S': '#00ff00', // Polar - Green
  'T': '#00ff00', // Polar - Green
  'W': '#80a0f0', // Hydrophobic - Blue
  'Y': '#15a4a4', // Polar - Cyan
  'V': '#80a0f0', // Hydrophobic - Blue
  '-': '#ffffff', // Gap - White
};

export interface SequenceFormData {
  sequence1: string;
  sequence2: string;
} 