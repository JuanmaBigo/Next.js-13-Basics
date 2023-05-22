export default function Post({ params }) {
    const { id } = params;
    return (
        <div>
            <h1>Esto es el post {id}</h1>
        </div>
    )
}