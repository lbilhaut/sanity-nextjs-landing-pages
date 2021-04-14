export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60774b9a72729435cc421268',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2e6oxt14',
                  apiId: '24ba8fe3-f8ea-44a5-a5d8-e23f67e36fc4'
                },
                {
                  buildHookId: '60774b9ab87c512e1db99382',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ipa2oh7p',
                  apiId: '1cc54484-ab31-4217-8017-b7fa6b3a3b4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lbilhaut/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ipa2oh7p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
