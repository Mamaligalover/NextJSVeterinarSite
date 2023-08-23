
 const BiroulexecutivSchema = {

    name: 'executivbirou',
    title: 'Biroul executiv',
    type : 'document',
    fields :[
        {
            name: 'prenume',
            title: 'Prenume',
            type: 'string'
        },
        {
            name : 'nume',
            title: 'Nume',
            type: 'string'
        },
        {
            name:'functia',
            title: 'Functia',
            type : 'string'
        },
        {
            name: 'contact',
            title: 'Date de contact',
            type: 'string'
        }
    ]
}
export default BiroulexecutivSchema;