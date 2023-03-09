function TwoColumnLayout({ imageUrl, title, paragraph }) {
    return (
        <>
            <div className="flex my-10">
                <div style={{ height: '70vh' }} className="w-6/12 p-5">
                    <img className="h-full object-cover" src={imageUrl} alt="" />
                </div>
                <div style={{ height: '70vh' }} className="w-6/12 p-5">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="mt-5">{paragraph}</p>
                </div>
            </div>
        </>
    )
}


export default TwoColumnLayout