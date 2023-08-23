
const GeneralInformationSchema = {

    name: 'generalinfo',
    title: 'Informatii generale',
    type : 'document',
    fields :[
        {
            name : 'title',
            title: 'Antetul',
            type: 'string'
        },
        {
            name: 'content',
            title :'Continut',
            type: 'array',
            of:[
                {type: 'block'}
            ]
        }
    ]
}

export default GeneralInformationSchema;