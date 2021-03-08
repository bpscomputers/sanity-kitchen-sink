export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604652265192371faf193b10',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-55xyo5c8',
                  apiId: '9119ab36-189d-44f5-a648-5f233882b7aa'
                },
                {
                  buildHookId: '604652275192371d37193ce3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9vc9qe3o',
                  apiId: '9188f6f8-9793-4489-917e-48333f4415cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bpscomputers/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9vc9qe3o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
