export const Colors = {
  primary: '#0A1F44',      // Deep Navy Blue
  secondary: '#3AD2C2',    // Bright Teal/Aqua
  accent: '#FFBFA3',       // Soft Peach/Coral
  background: '#FFFFFF',   // Pure White
  backgroundAlt: '#F7F9FC',// Light blue-gray

  button: {
    primaryBg: '#3AD2C2',
    primaryText: '#FFFFFF',
    primaryPressed: '#2BBAAE', // 10% darker

    secondaryBg: '#0A1F44',
    secondaryText: '#FFFFFF',
    secondaryPressed: '#081733', // 10% darker
  },

  text: {
    primary: '#0A1F44',
    secondary: '#3AD2C2',
    onDark: '#FFFFFF',
  }
} as const;

export type Colors = typeof Colors;
