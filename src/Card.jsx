function Card(props){
    
    return(
        <>
        <div className="card">
            <div className="card-upper">
                <video className="card-video">
                    <source src="{props.video}" type="video/mp4"></source>
                </video>
            </div>
            <div className="card-lower">
                <p className="card-title">{props.title}</p>
                <p className="card-subtitle">{props.subtitle}</p>
                <p className="card-uploadDate">{props.uploadDate}</p>
            </div>
        </div>
        </>
    );
}

export default Card;