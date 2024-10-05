const sidebars = {
  asktableSidebar: [
    {
      type: 'category',
      label: '简介',
      items: [
        'introduction/table-of-contents',
        'introduction/why-asktable',
        'introduction/what-is-asktable',
        'introduction/core-features',
      ],
    },
//    {
//      type: 'category',
//      label: '客户案例',
//      items: [
//        'customer-cases/university-data-analysis',
//        // 'customer-cases/ecommerce-customer-service',
//      ],
//    },
    {
      type: 'category',
      label: '快速开始',
      items: [
        'quick-start/create-account-and-get-api-token',
        'quick-start/use-cloud-console',
        'quick-start/embed-chatbot-widget',
      ],
    },
    {
      type: 'category',
      label: 'API 概述',
      items: [
        'api-overview/introduction',
        'api-overview/authentication-and-authorization',
        'api-overview/common-requests-and-responses',
      ],
    },
    {
      type: 'category',
      label: '如何集成',
      items: [
        'integration/chatbot-widget-introduction',
        'integration/embed-chatbot-widget-example',
        'integration/server-get-temp-token-for-user',
      ],
    },
    {
      type: 'category',
      label: '数据源管理',
      items: [
        'datasource-management/supported-databases',
        'datasource-management/create-datasource',
        'datasource-management/manage-datasources',
      ],
    },
    {
      type: 'category',
      label: '对话机器人',
      items: [
        'bot-management/bot-introduction',
      ],
    },
    {
      type: 'category',
      label: 'AI 数据库',
      items: [
        'chat-database/database-query-via-natural-language',
        'chat-database/generate-sql-from-natural-language',
        'chat-database/generate-answer-from-natural-language',
      ],
    },
    {
      type: 'category',
      label: '角色和权限',
      items: [
        'role-and-permission-management/introduction',
        'role-and-permission-management/define-access-policy',
        'role-and-permission-management/create-and-manage-roles',
        'role-and-permission-management/use-roles-to-access-data',
      ],
    },
    {
      type: 'category',
      label: '数据可视化',
      items: [
        'data-visualization/text-responses',
        'data-visualization/chart-display',
        'data-visualization/excel-file-download',
        'data-visualization/query-insights',
      ],
    },
    {
      type: 'category',
      label: '插件（API）',
      items: [
        'api-calling/introduction',
        'api-calling/quick-start-with-cloud-console',
        'api-calling/quick-start-with-python-sdk',
      ],
    },
    {
      type: 'category',
      label: '安全隧道',
      items: [
        'secure-tunnel/introduction',
        'secure-tunnel/install-and-configure-atst',
        'secure-tunnel/register-datasource-with-atst',
        'secure-tunnel/maintain-and-manage-atst',
      ],
    },
    {
      type: 'category',
      label: 'SDK 和 CLI',
      items: [
        {
          type: 'category',
          label: 'Python SDK',
          items: [
            'sdk-and-cli-tools/python-sdk/installation',
            'sdk-and-cli-tools/python-sdk/quick-start',
          ],
        },
        {
          type: 'category',
          label: '命令行工具 CLI（Python）',
          items: [
            'sdk-and-cli-tools/cli/installation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '在Coze中使用',
      items: [
        'coze-use/coze-installation',
        'coze-use/coze-Case1',
        'coze-use/coze-Case2',
      ],
    },
    {
      type: 'category',
      label: '定价与部署',
      items: [
        'pricing-and-deployment/online-service-pricing',
        'pricing-and-deployment/private-deployment-options',
      ],
    },
    {
      type: 'category',
      label: '解决方案',
      items: [
        // 一体机
        'solutions/excel-ai-one-box',
      ],
    },
    {
      type: 'category',
      label: '附录',
      items: [
        'appendix/glossary',
        'appendix/privacy-policy',
      
      ],
    },
  ],
};


export default sidebars;
