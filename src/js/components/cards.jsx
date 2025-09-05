import React from "react";

const Card = (props) => (
    <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
        <div className="card h-100 w-100 border-secondary">
            <img src={props.img} className="card-img-top rounded-top img-fluid" style={{objectFit: 'cover', height: '250px'}} alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <div className="d-flex justify-content-center">
                    <a href={props.link} target="_blank" className="btn btn-primary">Leer más</a>
                </div>
            </div>
        </div>
    </div>
);

const Cards = () => {
    const cardsData = [
        {
            img: "https://img.asmedia.epimg.net/resizer/v2/L7QK2VBMINGAFE6KOWE6CCGUYY.jpg?auth=ed09152a8bf0375ca2012c6507ff6c43887cf3bc07396b2a6f083428286b1ca4&width=1200&height=1200&smart=true",
            alt: "Luffy",
            title: "Monkey D. Luffy",
            text: "El capitán de los Sombrero de Paja, alegre y valiente, sueña con ser el Rey de los Piratas.",
            link: "https://onepiece.fandom.com/es/wiki/Monkey_D._Luffy"
        },
        {
            img: "https://alfabetajuega.com/hero/2024/07/el-episodio-1112-del-anime-de-one-piece-desata-el-verdadero-poder-de-shanks.jpg?width=768&aspect_ratio=16:9&format=nowebp",
            alt: "Shanks",
            title: "Shanks",
            text: "Uno de los Yonkou, famoso por su carisma y por inspirar a Luffy a ser pirata.",
            link: "https://onepiece.fandom.com/es/wiki/Shanks"
        },
        {
            img: "https://albumizr.com/ia/df9d07601cc563c8bf04e957cc5b8270.jpg",
            alt: "Kurohige",
            title: "Marshall D. Teach",
            text: "Conocido como Barbanegra, es uno de los piratas más peligrosos y ambiciosos del mundo.",
            link: "https://onepiece.fandom.com/es/wiki/Marshall_D._Teach"
        },
        {
            img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/52b335813e4f150826ff49582a524d7c.jpg",
            alt: "Buggy",
            title: "Buggy",
            text: "El payaso pirata, carismático y divertido, ha tenido una carrera llena de sorpresas.",
            link: "https://onepiece.fandom.com/es/wiki/Buggy"
        }
    ];

    return (
        <div className="row justify-content-center mx-2">
            {cardsData.map((card, idx) => (
                <Card key={idx} {...card} />
            ))}
        </div>
    );
}

export default Cards;
