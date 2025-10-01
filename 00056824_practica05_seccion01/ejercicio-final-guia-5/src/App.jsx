import ScientistCard from "./ScientistCard";

export default function App() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      
      <ScientistCard
        name="Maria Skłodowska-Curie"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg"
        profesion="física y química"
        premios="4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)"
        descubrio="polonio (elemento químico)"
      />

      <ScientistCard
        name="Katsuko Saruhashi"
        imageUrl="https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg"
        profesion="geoquímica"
        premios="2 (Premio Miyake de geoquímica, Premio Tanaka)"
        descubrio="un método para medir el dióxido de carbono en el agua de mar"
      />
    </div>
  );
}