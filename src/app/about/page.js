async function getData(){
    let res = await fetch('http://localhost:3001/products')

    let json = await res.json()
    return json
}
const Page = async () => {

    let data = await getData();



    return (
        <div>


            {data.map((item, index) => {

                return <div key={index}>
                    <h1>{item['id']}</h1>
                    <h1>{item['discountPercentage']}</h1>
                </div>
            })}

        </div>
    );
};

export default Page;