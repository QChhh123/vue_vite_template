/**
 * 一个路由配置实例，将其放置在routes数组变量中即可完成路由配置
 * children部分可以省略
 * name与path需要对应
 * {
        path: '/index',
        name: 'Index',
        component: () => import ('@/views/index/index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () =>
                    import ('@/views/home/home.vue')
            },
            {
                path: '/travel',
                name: 'Travel',
                component: () => import ('@/views/travel/travel.vue')
            }
        ]
    }
 */
const routes = [];

export const existsRoute = (path) => {
    for (let i = 0; i < routes.length; i++) {
        const r = routes[i];
        if (r.path == path) {
            return true;
        }
        if (r.children && r.children.length) {
            for (let k = 0; k < r.children.length; k++) {
                const sr = r.children[k];
                if (sr.path == path) {
                    return true;
                }
            }
        }
    }
    return false;
};

export default routes;