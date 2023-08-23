import {defineField, defineType} from "sanity";

export default defineType( {

    name:'partner',
    title:'Parteneri',
    type:'document',
    fields:[
        defineField({
            title: 'Denumirea',
            name:'name',
            type: 'string'
        }),
        defineField({
            name: 'mainImage',
            title: 'Imaginea',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name:'decription',
            title:'Scurta descriere',
            type: 'string'
        }),
        defineField({
            name:"link",
            title: "Redirect Link",
            type:"string"
        })
    ]


})

