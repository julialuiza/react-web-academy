"use client";

import Image from "next/image";

export default function Produto() {
  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

            <h5 className="card-title mb-4 fw-bold">Nome produto</h5>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
              <Image key={""} src={""} alt={""} width={300} height={320} />
            </div>

            <p className="card-text fw-medium">
              Valor: R${Number(2000).toFixed(2)}
            </p>
            <p className="card-text fw-medium">Descrição: ""</p>
            <p className="card-text fw-medium">Anunciado por: ""</p>

            <h5 className="card-title mb-4 fw-bold">Carregando...</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
