import { defineConfig } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "Zh_CN", //语言
  title: "Dootask Helpers",
  description: "A VitePress Site",
  cleanUrls: true,
  appearance: "dark", //默认主题
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
  //多语言
  locales: {
    root: {
      label: "简体中文",
      lang: "Zh_CN",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
    fr: {
      label: "French",
      lang: "fr",
      link: "/fr/",
    },
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/logo.svg",
    search:{
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "🗝️ &ensp; 开始",
        // collapsed: true,
        items: [
          {
            text: " &ensp; 快速了解 Dooask",
            link: "/basic/Learnabout-dootask",
          },
          {
            text: " &ensp; AI助手",
            link: "/basic/Aiass-dootask",
          },
          {
            text: "&ensp; 登录和注册",
            link: "/basic/Login&register-dootask",
          },
          {
            text: "&ensp; 仪表盘",
            link: "/basic/panel-dootask",
          },
          // { text: "通知公告", link: "/basic/Notices-dootask" },
          { text: "&ensp; 提醒功能", link: "/functions/reminders" },
        ],
      },

      {
        text: "🛠 &ensp; 功能",
        // collapsed: true,
        items: [
          {
            text: "&ensp; 账户设置",
            collapsed: true,
            items: [
              { text: "&ensp; 基本设置", 
                link: "/basic/Count-dootask",
                collapsed: true,
              },
              {
                text: "&ensp; 个人设置",
                link: "/basic/Personalset-dootask",
              },
              {
                text: "&ensp; (管理员)系统设置",
                link: "/basic/Systemset-dootask",
              },
            ],
          },
          {
            text: "&ensp; 即时沟通",
            items: [
              { text: "&ensp;消息状态", link: "/functions/im/sf" },
              { text: "&ensp;会话标记", link: "/functions/im/sign" },
              { text: "&ensp;消息编辑", link: "/functions/im/edit" },
              { text: "&ensp;创建群组", link: "/functions/im/create-group" },
              { text: "&ensp;匿名消息", link: "/functions/im/anonymous" },
              { text: "&ensp;表情回复消息", link: "/functions/im/emoji-reply" },
              { text: "&ensp;群接龙", link: "/functions/im/group-riddle" },
              { text: "&ensp;群投票", link: "/functions/im/grooup-vote" },
            ],
            collapsed: true,
          },
          {
            text: "&ensp; 签到功能",
            items: [
              { text: "&ensp;多种打卡方式", link: "/functions/checkin/many-ways" },
              { text: "&ensp;(管理员)签到设置", link: "/functions/checkin/setting" },
              { text: "&ensp;(管理员)数据导出", link: "/functions/checkin/export" },
            ],
            collapsed: true,
          },
    
          {
            text: "&ensp; 审批中心",
            items: [
              { text: "&ensp;提交审批", link: "/functions/approval/submit" },
              { text: "&ensp;处理审批", link: "/functions/approval/approve" },
              { text: "&ensp;(管理员)数据导出", link: "/functions/approval/export" },
              { text: "&ensp;(管理员)自定义审批流程", link: "/functions/approval/process" },
            ],
            collapsed: true,
          },
          {
            text: "&ensp; OKR",
            collapsed: true,
            items: [
              { text: "&ensp;OKR管理", link: "/functions/okr/okr-basic" },
              { text: "&ensp;OKR结果分析", link: "/functions/okr/okr-analysis" },
            ],
          },
          {
            text: "&ensp; 项目",
            collapsed: true,
            items: [
              {
                text: "&ensp;项目成员管理",
                link: "/functions/projects/team-management",
              },
              {
                text: "&ensp;项目权限管理",
                link: "/functions/projects/access-control",
              },
              {
                text: "&ensp;项目归档",
                link: "/functions/projects/project-archiving",
              },
              {
                text: "&ensp;任务模板",
                link: "/functions/projects/task-templates",
              },
              {
                text: "&ensp;任务标签",
                link: "/functions/projects/task-tags",
              },
              {
                text: "&ensp;工作流设置",
                link: "/functions/projects/workflow",
              },
              {
                text: "&ensp;多种任务展示模式",
                link: "/functions/projects/view-modes",
              },
              {
                text: "&ensp;AI辅助任务创建",
                link: "/functions/projects/ai-assistance",
              },
            ],
          },
          {
            text: "&ensp; 团队管理",
            collapsed: true,
            items: [
              { text: "&ensp;(管理员)团队管理", link: "/functions/team/member-management" },
              { text: "&ensp;工作汇报", link: "/functions/team/work-report"}
            ],
          },
          {
            text: "&ensp; 文件",
            collapsed: true,
            items: [
              { text: "&ensp;文件类型", link: "/functions/file/type" },
              { text: "&ensp;文件共享和访问权限", link: "/functions/file/share" },
              { text: "&ensp;文件显示", link: "/functions/file/show" },
            ],
          },
          {
            text: "&ensp; AI机器人",
            link: "/functions/ai/index",
            // collapsed: true,
            // items: [
            // { text: "AI机器人", link: "/functions/ai/index" },
            // ],
          },
        ],
      },
      {
        text: " &ensp; 部署",
        link: "/deploy/index"
        // collapsed: true,
        // items: [{ text: "系统部署", link: "/deploy/index" }],
      },
      {
        text: " &ensp; 支持",
        link: "/support/group" 
        // collapsed: true,
        // items: [{ text: "技术交流群", link: "/support/group" }],
      },
      {
        text: "&ensp; 文档完善中",
        link: "/more",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kuaifan/dootask" },
    ],
  },
});
