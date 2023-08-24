"use client"
import TableComponent from "@/components/Table/table.component";
import groq from "groq";
import client from "@/client";
import {v4} from "uuid";
import urlFor from "@/lib/urlFor";
import {useEffect, useState} from "react";
import {ComisiaDentologieLitigii} from "@/sanity/sanity-utils";
import {BiroulExecutivType} from "@/types/BiroulExecutivType";



 function FormareaProfesionalaContinue()
{
    const [keyWord, setkeyword] = useState('')
    const [users, setUsers] = useState<BiroulExecutivType[]>([])
    const [filterusers, setFilterUsers] = useState<BiroulExecutivType[]>([])
    const query = groq`*[_type == "compformareaprofesionalacontinua"]{
    _id ,
        "firstName" : prenume,
        "lastName" : nume,
        "workPositionName" :functia,
        contact
        }`

    useEffect(()=>{
        async function filter(){
            if (keyWord.length>0){
                let filteredUsers = users.filter(item => item.lastName.toLowerCase()
                    .includes(keyWord.toLowerCase())|| item.firstName.toLowerCase().includes(keyWord.toLowerCase()))
                console.log(filteredUsers)
                setFilterUsers(filteredUsers);
            }else{
                setFilterUsers(users)
            }

        }
        filter();
    },[keyWord])
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await client.fetch<BiroulExecutivType[]>(query)

                setUsers(response);
                setFilterUsers(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData(); // Call the async function in useEffect
    }, []);



    return(<div className={'min-h-screen'}>
        <TableComponent showFilter={true} tableName={'Componența Comisiei pentru Știință, Cercetare și Formare Profesională Continuă'} filterMethod={setkeyword}>
                <thead>
                   <tr>
                        <th>Nr.</th>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Funcția</th>
                        <th>Contact</th>
                   </tr>
                </thead>
                <tbody>
                {
                    filterusers.map((user)=>{
                        return(
                            <tr key={v4()} >
                                <td className={'p-4'}>{users.indexOf(user)+1}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.workPositionName}</td>
                                <td>{user.contact}</td>

                            </tr>
                        )
                    })
                }
                </tbody>
        </TableComponent>
    </div>)
}
export default FormareaProfesionalaContinue;