export default function ScientistCard({ name, imageUrl, profesion, premios, descubrio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} className="foto" />
      <ul>
        <li><b>Profesión:</b> {profesion}</li>
        <li><b>Premios:</b> {premios}</li>
        <li><b>Descubrió:</b> {descubrio}</li>
      </ul>
    </div>
  );
}