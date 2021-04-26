import * as s from './styles'

export default function FcfsResult(){
    return(
        <>
        <s.DescriptionLine>
            <s.DescripTitle>평균 대기시간 </s.DescripTitle>
            <s.ResultMath>10초 ⏰</s.ResultMath>
        </s.DescriptionLine>
        <s.DescriptionLine>
            <s.DescripTitle>평균 반환시간 </s.DescripTitle>
            <s.ResultMath>10초 👑</s.ResultMath>
        </s.DescriptionLine>
        </>
    )
}