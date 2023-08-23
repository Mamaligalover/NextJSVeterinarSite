'use client'
import TableComponent from "@/components/Table/table.component";
import {useEffect, useState} from "react";
import groq from "groq";
import client from "@/client";


function LegalInfo(){

    const [keyWord, setkeyword] = useState('')
    const [files, setFiles] = useState<FileInterface[]>([])
    const query = groq`*[_type == "legalinformation"]{
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

    return(
        <div className={'min-h-screen'}>

            <div className={'min-h-screen'}>
                <TableComponent showFilter={false} tableName={'Legislație'} filterMethod={()=>{}}>
                    <table>
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
                                    <tr key={file._id} >
                                        <td className={'p-4'}>{files.indexOf(file)+1}</td>
                                        <td>{file.name}</td>
                                        <td>{file.description}</td>
                                        <td>
                                            <a href={`${file.fileUrl}?dl=`} target={'_black'} className={'p-4 hover:text-blue-400 border shadow'}>
                                                Descarca
                                            </a></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </TableComponent>
            </div>)
        </div>
    )
}

export default LegalInfo