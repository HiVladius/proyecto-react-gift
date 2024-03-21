import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig (({command, mode}) => {

  const env = loadEnv(mode, process.cwd(), '');

  return{
    plugins: [react()],
    
    define:{
      VITE_GIFT_KEY: JSON.stringify(env.VITE_GIFT_KEY),
      VITE_URL: JSON.stringify(env.VITE_URL)
    }
  }

})
