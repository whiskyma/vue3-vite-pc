import { defineConfig, ConfigEnv, UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 打包gzip的插件
import viteCompression from 'vite-plugin-compression';
// 自动导入引用
import AutoImport from "unplugin-auto-import/vite"
// 自动导入组件
import Components from 'unplugin-vue-components/vite'
// element plus 
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入图标
import Icons from 'unplugin-icons/vite'
import IconsResolvers from 'unplugin-icons/resolver'
import ElementPlus from 'unplugin-element-plus/vite'

// 预渲染插件
// import prerender from 'vite-plugin-prerender'
// const path = require('path')

export default (({ command, mode }: ConfigEnv): UserConfigExport =>{
    let env = loadEnv(mode, process.cwd()) // 环境变量
    let isProduction = mode === 'production' // 是否为生产环境
    return defineConfig({
        base: env.VITE_BASE,
        plugins: [
            vue(),
            ElementPlus({
                // options
            }),
            AutoImport({
                resolvers: [
                    ElementPlusResolver(), //自动导入ElementPlus相关函数
                    IconsResolvers({
                        prefix: 'Icon' //自动导入图标组件
                    })
                ]
            }),
            Components({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolvers({
                        enabledCollections: ['ep'] //重点
                    })
                ]
            }),
            Icons({
                autoInstall: true
            }),
            // ElementPlus({
            //     // importStyle: 'sass',
            //     useSource: true
            // }),
            // Components({
            //     resolvers: [ElementPlusResolver()]
            // }),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
            }),
            // prerender({
            //     routes: ["/", "/brand","/classify"],
            //     staticDir: path.join(__dirname, 'dist'),
            //     minify: true,
            //     fallback: "index.html"
            // }),
        ],
        css: {},
        resolve: {
            alias: {
                '@': "/src",
                '@views': "/src/views",
                "@styl": "/src/assets/styl",
                "@com": "/src/components/common",
                "@js": "/src/utils",
                "@comp": "/src/components",
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        },
        server: {
            host: true,
            port: 5678,
            open: false,
            cors: true,
            strictPort: true, //如果端口已占用直接退出
            hmr: true, //开启热更新
            proxy: {
                '/adminapi': {
                    target: 'http://mqy5878.cn',
                    changeOrigin: true,
                    // rewrite: (path) => path.replace('/adminapi/', '/')
                }
            }
        },
        build: {
            target: "modules", //浏览器兼容性  "esnext"|"modules"
            // outDir: `dist/${ distTime }`,
            outDir: 'dist',
            assetsDir: "assets",
            assetsInlineLimit: 4096,
            cssCodeSplit: true, //启用/禁用 CSS 代码拆分
            sourcemap: false,
            chunkSizeWarningLimit: 500,
            rollupOptions: {
                output: { //静态资源分拆打包
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                    manualChunks(id:any){
                        if (id.includes('node_modules')){
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                        }
                    }
                }
            }
        },
        define: {
            'process.env': { ...env, isProduction }
        }
    })
})
