import { useEffect, useState } from "react";
import TwoColumnLayout from "../components/TwoColumnLayout";

function HomePage() {
    
    return (
        <>
            <TwoColumnLayout
                imageUrl={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}
                title={"HomePage"}
                paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, eligendi! Corrupti laboriosam sapiente asperiores, consectetur dolore nostrum pariatur optio mollitia quas id voluptatibus! Rem aliquam illum deserunt a maxime tempore? Nam maxime minima veritatis aspernatur incidunt quod eius fuga unde enim! Beatae totam, earum dolorem architecto pariatur aperiam rem, labore minima eaque eos, eum suscipit illum mollitia. Illo dicta recusandae adipisci vitae natus ratione fugit, culpa quod dolore vel id explicabo corrupti quisquam eaque velit, quae quo animi? Hic aliquid enim eligendi similique quis doloremque. Excepturi architecto nobis facilis ducimus dolore neque, quas laborum nesciunt suscipit id ipsa pariatur eveniet."} />
        </>
    )
}

export default HomePage