import Image from 'next/image';

import style from './page.module.css';

export default function Home () {
  return(
    <div className="container">
      <h1 className={style.tituloHome}>Título 1</h1>
      <h2>Título 2</h2>
      <h3>Título 3</h3>
      <p className="txtDestaque">Primeiro exemplo do Next</p>
      <p>Primeiro exemplo Next</p>
      <small>Texto menor</small>
      <br />
      <div className="quadrado"></div>

      <Image 
        src={'/temp/arvore.jpg'}
        alt="Picture of the author"
        width={130}
        height={90}
      />

      <Image 
        src={'/temp/arvorePequena.jpg'}
        alt="Árvore pequena"
        width={1300}
        height={900}
      />
    </div>


   
  );
}