const sidebars = {
  asktableSidebar: [
    {
      type: 'category',
      label: '简介',
      items: [
        'introduction/what-is-asktable',
        'introduction/core-features',
        'introduction/use-cases',
      ],
    },
    {
      type: 'category',
      label: '快速开始',
      items: [
        'quick-start/create-account-and-get-api-token',
        'quick-start/use-web-console',
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
      label: '前端集成',
      items: [
        'frontend-integration/chatbot-widget-introduction',
        'frontend-integration/embed-chatbot-widget-example',
        'frontend-integration/customize-chatbot-style',
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
      label: '角色和权限管理',
      items: [
        'role-and-permission-management/introduction',
        'role-and-permission-management/define-access-policy',
        'role-and-permission-management/create-and-manage-roles',
        'role-and-permission-management/use-roles-to-access-data',
      ],
    },
    {
      type: 'category',
      label: 'SDK 和 CLI 工具',
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
//    {
//      type: 'category',
//      label: '常见问题与故障排除',
//      items: [
//        'faq-and-troubleshooting/faq',
//        'faq-and-troubleshooting/troubleshooting-steps',
//        'faq-and-troubleshooting/contact-support',
//      ],
//    },
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
      label: '附录',
      items: [
        'appendix/glossary',
      ],
    },
  ],
};


export default sidebars;
