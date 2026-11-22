// Todo o conteúdo do site fica aqui. Edite os textos sem mexer nos componentes.

export const escola = {
  nome: 'Escola de Dança Ritmo & Arte',
  cidade: 'São Paulo - SP',
  telefone: '(11) 99999-0000',
  email: 'contato@escoladanca.com.br',
  endereco: 'Rua das Flores, 123 - Centro',
  anos: 12,
};

export const modalidades = [
  {
    id: 'balet',
    nome: 'Balé Clássico',
    nivel: 'Todos os níveis',
    descricao: 'Técnica, postura e disciplina. Base para todas as outras danças.',
    cor: 'linear-gradient(135deg, #f8bbd0, #f48fb1)',
  },
  {
    id: 'jazz',
    nome: 'Jazz',
    nivel: 'Iniciante a avançado',
    descricao: 'Movimentos energéticos, saltos e coreografias animadas.',
    cor: 'linear-gradient(135deg, #ffe082, #ffb74d)',
  },
  {
    id: 'hiphop',
    nome: 'Hip Hop',
    nivel: 'Iniciante a avançado',
    descricao: 'Ritmo, atitude e liberdade de expressão nas batidas.',
    cor: 'linear-gradient(135deg, #b39ddb, #7e57c2)',
  },
  {
    id: 'contemporaneo',
    nome: 'Contemporâneo',
    nivel: 'Intermediário',
    descricao: 'Expressão corporal, improvisação e criação de movimento.',
    cor: 'linear-gradient(135deg, #80cbc4, #26a69a)',
  },
  {
    id: 'forro',
    nome: 'Forró',
    nivel: 'Todos os níveis',
    descricao: 'Pé no chão, muita música e dança a dois.',
    cor: 'linear-gradient(135deg, #ffab91, #ff7043)',
  },
  {
    id: 'infantil',
    nome: 'Dança Infantil',
    nivel: '4 a 10 anos',
    descricao: 'Brincadeiras, coordenação e alegria de se movimentar.',
    cor: 'linear-gradient(135deg, #a5d6a7, #66bb6a)',
  },
];

export const professores = [
  { nome: 'Ana Beatriz', especialidade: 'Balé Clássico', formacao: 'Bailarina formada pelo Theatro Municipal' },
  { nome: 'Rafael Souza', especialidade: 'Hip Hop', formacao: 'Coreógrafo com 10 anos de palco' },
  { nome: 'Juliana Lima', especialidade: 'Jazz e Contemporâneo', formacao: 'Pós-graduada em Artes Cênicas' },
  { nome: 'Marcos Oliveira', especialidade: 'Forró', formacao: 'Instrutor certificado de dança de salão' },
];

export const horarios = [
  { dia: 'Segunda', aulas: [{ hora: '08:00', aula: 'Balé Clássico' }, { hora: '19:00', aula: 'Jazz' }] },
  { dia: 'Terça', aulas: [{ hora: '14:00', aula: 'Dança Infantil' }, { hora: '20:00', aula: 'Hip Hop' }] },
  { dia: 'Quarta', aulas: [{ hora: '08:00', aula: 'Balé Clássico' }, { hora: '19:00', aula: 'Contemporâneo' }] },
  { dia: 'Quinta', aulas: [{ hora: '14:00', aula: 'Dança Infantil' }, { hora: '20:00', aula: 'Forró' }] },
  { dia: 'Sexta', aulas: [{ hora: '19:00', aula: 'Hip Hop' }, { hora: '21:00', aula: 'Forró' }] },
  { dia: 'Sábado', aulas: [{ hora: '09:00', aula: 'Jazz' }, { hora: '11:00', aula: 'Balé Clássico' }] },
];

export const planos = [
  { nome: 'Mensal', preco: 'R$ 189', detalhe: '2 aulas por semana', destaque: false },
  { nome: 'Trimestral', preco: 'R$ 159', detalhe: 'por mês, 3 aulas por semana', destaque: true },
  { nome: 'Anual', preco: 'R$ 139', detalhe: 'por mês, aulas ilimitadas', destaque: false },
];
