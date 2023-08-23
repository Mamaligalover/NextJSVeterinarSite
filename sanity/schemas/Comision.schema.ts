

const ComisionSchema = {
    name: 'comision',
    title : 'Comisia de dentologie si Litigii',
    type : 'document',
    fields : [
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
        }
    ]
}
export default ComisionSchema;