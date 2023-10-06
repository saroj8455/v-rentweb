import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vrentservices.com',
  appName: 'v-rentweb',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
