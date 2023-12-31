

const project = {
    name:'project',
    title : 'Project',
    type: 'document',
    fields :[
        {
            name : 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name : 'slug',
            title: 'Slug',
            type: 'slug',
            option: {source: 'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option : {hotspot : true},
            fields :[
                {
                    name: 'alt',
                    title : 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'url',
            title: 'Urls',
            type: 'url'
        },{
        name: 'content',
            title: 'Content',
            type:'array', of:[{type:'block'}]
        }
    ]
}
export default project;