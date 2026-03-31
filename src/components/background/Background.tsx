const Background = () => {
  return (
    <div className="background-root" aria-hidden="true">
      {/* Grid de puntos */}
      <div className="bg-dot-grid" />

      {/* Orbes flotantes */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Viñeta de borde */}
      <div className="bg-vignette" />
    </div>
  );
};

export default Background;
