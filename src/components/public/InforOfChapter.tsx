import * as s from './styles'
import { InforChapterParams } from './../interface';

export default function InforOfChapter(e : InforChapterParams){
    return(
        <s.IntroChapter>
            <h2>{e.title}</h2>
        </s.IntroChapter>
    )
}