// Fallback for using MaterialIcons on Android and web.

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialCommunityIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
	

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialCommunityIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}

const MAPPING = {
  // Navigation
  "house.fill": "home",
  "person.fill": "account",
  "gearshape.fill": "cog",
  "square.grid.2x2.fill": "view-dashboard",

  // Health
  "heart.text.square.fill": "heart-box",
  "heart.fill": "heart",
  "waveform.path.ecg": "heart-pulse",
  "stethoscope": "stethoscope",
  "lungs.fill": "lungs",
  "thermometer.medium": "thermometer",
  "scalemass.fill": "scale-bathroom",

  // Activity
  "figure.walk": "walk",
  "figure.run": "run",
  "flame.fill": "fire",
  "drop.fill": "water",
  "bed.double.fill": "bed",

  // Medical
  "pills.fill": "pill",
  "doc.text.fill": "file-document",
  "calendar": "calendar",

  // Monitoring / Analytics
  "chart.bar.fill": "chart-bar",
  "chart.xyaxis.line": "chart-line",
  "clock.arrow.circlepath": "history",

  // Status
  "checkmark.circle.fill": "check-circle",
  "exclamationmark.triangle.fill": "alert",
  "xmark.circle.fill": "close-circle",
  "info.circle.fill": "information",

  // Actions
  "magnifyingglass": "magnify",
  "plus": "plus",
  "pencil": "pencil",
  "trash.fill": "delete",
  "xmark": "close",
  "checkmark": "check",
  "arrow.clockwise": "refresh",

  // Communication
  "bell.fill": "bell",
  "message.fill": "message",
  "envelope.fill": "email",
  "phone.fill": "phone",
} as IconMapping;
