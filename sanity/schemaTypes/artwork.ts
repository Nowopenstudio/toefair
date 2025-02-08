export default{
    name: 'artwork',
    type: 'document',
    title:'Artwork',
    groups: [
        {
          name: 'sales',
          title: 'Sales',
        },
      ],
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
        name:'details',
        type:'object',
        title:'Details',
        fields:[
            {
                name:'collection',
                type:'reference',
                title:'Collection',
                to:[{type:'collection'}]
            },
            {
                name:'mats',
                type:'array',
                title:'Materials',
                of:[{
                    type:'reference',
                    name:'mat',
                    title:"Material",
                    to:[{type:'material'
        
                    }]
                }]
            },
            {
                name:'size',
                type:'string',
                title:'Dimesions'
            },
        ]
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
    },
    {
        name:'scale',
        type:'string',
        title:'building scale'
    },
    {
        name:'images',
        type:'array',
        title:'Images',
        of:[{
            type:'object',
            name:'img',
            title:'Image',
            fields:[{
                type:'array',
                name:'desc',
                title:'Description',
                of:[{type:'block'}]
            },
            {
                type:'image',
                name:'img',
                title:'Image'
            },
        ]
        }]
    },
    {
        name:'sell',
        title:'On Sale',
        type: 'boolean',
        group:'sales'
    },
    {
        name:'sold',
        title:'Sold',
        type: 'boolean',
        group:'sales'
    },
    {
        name:'price',
        title:'Price',
        type: 'string',
        group:'sales'
    }

    ]
}                  