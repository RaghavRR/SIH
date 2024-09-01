import {defineConfig} from 'vite'
import reactRefresh from '@vite/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    // this change the out put dir from dish from dish to build
    // comment this out if that is not relevant for your project
    bulid:{
        outDir: 'build',
    },
    plugins: [
        reactRefresh(),
        svgrPlugin({
            svgrOptions:{
                icon:true,
                
            },
        }),
        ],
})
