import { useDispatch } from 'react-redux'
import { ProcessData } from '../interface'
import * as s from './styles'
import { useEffect } from 'react';
import { handleArr } from '../../redux';

export default function ProcessList({arr} : any) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(handleArr(arr));
    },[arr,dispatch])
    return(
        <>
        {arr.map((e : ProcessData,index : number)=>{
            return(
                <s.List key={index}>
                <s.ListContents>{e.pname}</s.ListContents>
                <s.ListContents>실행 : {e.ptime} 초</s.ListContents>
                <s.ListContents>도착 : {e.endTime} 초</s.ListContents>
            </s.List>
            )
        })}
        </>
    )
}