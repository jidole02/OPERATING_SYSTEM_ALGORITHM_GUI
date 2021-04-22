import { ProcessData } from '../interface'
import * as s from './styles'

export default function ProcessList({arr} : any) {
    return(
        <>
        {arr.map((e : ProcessData,index : number)=>{
            return(
                <s.List key={index}>
                <s.ListContents>{e.pname}</s.ListContents>
                <s.ListContents>{e.ptime} 초</s.ListContents>
                <s.ListContents>{e.endTime} 초</s.ListContents>
            </s.List>
            )
        })}
        </>
    )
}