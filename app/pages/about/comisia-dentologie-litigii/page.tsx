'use client'
import TableComponent from "@/components/Table/table.component";
import { useState, useEffect } from "react";
import {ComisiaDentologieLitigii, GetBiroulExecutiv} from "@/sanity/sanity-utils";
import {v4} from "uuid";
import {BiroulExecutivType} from "@/types/BiroulExecutivType";

async function GetDataFromServer() :Promise<BiroulExecutivType[]>
{
    let response = await GetBiroulExecutiv();
    return response;
}

export  default    function ComisiaDeNtologieLitigii() {
    const [keyWord, setkeyword] = useState('')
    const [users , setUsers] = useState<BiroulExecutivType[]>([]); // Initialize users state

    const [filteredUsers, setfilteredUsers]= useState<BiroulExecutivType[]>([])

    useEffect(()=>{
        async function filter(){
            if (keyWord.length>0){
                let filteredUsers = users.filter(item => item.lastName.toLowerCase()
                    .includes(keyWord.toLowerCase())|| item.firstName.toLowerCase().includes(keyWord.toLowerCase()))
                console.log(filteredUsers)
                setfilteredUsers(filteredUsers);
            }else{
                setfilteredUsers(users)
            }

        }
        filter();
    },[keyWord])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await ComisiaDentologieLitigii();
                console.log(response)
                setUsers(response);
                setfilteredUsers(response);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData(); // Call the async function in useEffect
    }, []);

    return(
        <div className={'min-h-screen'}>
            <TableComponent showFilter={true} tableName={'Comisia de Dentologie și Litigii'} filterMethod={setkeyword}>
                <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Nume/Prenume</th>
                    <th>Funcția</th>
                    <th>Contacte</th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredUsers.map((user)=>{
                        return(
                            <tr key={v4()} className={'p-20'}>
                                <td className={'p-10'}>{users.indexOf(user)+1}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.workPositionName}</td>
                                <td>{user.contact}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
                <tfoot>

                </tfoot>
            </TableComponent>
        </div>
    )
}