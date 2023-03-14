import { useState } from "react"

function ReadMore() {
    const [isReadMore, setIsReadMore] = useState(false)
    const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe consequuntur odit doloribus, cupiditate nostrum voluptas ipsam earum accusantium recusandae sunt unde suscipit aliquam pariatur, obcaecati illo dignissimos quia nihil exercitationem ea libero dolorum? In, aliquid earum corporis fugiat tempora, consequatur nisi laboriosam dignissimos necessitatibus commodi quo adipisci. Reprehenderit eos placeat suscipit magni necessitatibus! Suscipit ipsam ratione, cupiditate excepturi dolorem voluptates eum facilis, ut consequatur quae quo molestias magnam incidunt officia provident consectetur labore accusamus, rerum quam ab esse iure sequi velit laudantium? Quas animi excepturi quam. Assumenda quae earum qui magni laudantium expedita quos minima. Dolor veritatis aliquid similique ullam dolorem deserunt vero commodi suscipit aperiam ad quasi maxime fugiat atque, totam repellendus velit, nobis voluptas illum facere aut hic minus beatae? Repellat quam quo porro tempore accusamus, consectetur, fugiat sit voluptate facilis assumenda deleniti tempora. Nobis voluptatum laboriosam harum, nostrum aliquam culpa explicabo ex at eum, libero quod illo in. Ut dicta dolorem debitis excepturi aspernatur id numquam deleniti deserunt, enim, placeat aliquam fugiat perferendis explicabo culpa esse provident, ea ad. Quaerat alias obcaecati saepe soluta. Rem commodi molestias aut dolor, officiis quae voluptate illo perferendis laudantium veniam eligendi deleniti inventore magni vel dolores dolore omnis dolorem culpa."
    return (
        <>
            <div className="mt-10 flex flex-col items-center">
                <p className="w-3/4">{isReadMore ? paragraph : paragraph.slice(0, 300)}</p>
                <button
                    onClick={() => setIsReadMore(!isReadMore)} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {isReadMore ? "Read Less" : "Read More"}
                </button>
            </div>
        </>
    )
}

export default ReadMore