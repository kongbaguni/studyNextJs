import {useRouter} from "next/router";

const Game = () => {
    const router = useRouter();
    const { name } = router.query;

    console.log(router.query);
    return (
        <h1>game boy : {name}</h1>
    )
}
export default Game;
