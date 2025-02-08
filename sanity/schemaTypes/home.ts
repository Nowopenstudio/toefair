import { validation } from "sanity";

export default{
    name: 'home',
    type: 'document',
    title:'Homepage',
    fields:[{
        name:'name',
        type:'string',
        title:'Name'
    },
    {
        name:'bio',
        type:'array',
        title:'Bio',
        of:[{type:'block'}]
    },
    {
        name:'heroes',
        type:'array',
        title:"Featured Projects",
        validation: rule => rule.max(2),
        of:[
            {
                name:'artwork',
                type:'reference',
                title:"Artwork",
                to:[{type:'artwork'}]

            }
        ]
    },
    {
        name:'upcoming',
        type:'array',
        title:"Featured Events",
        validation: rule => rule.max(2),
        of:[
            {
                name:'event',
                type:'reference',
                title:"Upcoming Event",
                to:[{type:'event'}]

            }
        ]
    },
    {
        name:'press',
        type:'array',
        title:'Press',
        of:[
            {
                name:'article',
                type:'object',
                title:'Article',
                fields:[{
                    name:'title',
                    type:'string',
                    title:"Title"
                },
                {
                    name:'date',
                    type:'date',
                    title:'Publish Date'
                },
                {
                    name:'link',
                    type:'url',
                    title:'Link'
                }
            ]
            }
        ]
    },
    {name:'navIcon',
        type:'image',
        title:'Nav Icon'
    },
    {name:'walkIcon',
        type:'image',
        title:'Walk Icon'
    },
    {   name:'ad',
        type:'image',
        title:'Billboard'
    },
    {   name:'bioIcon',
        type:'image',
        title:'Bio Icon'
    }
    ]
}