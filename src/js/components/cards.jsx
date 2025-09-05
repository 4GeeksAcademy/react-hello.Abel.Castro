import React from "react";

const Cards = () => {
    return (
        <div className="row justify-content-center mx-2">
            <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
                <div className="card h-100 w-100 border-secondary">
                    <img src="https://img.asmedia.epimg.net/resizer/v2/L7QK2VBMINGAFE6KOWE6CCGUYY.jpg?auth=ed09152a8bf0375ca2012c6507ff6c43887cf3bc07396b2a6f083428286b1ca4&width=1200&height=1200&smart=true" className="card-img-top rounded-top img-fluid" style={{objectFit: 'cover', height: '250px'}} alt="Luffy" />
                    <div className="card-body">
                        <h5 className="card-title">Monkey D. Luffy</h5>
                        <p className="card-text">El capitán de los Sombrero de Paja, alegre y valiente, sueña con ser el Rey de los Piratas.</p>

                        <div className="d-flex justify-content-center">
                            <a href="https://onepiece.fandom.com/es/wiki/Monkey_D._Luffy" target="_blank" className="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
                <div className="card h-100 w-100 border-secondary">
                    <img src="https://alfabetajuega.com/hero/2024/07/el-episodio-1112-del-anime-de-one-piece-desata-el-verdadero-poder-de-shanks.jpg?width=768&aspect_ratio=16:9&format=nowebp" className="card-img-top img-fluid" style={{objectFit: 'cover', height: '250px'}} alt="Shanks" />
                    <div className="card-body">
                        <h5 className="card-title">Shanks</h5>
                        <p className="card-text">Uno de los Yonkou, famoso por su carisma y por inspirar a Luffy a ser pirata.</p>

                        <div className="d-flex justify-content-center">
                            <a href="https://onepiece.fandom.com/es/wiki/Shanks" target="_blank" className="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
                <div className="card h-100 w-100 border-secondary">
                    <img src="https://albumizr.com/ia/df9d07601cc563c8bf04e957cc5b8270.jpg" className="card-img-top img-fluid" style={{objectFit: 'cover', height: '250px'}} alt="Kurohige" />
                    <div className="card-body">
                        <h5 className="card-title">Marshall D. Teach</h5>
                        <p className="card-text">Conocido como Barbanegra, es uno de los piratas más peligrosos y ambiciosos del mundo.</p>

                        <div className="d-flex justify-content-center">
                            <a href="https://onepiece.fandom.com/es/wiki/Marshall_D._Teach" target="_blank" className="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 d-flex">
                <div className="card h-100 w-100 border-secondary">
                    <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/52b335813e4f150826ff49582a524d7c.jpg" className="card-img-top img-fluid" style={{objectFit: 'cover', height: '250px'}} alt="Buggy" />
                    <div className="card-body">
                        <h5 className="card-title">Buggy</h5>
                        <p className="card-text">El payaso pirata, carismático y divertido, ha tenido una carrera llena de sorpresas.</p>

                        <div className="d-flex justify-content-center">
                            <a href="https://onepiece.fandom.com/es/wiki/Buggy" target="_blank" className="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
