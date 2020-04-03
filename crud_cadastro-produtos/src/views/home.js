import React from 'react';

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem-vindo</h1>
            <p className="lead">
                Este é o seu sistema, utilize a barra de navegação para navegar.
            </p>
            <hr className="my-4"></hr>
            <p>
                Realizado com total sucesso!!!
            </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
            </p>
        </div>
    );
}
export default Home;