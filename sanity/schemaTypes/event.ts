export default{
    name: 'event',
    type: 'document',
    title:'Event',
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
        name:'url',
        type:'url',
        title:'URL'
    },
    {
        name:'summary',
        type:'array',
        title:'Summary',
        of:[{type:'block'}]
    },
    {
        name:'loc',
        type:'object',
        title:'Venue',
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
            name:'address',
            type:'string',
            title:'Address'
        },
        {
            name:'city',
            type:'string',
            title:'city'
        },
        {
            name:'state',
            type:'string',
            title:'State'
        },
        {
            name:'zip',
            type:'string',
            title:'Zip'
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
        name:'cover',
        type:'image',
        title:'Cover Image'
    },
    {
        name:'feat',
        type:'image',
        title:'Cover Image'
    }

    ]
}                  