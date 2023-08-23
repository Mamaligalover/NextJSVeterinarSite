const LegalinformationSchema ={

    name:'legalinformation',
    title: 'Legislatie',
    type: 'document',
    fields:[
        {
            name:'file',
            title:'Fisiere',
            type:'customfileUpload',
        }
    ]
}

export default LegalinformationSchema;