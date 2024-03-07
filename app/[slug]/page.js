export const dynamicParams = false;

export async function generateStaticParams() {
    return [{slug: "one"}, {slug: "sticks & stones"}, {slug: "morning glory"}]
}

export default function SecondPage({params}){
    const {slug} = params;

    return (
        <div>
            <p>{slug}</p>
        </div>
    )
}