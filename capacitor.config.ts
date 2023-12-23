import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.carhubdemo.app',
  appName: 'CarHubDemo',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
