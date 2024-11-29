import Nav from "../_components/navbar";




export default async function Filmes() {
  
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f7a3cd5feb294cd30dd7e141da01273c`);
  const data = await res.json();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

return (
    <div className="bg-black">
      <div>
        <Nav/>
      </div>
      <h1 className="text-center text-white mt-7 mb-7 text-2xl sm:text-3xl md:text-4xl">Filmes Populares</h1>
      {data.results && data.results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 px-4 md:px-8">
          {data.results.map((filme:any) => (
            <div key={filme.id} className="text-center">
              <img 
                src={`${imageBaseUrl}${filme.poster_path}`} 
                alt={filme.title}
                className="w-full h-auto cursor-pointer rounded-lg mb-4"
              />
              <h3 className="text-white text-sm sm:text-base md:text-lg">{filme.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Não há filmes para exibir.</p>
      )}
    </div>
  );
}
