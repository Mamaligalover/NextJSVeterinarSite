'use client'
import {useEffect, useState} from "react";
import { GetMedicalWorkers } from "@/sanity/sanity-utils";
import TableComponent from "@/components/Table/table.component";
import {v4} from "uuid";
import {MedicalWorkers} from "@/types/MedicalWorkers";
import DateTimeFormatOptions from "use-intl/src/core/DateTimeFormatOptions";


export default function MedicalPage()
{

    const optons :DateTimeFormatOptions={

    };
    const [keyWord, setkeyword] = useState('')

    const [users , setUsers] = useState<MedicalWorkers[]>([]); // Initialize users state

    const [filteredUsers, setfilteredUsers]= useState<MedicalWorkers[]>([])
        useEffect(()=>{
    async function filter(){
        if (keyWord.length>0){
            let filteredUsers = users.filter(item => item.nume.toLowerCase()
                .includes(keyWord.toLowerCase())|| item.prenume.toLowerCase().includes(keyWord.toLowerCase()))
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
                const response = await GetMedicalWorkers();
                setfilteredUsers(response)
                setUsers(response);
            } catch (error) {
            }
        }
        fetchData(); // Call the async function in useEffect
    }, []);

    return(
        <div className={'min-h-screen'}>
            <TableComponent showFilter={true} tableName={'Lista medecilor veterinari'} filterMethod={setkeyword}>
                <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Nume/Prenume</th>
                    <th>Codul medicului veterinar atribuit de CMV </th>
                    <th>Diploma seria/numărul</th>
                    <th>Data înscrierii în CMV</th>
                    <th>Statutul medicului veterinar în CMV</th>
                    <th>Sancțiuni</th>
                </tr>
                </thead>
                <tbody>
                {
                    filteredUsers.map((user)=>{
                        const date = new Date(user.startDate);
                        return(
                            <tr key={v4()} className={'p-20'}>
                                <td className={'p-6'}>{users.indexOf(user)+1}</td>
                                <td>{user.nume} {user.prenume}</td>
                                <td>{user.medicalCodFromCMV}</td>
                                <td>{user.diploNumber}</td>
                                <td>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</td>
                                <td>{
                                    user.statut ==='1'?
                                        <button className={'bg-green-600 text-white px-4 py-2 border rounded-3xl text-1xl'}>
                                            Activ
                                        </button>
                                        :
                                        <button className={'bg-red-600 text-white px-4 py-2 border rounded-3xl text-1xl'}>
                                            Inactiv
                                        </button>
                                }</td>
                                <td >
                                    {
                                        user.sanctions != null ? user.sanctions : "Nu sunt"
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </TableComponent>
        </div>
    )
}