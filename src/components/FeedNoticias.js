import React, { useState, useEffect } from 'react';
import { Container, Card, Image, Button } from 'react-bootstrap';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const FeedNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const noticiasExemplo = [
      {
        id: 1,
        titulo: 'Feira de Ciências 2023',
        conteudo: 'Nossa feira de ciências anual será realizada na próxima semana. Não perca!',
        imagem: 'https://images.unsplash.com/photo-1564982648652-1c1c8f9b7c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        data: '2023-05-15',
        curtidas: 45,
        comentarios: 12,
      },
      {
        id: 2,
        titulo: 'Concurso de poesia',
        conteudo: 'O concurso de poesia da escola está aberto para todos os alunos. Envie suas criações até o final do mês!',
        imagem: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        data: '2023-05-10',
        curtidas: 32,
        comentarios: 8,
      },
      {
        id: 3,
        titulo: 'Horário da biblioteca',
        conteudo: 'Lembramos que a biblioteca estará aberta de segunda a sexta, das 8h às 17h.',
        data: '2023-05-08',
        curtidas: 15,
        comentarios: 3,
      },
      {
        id: 4,
        titulo: 'COMUNICADO IMPORTANTE: Alteração no calendário escolar',
        conteudo: 'Devido a reformas na escola, as aulas serão suspensas na próxima semana. O calendário foi ajustado e as aulas serão repostas no final do semestre.',
        data: '2023-05-05',
        curtidas: 87,
        comentarios: 42,
        destaque: true,
      },
      {
        id: 5,
        titulo: 'Campeonato de xadrez',
        conteudo: 'As inscrições para o campeonato de xadrez estão abertas. Procure o professor de matemática para mais informações.',
        imagem: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        data: '2023-05-03',
        curtidas: 28,
        comentarios: 6,
      },
    ];
    setNoticias(noticiasExemplo);
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Feed de Notícias da Escola</h1>
      {noticias.map((noticia) => (
        <Card 
          key={noticia.id} 
          className={`mb-4 ${noticia.destaque ? 'border-danger' : ''}`}
        >
          <Card.Body className={noticia.destaque ? 'bg-danger bg-opacity-10' : ''}>
            <Card.Title>{noticia.titulo}</Card.Title>
            <Card.Text>{noticia.conteudo}</Card.Text>
            {noticia.imagem && (
              <Image src={noticia.imagem} fluid className="mb-3" />
            )}
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{noticia.data}</small>
              <div>
                <Button variant="light" className="mr-2">
                  <FaHeart /> {noticia.curtidas}
                </Button>
                <Button variant="light" className="mr-2">
                  <FaComment /> {noticia.comentarios}
                </Button>
                <Button variant="light">
                  <FaShare />
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default FeedNoticias;
