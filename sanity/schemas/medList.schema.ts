

const MedListSchema = {
    name: 'medicalworker',
    title: 'Medicii veterinarii',
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
            name : 'diplom',
            title: 'Diploma seria/numarul',
            type: 'string'
        },
        {
            name : 'medcod',
            title: 'Codul medicului veterinar atribuit de CMV ',
            type: 'string'
        },
        {
            name : 'sanctions',
            title: 'Sanctiuni ',
            type: 'string'
        },
        {
            name : 'status',
            title: 'Statutul persoanei ',
            type: 'string',
            options: {
                list:[
                    {title:'Activ', value:'1'},
                    {title:'Inactiv', value:'2'},
                ]
            }
        },
        {
            title: 'Data inscrierii in CMV',
            name: 'launchAt',
            type: 'datetime',
            options: {
                dateFormat: 'DD-MM-YYYY',
                timeFormat: 'L',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }
        },

    ]
}
export default MedListSchema;