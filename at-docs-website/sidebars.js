const sidebars = {
  asktableSidebar: [
    {
      type: 'category',
      label: '简介',
      items: [
        'introduction/why-asktable',
        'introduction/what-is-asktable',
        'introduction/core-features',
      ],
    },
   {
     type: 'category',
     label: '客户案例',
     items: [
      //  'customer-cases/university-data-analysis',
       'customer-cases/financial-insights',
       'customer-cases/educational-excellence',
       // 'customer-cases/ecommerce-customer-service',
     ],
   },
    {
      type: 'category',
      label: '解决方案',
      items: [
        'solutions/chat-bi',
      ],
    },
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
      label: '数据管理',
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
      label: '问数 AI',
      items: [
        'chat-database/database-query-via-natural-language',
        'chat-database/generate-sql-from-natural-language',
        'chat-database/generate-answer-from-natural-language',
      ],
    },
    {
      type: 'category',
      label: '数据访问权限',
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
      label: '业务知识',
      items: [
        'business-knowledge/introduction',   
      ],
    },
    {
      type: 'category',
      label: 'AI 搜索',
      items: [
        'ai-search/introduction',
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
      label: '外部插件',
      items: [
        'api-calling/introduction',
        'api-calling/quick-start-with-cloud-console',
        'api-calling/quick-start-with-python-sdk',
      ],
    },
    {
      type: 'category',
      label: '定价与部署',
      items: [
        'pricing-and-deployment/all-deployment-pricing',
        'pricing-and-deployment/private-deployment-all-in-one',
        'pricing-and-deployment/private-deployment-options',
        'pricing-and-deployment/deploy-on-sealos',
      ],
    },
    {
      type: 'category',
      label: 'API 和 SDK',
      items: [

        {
          type: 'category',
          label: 'RestfulAPI',
          items: [
            'api-overview/introduction',
            'api-overview/authentication-and-authorization',
            'api-overview/common-requests-and-responses',
          ],
        },
        {
          type: 'category',
          label: 'Python SDK',
          items: [
            'sdk/python-sdk/installation',
            'sdk/python-sdk/quick-start',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '集成AskTable',
      items: [
        {
          type: 'category',
          label: '网站',
          items: [
            'integration/website/chatbot-widget-introduction',
            'integration/website/embed-chatbot-widget-example',
            'integration/website/server-get-temp-token-for-user',
          ],
        },
        {
          type: 'category',
          label: '扣子（Coze）',
          items: [
            'integration/coze/coze-Case1',
            'integration/coze/coze-Case2',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '附录',
      items: [
        'appendix/glossary',
        'appendix/privacy-policy',
        'appendix/terms-of-service',
        'appendix/software-end-user-license-agreement',
      ],
    },
  ],
};


export default sidebars;
