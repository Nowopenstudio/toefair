export default{
    name: 'collection',
    type: 'document',
    title:'Collection',
    fields:[{
        name:'title',
        type:'string',
        title:'Title'
    },
    {
        name:'slug',
        type:'slug',
        title:'Slug',
        options:{
            source:'title'
        }
    },
    {
        name:'summary',
        type:'array',
        title:'Summary',
        of:[{type:'block'}]
    },
    {
        title: "Background Color",
        description: "Pick Your Color",
        name: "bg",
        type: "string",
        options: {
          list: [
            { title: "Clay", value: "clay" },
            { title: "Olive", value: "olive" },
            { title: "Mustard", value: "mustard" },
            { title: "blue", value: "blue" },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
    {
        name:'artworks',
        type:'array',
        title:'Artworks',
        of:[{
            type:'reference',
            name:'art',
            title:"Artwork",
            to:[{type:'artwork'

            }]
        }]
    },
    {
        name:'gallery',
        type:'object',
        title:'Gallery Info',
        fields:[{
            name:'title',
            type:'string',
            title:'Title'
        },
        {
            name:'url',
            type:'url',
            title:'URL'
        },
        {
            name:'loc',
            type:'string',
            title:'Location'
        },
        {
            name:'start',
            type:'date',
            title:'Start Date'
        },
        {
            name:'end',
            type:'date',
            title:'End Date'
        }]
    },
    {
        name:'year',
        type:'string',
        title:'Year'
    },
    {
        name:'cover',
        type:'image',
        title:'Cover Image'
    }

    ]
}                  