export default{
    name: 'material',
    type: 'document',
    title:'Material',
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
    }

    ]
}                  