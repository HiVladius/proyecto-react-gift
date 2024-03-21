
import { useFechtGifsRandom } from "../hooks/useFechtGifs"
import GifItem from "./GifItem"

export const GetRandomCategory = ({category}) => {
    
    const { image, isLoading } = useFechtGifsRandom(category);



    return (
        <>
         
            <div className="card-grid">
                <GifItem key={image.id} {...image} />
            </div>
        </>
    )
}