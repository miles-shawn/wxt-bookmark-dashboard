import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// https://unocss.dev/config/
export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        lato: [
          { name: 'Lato', weights: ['400', '700'], italic: true },
          { name: 'sans-serif', provider: 'none' },
        ],
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    //
  ],
  outputToCssLayers: true,
});
