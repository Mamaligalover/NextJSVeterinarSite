"use client"
import TableComponent from "@/components/Table/table.component";
import groq from "groq";
import client from "@/client";
import { v4 } from "uuid";
import { useEffect, useState } from "react";



function FormareaProfesionalaContinueDocs()
{
    const [files, setFiles] = useState<FileInterface[]>([])
    const query = groq`*[_type == "formareaprofesionala"]{
    "name" :file.name,
    "description":file.description,
    "fileUrl":file.asset->url}`
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await client.fetch<FileInterface[]>(query)
                setFiles(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData(); // Call the async function in useEffect
    }, []);



    return(<div className={'min-h-screen'}>
        <TableComponent showFilter={false} tableName={'Formarea profesională continuă'} filterMethod={()=>{}}>
                <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Denumirea documentului</th>
                    <th>Descrierea</th>
                    <th> Acțiuni</th>
                </tr>
                </thead>
                <tbody>
                {
                    files.map((file)=>{
                        return(
                            <tr key={v4()} >
                                <td className={'p-4'}>{files.indexOf(file)+1}</td>
                                <td>{file.name}</td>
                                <td>{file.description}</td>
                                <td>
                                    <a href={`${file.fileUrl}?dl=`} target={'_black'} className={'p-4 hover:text-blue-400'}>
                                        Descarcă
                                    </a></td>
                            </tr>
                        )
                    })
                }
                </tbody>
        </TableComponent>
    </div>)
}
export default FormareaProfesionalaContinueDocs;