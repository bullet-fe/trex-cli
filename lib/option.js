    // 需要下载的前端框架技术选择
    const projectList = [
        {
            title: 'vue',
            description: '渐进式JavaScript 框架',
            value: 'vue'
        },
        {
            title: 'react',
            description: '用于构建用户界面的 JavaScript 库',
            value: 'react',
            disabled: true
        },
        {
            title: 'svelet',
            description: '现代编译型JavaScript框架',
            value: 'svelet',
            disabled: true
        },
        {
            title: 'vanilla',
            description: '原生html模版系列',
            value: 'vanilla'
        }
    ]

    // 配置vue下载模版的地址
    const vueProjectList = [
    {
        title: "vue3-ts-template",
        description: "基于webpack5-vue3-typescript的项目模版",
        value: "vue3-ts-template",
    },
    {
        title: "vue2-ssr-template",
        description: "基于vue2-ssr-template的服务端渲染项目模版",
        value: "vue2-ssr-template",
    },
    {
        title: "vue2-admin-template",
        description: "基于vue2和官方cli的后台项目模版",
        value: "vue2-admin-template",
        disabled: true
    },
    {
        title: "vite-package-template",
        description: "基于vite-vue3开发组件的项目模版",
        value: "vite-package-template",
        disabled: true
    },
    ];
    
    // react项目模版选项
    const reactProjectList = [
    {
        title: "react-ts-template",
        description: "基于webpack5-react-typescript的项目模版",
        value: "react-ts-template",
    },
    {
        title: "react-vite-template",
        description: "基于react-vite 的项目模版",
        value: "react-vite-template",
        disabled: true,
    },
    ]

    // svelet选项
    const sveletProjectList = [
    {
        title: "svelet-vite-h5template",
        description: "基于svelet和vite的移动端模版项目",
        value: "svelet-vite-h5template",
    },
    ]

        // 原生选项
    const vanillaProjectList = [
        {
            title: "html-activity-template",
            description: "基于svelet和vite的移动端模版项目",
            value: "html-activity-template",
        },
    ]

module.exports = { projectList, vueProjectList, reactProjectList, sveletProjectList,vanillaProjectList }