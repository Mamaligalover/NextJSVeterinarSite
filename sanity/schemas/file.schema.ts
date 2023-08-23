



const FileSchema = {

    name:'customfileUpload',
    title: 'Fisiere',
    type: 'file',
    fields: [
        {
            name: 'name',
            title:'Denumirea',
            type:'string'
        },
        {
            name:'description',
            title:'Descrierea',
            type:'string'
        }
    ]
}

export default FileSchema