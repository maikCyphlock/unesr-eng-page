import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh' 
import mdPlugin , {Mode }  from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3000
  },
  plugins: [reactRefresh(), mdPlugin({mode:Mode.HTML})],
 
})
