import './table.style.scss'
import {JSX, ReactNode, useState} from "react";


type TableProps = {
    children : string | JSX.Element |JSX.Element[]|ReactNode;
    tableName:string;
    showFilter:boolean;
    filterMethod :(keyword:string)=> void ;
}



const TableComponent = ({children,tableName, filterMethod, showFilter}:TableProps) => {


   async function  handelKeyWordInput(keyWord:string){
       if (filterMethod) {
           filterMethod(keyWord);
       }
    }

    return (
        <div>
            <div className={'text-5xl text-center p-10 font-bold text-gray-400'}>
                {tableName}
            </div>

        <div className={'table-responsible'}>
            {showFilter&& <div className={'w-11/12 flex justify-end'}>
                <input
                    onChange={(value) => handelKeyWordInput(value.target.value)}
                    type={'search'}
                    placeholder={'Cauta dupa nume sau prenume'}
                    className={'p-4 border-2 border-gray-300'}/>
            </div>}
          <table>
              {children}
          </table>
        </div>
        </div>

    )
}
export default TableComponent;