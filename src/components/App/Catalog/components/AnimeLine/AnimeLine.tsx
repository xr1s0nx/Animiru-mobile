import { TAnime } from "~types";
import { LineWrapView } from "./AnimeLineStyles";
import { Image } from "react-native"

export const AnimeLine = ({ info }: { info: TAnime }) => {
    return (
        <LineWrapView>
            <Image style={{ borderRadius: 16 }} source={{ uri: info.images.banner }} width={120} height={180} />
        </LineWrapView>
    )
}