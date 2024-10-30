import { NextPage, GetServerSideProps } from "next";
import {useState} from "react";
import styles from "./index.module.css";

type Pros = {
    initialImageUrl: string;
};

const IndexPage: NextPage<Pros> = ({initialImageUrl}) => {
    // useStateを使って状態を定義する
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(false);
    // マウント時に画像を読み込む宣言
    // useEffect(() => {
    //     fetchImage().then((newImage) => {
    //             setImageUrl(newImage.url);
    //             setLoading(false);
    //         }
    //     );
    // }, []);
    // ボタンをクリックしたときに画像を読み込む処理
    const handleClick = async () => {
        setLoading(true);
        const newImage = await fetchImage();
        setImageUrl(newImage.url);
        setLoading(false);
    };
    // ローディング中でなければ，画像を表示する
    return (
        <div className={styles.page}>
            <button onClick={handleClick} className={styles.button}>他のにゃんこも見る</button>
            <div>{loading || <img src={imageUrl} className={styles.img} />}</div>
        </div>
    );
};
export default IndexPage;

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Pros> = async () => {
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
};

type Image ={
    url: string;
};

const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
};

// fetchImage();