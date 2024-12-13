import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN", //语言
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "🗝️ &ensp; 基本",
        collapsed: true,
        items: [
          {
            text: "了解Dooask",
            link: "/basic/Learnabout-dootask",
          },
          {
            text: "登录和注册",
            link: "/basic/Login&register-dootask",
          },
          { text: "通知公告", link: "/basic/Notices-dootask" },
          {
            text: "账户设置",
            collapsed: true,
            items: [
              { text: "基本设置", link: "/basic/Count-dootask" },
              {
                text: "个人设置",
                link: "/basic/Personalset-dootask",
              },
              {
                text: "系统设置",
                link: "/basic/Systemset-dootask",
              },
            ],
          },
        ],
      },

      {
        text: "🛠 &ensp; 功能",
        collapsed: true,
        items: [
          {
            text: "即时沟通",
            items: [
              { text: "消息状态", link: "/functions/im/sf" },
              { text: "会话标记", link: "/functions/im/sign" },
              { text: "消息撤回", link: "/functions/im/3" },
              { text: "消息编辑", link: "/functions/im/edit" },
              { text: "555", link: "/functions/im/5" },
              { text: "创建群组", link: "/functions/im/6" },
              { text: "表情回复消息", link: "/functions/im/emoji-reply" },
              { text: "更多", link: "/functions/im/more" },
            ],
            collapsed: true,
          },
          {
            text: "签到功能",
            items: [
              { text: "多种打卡方式", link: "/functions/checkin/many-ways" },
              { text: "(管理员)签到设置", link: "/functions/checkin/setting" },
              { text: "(管理员)数据导出", link: "/functions/checkin/export" },
            ],
            collapsed: true,
          },
          { text: "提醒功能", link: "/functions/reminders" },
          { text: "审批中心", link: "/functions/approval/index" },
          {
            text: "OKR",
            collapsed: true,
            items: [
              { text: "OKR的使用", link: "/functions/okr/okr-basic" },
              { text: "OKR结果分析", link: "/functions/okr/okr-analysis" },
            ],
          },
          {
            text: "项目",
            collapsed: true,
            items: [
              {
                text: "项目成员管理",
                link: "/functions/projects/team-management",
              },
              {
                text: "项目权限管理",
                link: "/functions/projects/access-control",
              },
              {
                text: "项目归档",
                link: "/functions/projects/project-archiving",
              },
              {
                text: "任务模板",
                link: "/functions/projects/task-templates",
              },
              {
                text: "任务标签",
                link: "/functions/projects/task-tags",
              },
              {
                text: "工作流设置",
                link: "/functions/projects/workflow",
              },
              {
                text: "多种任务展示模式",
                link: "/functions/projects/view-modes"
              },
              {
                text: "AI辅助任务的创建",
                link: "/functions/projects/ai-assistant",
              },
            ],
          },
          {
            text: "团队管理",
            collapsed: true,
            items: [
              {
                text: "团队和成员",
                link: "/functions/team/Teammember-dootask",
              },
              { text: "团队管理", link: "/functions/team/Teammanage-dootask" },
              { text: "团队设置", link: "/functions/team/Teamset-dootask" },
              { text: "成员分组", link: "/functions/team/Membergroup-dootask" },
            ],
          },
          {
            text: "文件",
            collapsed: true,
            items: [
              { text: "文件类型", link: "/functions/file/Filetype-dootask" },
              { text: "文件共享", link: "/functions/file/Fileshare-dootask" },
              { text: "访问权限", link: "/functions/file/Access-dootask" },
              { text: "文件显示", link: "/functions/file/Fileshow-dootask" },
            ],
          },
          {
            text: "AI辅助",
            collapsed: true,
            items: [
              { text: "AI机器人", link: "/functions/ai/index" },
            ],
          },
        ],
      },
      {
        text: "🪜 &ensp; 部署",
        collapsed: true,
        items: [
          { text: "系统部署", link: "/deploy/index" },
        ],
      },
      {
        text: "🪜 &ensp; 支持",
        collapsed: true,
        items: [
          { text: "技术交流群", link: "/support/group" },
        ],
      },
      {
        text: "文档完善中",
        link: "/more"
      }
      
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
