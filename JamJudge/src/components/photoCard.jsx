function PhotoCard({ src, alt }) {
    return (
        <img className="photo-item" src={src} alt={alt} />
    );
}

export default PhotoCard;